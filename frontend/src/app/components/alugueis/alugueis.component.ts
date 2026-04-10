import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { forkJoin, catchError, of, map } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { ApiService } from '../../services/api.service';
import { ToastService } from '../../shared/services/toast.service';

interface VehicleOption {
  id: number;
  licensePlate: string;
  make: string;
  model: string;
  status: string;
}

interface DriverOption {
  id: number;
  name: string;
  status: string;
}

interface CreateRentalDTO {
  id?: number;
  vehicleId: number;
  driverId: number;

  startDate: string;  // YYYY-MM-DD
  endDate: string;    // YYYY-MM-DD

  status: 'ACTIVE' | 'CLOSED' | 'CANCELLED';
}

interface Aluguel {
  id?: number;
  vehicleId: number | number;
  driverId: number | number;
  startDate: string;
  endDate: string;
  status: string;
  vehicle?: { make: string; model: string };
  driver?: { name: string };
}

@Component({
  selector: 'app-alugueis',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  template: `
    <div class="page-header">
      <div class="page-header-left">
        <h1>Aluguéis</h1>
        <nav class="breadcrumbs">
          <a routerLink="/dashboard">Início</a>
          <span class="separator">/</span>
          <span>Aluguéis</span>
        </nav>
      </div>
      <button class="btn btn-primary" (click)="openModal()" *ngIf="isGestor">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
        Novo Aluguel
      </button>
    </div>

    <div class="card">
      <div class="table-wrapper" *ngIf="!loading && !loadError">
        <table *ngIf="alugueis.length > 0">
          <thead>
            <tr>
              <th>Veículo</th>
              <th>Motorista</th>
              <th>Início</th>
              <th>Fim</th>
              <th>Status</th>
              <th *ngIf="isGestor">Ações</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let aluguel of alugueis">
              <td><strong>{{ getVeiculoNome(aluguel) }}</strong></td>
              <td>
                <div style="display:flex;align-items:center;gap:10px">
                  <div class="table-avatar">{{ getMotoristaNome(aluguel).charAt(0) }}</div>
                  {{ getMotoristaNome(aluguel) }}
                </div>
              </td>
              <td>{{ formatDate(aluguel.startDate) }}</td>
              <td>{{ formatDate(aluguel.endDate) }}</td>
              <td>
                <span class="badge" [class]="statusClass(aluguel.status)">
                  {{ statusLabel(aluguel.status) }}
                </span>
              </td>
              <td *ngIf="isGestor">
                <div class="actions-group">
                  <button class="btn btn-outline btn-sm" (click)="editAluguel(aluguel)">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/><path d="m15 5 4 4"/></svg>
                    Editar
                  </button>
                  <button class="btn btn-danger btn-sm" (click)="aluguel.id && deleteAluguel(aluguel.id!)">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></svg>
                    Excluir
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        <div class="empty-state" *ngIf="alugueis.length === 0">
          <svg class="empty-state-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect width="8" height="4" x="8" y="2" rx="1" ry="1"/>
          </svg>
          <h3 class="empty-state-title">Nenhum aluguel cadastrado</h3>
          <p class="empty-state-text" *ngIf="isGestor">Clique em "Novo Aluguel" para começar.</p>
        </div>
      </div>

      <div class="error-state" *ngIf="loadError">
        <button class="btn btn-primary" (click)="loadAll()">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg>
          Tentar novamente
        </button>
      </div>

      <div class="inline-loading" *ngIf="loading">
        <div class="spinner-sm"></div>
        <span>Carregando aluguéis...</span>
      </div>
    </div>

    <!-- Modal -->
    <div class="modal-overlay" *ngIf="showModal" (click)="closeModal()">
      <div class="modal" (click)="$event.stopPropagation()">
        <div class="modal-header">
          <h3>{{ editMode ? 'Editar Aluguel' : 'Novo Aluguel' }}</h3>
          <button class="btn btn-ghost btn-icon" (click)="closeModal()">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>
        <div class="modal-body">
          <div class="form-group">
            <label class="form-label">Veículo</label>
            <select class="form-control" [(ngModel)]="form.vehicleId" name="vehicleId">
              <option [value]="0">Selecione um veículo...</option>
              <option *ngFor="let v of veiculosDisponiveis" [value]="v.id">
                {{ v.licensePlate }} — {{ v.make }} {{ v.model }}
              </option>
            </select>
          </div>
          <div class="form-group">
            <label class="form-label">Motorista</label>
            <select class="form-control" [(ngModel)]="form.driverId" name="driverId">
              <option [ngValue]="null">Selecione um motorista...</option>
              <option *ngFor="let m of motoristasDisponiveis" [ngValue]="m.id">{{ m.name }}</option>
            </select>
          </div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:var(--space-4)">
            <div class="form-group">
              <label class="form-label">Data de Início</label>
              <input type="date" class="form-control" [(ngModel)]="form.startDate" name="startDate" required>
            </div>
            <div class="form-group">
              <label class="form-label">Data de Fim</label>
              <input type="date" class="form-control" [(ngModel)]="form.endDate" name="endDate" required>
            </div>
          </div>
          <div class="form-group">
            <label class="form-label">Status</label>
            <select class="form-control" [(ngModel)]="form.status" name="status">
              <option value="ACTIVE">Ativo</option>
              <option value="CLOSED">Encerrado</option>
              <option value="CANCELLED">Cancelado</option>
            </select>
          </div>
          <div *ngIf="formError" class="validation-error" [class.validation-error-conflict]="isConflictError()">
            {{ formError }}
          </div>
        </div>
        <div class="modal-footer">
          <button class="btn btn-outline" (click)="closeModal()">Cancelar</button>
          <button class="btn btn-primary" (click)="saveAluguel()" [disabled]="saving">{{ saving ? 'Salvando...' : (editMode ? 'Atualizar' : 'Salvar') }}</button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .spinner-sm {
      width: 20px; height: 20px;
      border: 2px solid var(--color-gray-200);
      border-top-color: var(--color-primary-600);
      border-radius: 50%;
      animation: spin 0.8s linear infinite;
    }
    @keyframes spin { to { transform: rotate(360deg); } }
    .table-avatar {
      width: 28px; height: 28px;
      border-radius: var(--radius-full);
      background: var(--color-primary-50);
      color: var(--color-primary-600);
      display: flex; align-items: center; justify-content: center;
      font-size: 11px; font-weight: var(--font-semibold);
      flex-shrink: 0;
    }
    .error-state {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: var(--space-12);
      flex-direction: column;
      gap: var(--space-3);
    }
    .error-state p {
      color: var(--color-gray-500);
      font-size: var(--text-sm);
    }
    .validation-error {
      background: var(--color-error-50);
      border: 1px solid var(--color-error-500);
      border-radius: var(--radius-md);
      color: var(--color-error-700);
      font-size: var(--text-sm);
      padding: var(--space-3);
      margin-top: var(--space-2);
    }
    .validation-error-conflict {
      background: var(--color-warning-50);
      border-color: var(--color-warning-500);
      color: var(--color-warning-700);
    }
  `]
})
export class AlugueisComponent implements OnInit {
  alugueis: Aluguel[] = [];
  veiculos: VehicleOption[] = [];
  motoristas: DriverOption[] = [];
  veiculosDisponiveis: VehicleOption[] = [];
  motoristasDisponiveis: DriverOption[] = [];
  showModal = false;
  editMode = false;
  isGestor = false;
  loading = true;
  saving = false;
  loadError = false;
  formError = '';

  form: CreateRentalDTO = {
    vehicleId: 0,
    driverId: 0,
    startDate: '',
    endDate: '',
    status: 'ACTIVE'
  };

  constructor(
    private authService: AuthService,
    private apiService: ApiService,
    private toast: ToastService
  ) {}


//Revisar
  ngOnInit(): void {
    this.isGestor = this.authService.isGestor();
    this.loadAll();
  }

  loadAll(): void {
    this.loading = true;
    this.loadError = false;

    // Each observable converts 404/204 errors to empty arrays so forkJoin doesn't fail
    const rentals$ = this.apiService.getAlugueis().pipe(
      map((data: any) => data || []),
      catchError(() => of([]))
    );
    const vehicles$ = this.apiService.getVeiculos().pipe(
      map((data: any) => data || []),
      catchError(() => of([]))
    );
    const drivers$ = this.apiService.getMotoristas().pipe(
      map((data: any) => data || []),
      catchError(() => of([]))
    );

    forkJoin({
      alugueis: rentals$,
      vehicles: vehicles$,
      drivers: drivers$
    }).subscribe({
      next: ({ alugueis, vehicles, drivers }) => {
        this.alugueis = alugueis;
        this.veiculos = vehicles;
        this.motoristas = drivers;
        // Filter out vehicles in MAINTENANCE or already RENTED so they cannot be selected for new rentals
        this.veiculosDisponiveis = vehicles.filter(
          (v: VehicleOption) => {
            const s = v.status?.toUpperCase();
            return s !== 'MAINTENANCE' && s !== 'RENTED';
          }
        );
        this.motoristasDisponiveis = drivers;
        this.loading = false;
      },
      error: (err) => {
        console.error('Erro ao carregar dados:', err);
        this.toast.error('Erro ao carregar dados. Verifique sua conexão.');
        this.loadError = true;
        this.loading = false;
      }
    });
  }

  getVeiculoNome(aluguel: Aluguel): string {
    if (aluguel.vehicle) return `${aluguel.vehicle.make} ${aluguel.vehicle.model}`;
    const v = this.veiculos.find(v => v.id === aluguel.vehicleId);
    return v ? `${v.make} ${v.model}` : 'N/A';
  }

  getMotoristaNome(aluguel: Aluguel): string {
    if (aluguel.driver) return aluguel.driver.name;
    const m = this.motoristas.find(m => m.id === aluguel.driverId);
    return m ? m.name : 'N/A';
  }

//funcionando
  formatDate(dateStr: string): string {
    if (!dateStr) return '';
    const [year, month, day] = dateStr.split('-');
    return `${day}/${month}/${year}`;
  }

  statusClass(status: string): string {
    const s = status?.toLowerCase() || '';
    if (s === 'active') return 'badge-success';
    if (s === 'closed') return 'badge-info';
    if (s === 'cancelled') return 'badge-error';
    return 'badge-gray';
  }

  statusLabel(status: string): string {
    const s = status?.toUpperCase() || '';
    if (s === 'ACTIVE') return 'Ativo';
    if (s === 'CLOSED') return 'Encerrado';
    if (s === 'CANCELLED') return 'Cancelado';
    return status;
  }

  openModal(): void {
    this.form = { vehicleId: 0, driverId: 0, startDate: '', endDate: '', status: 'ACTIVE' };
    this.formError = '';
    this.editMode = false;
    this.showModal = true;
  }

  closeModal(): void {
    this.showModal = false;
  }

  editAluguel(aluguel: Aluguel): void {
    this.form = {
      id: aluguel.id,
      vehicleId: aluguel.vehicleId ?? 0,
      driverId: aluguel.driverId ?? 0,
      startDate: aluguel.startDate.split('T')[0],
      endDate: aluguel.endDate.split('T')[0],
      status: aluguel.status as 'ACTIVE' | 'CLOSED' | 'CANCELLED'
    };
    // When editing, ensure the current vehicle appears in the dropdown even if RENTED
    const currentVehicleId = aluguel.vehicleId;
    this.veiculosDisponiveis = this.veiculos.filter(
      (v: VehicleOption) => {
        const s = v.status?.toUpperCase();
        return v.id === currentVehicleId || (s !== 'MAINTENANCE' && s !== 'RENTED');
      }
    );
    this.formError = '';
    this.editMode = true;
    this.showModal = true;
  }

  validateForm(): string | null {
    if (!this.form.vehicleId) return 'Selecione um veículo.';
    if (!this.form.driverId) return 'Selecione um motorista.';
    if (!this.form.startDate) return 'Informe a data de início.';
    if (!this.form.endDate) return 'Informe a data de fim.';
    if (this.form.endDate <= this.form.startDate) {
      return 'A data de fim deve ser posterior à data de início.';
    }
    return null;
  }

  saveAluguel(): void {
    this.formError = this.validateForm() ?? '';
    if (this.formError) return;

    this.saving = true;
    if (this.editMode && this.form.id) {
      this.apiService.updateAluguel(String(this.form.id), this.form).subscribe({
        next: () => {
          this.toast.success('Aluguel atualizado com sucesso!');
          this.loadAll();
          this.closeModal();
          this.saving = false;
        },
        error: (err) => {
          this.formError = this.extractErrorMessage(err);
          this.saving = false;
        }
      });
    } else {
      this.apiService.createAluguel(this.form).subscribe({
        next: () => {
          this.toast.success('Aluguel criado com sucesso!');
          this.loadAll();
          this.closeModal();
          this.saving = false;
        },
        error: (err) => {
          console.error('Erro ao criar aluguel:', err);
          this.formError = this.extractErrorMessage(err);
          this.saving = false;
        }
      });
    }
  }

  private extractErrorMessage(err: any): string {
    if (err?.error?.error) return err.error.error;
    if (err?.error?.message) return err.error.message;
    return 'Erro ao processar a requisição. Verifique os dados e tente novamente.';
  }

  isConflictError(): boolean {
    return this.formError.includes('aluguel');
  }

  deleteAluguel(id: number): void {
    if (confirm('Tem certeza que deseja excluir este aluguel?')) {
      this.apiService.deleteAluguel(String(id)).subscribe({
        next: () => {
          this.toast.success('Aluguel excluído com sucesso!');
          this.loadAll();
        },
        error: () => this.toast.error('Erro ao excluir aluguel')
      });
    }
  }
}
