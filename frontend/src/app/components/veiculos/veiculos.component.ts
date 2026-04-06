import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { ApiService } from '../../services/api.service';
import { ToastService } from '../../shared/services/toast.service';

interface Veiculo {
  id?: string;
  model: string;
  make: string;
  year: number;
  licensePlate: string;
  color: string;
  fuelType?: string;
  mileage?: number;
  weekRate?: number;
  rentalId?: number;
  status?: string;
}

@Component({
  selector: 'app-veiculos',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  template: `
    <div class="page-header">
      <div class="page-header-left">
        <h1>Ve\u00edculos</h1>
        <nav class="breadcrumbs">
          <a routerLink="/dashboard">In\u00edcio</a>
          <span class="separator">/</span>
          <span>Ve\u00edculos</span>
        </nav>
      </div>
      <button class="btn btn-primary" (click)="openModal()" *ngIf="isGestor">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
        Novo Ve\u00edculo
      </button>
    </div>

    <div class="card">
      <div class="table-wrapper" *ngIf="!loading">
        <table *ngIf="veiculos.length > 0">
          <thead>
            <tr>
              <th>Marca</th>
              <th>Modelo</th>
              <th>Ano</th>
              <th>Placa</th>
              <th>Cor</th>
              <th *ngIf="isGestor">A\u00e7\u00f5es</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let veiculo of veiculos">
              <td><strong>{{ veiculo.make }}</strong></td>
              <td>{{ veiculo.model }}</td>
              <td>{{ veiculo.year }}</td>
              <td><span class="badge badge-gray">{{ veiculo.licensePlate }}</span></td>
              <td>{{ veiculo.color }}</td>
              <td *ngIf="isGestor">
                <div class="actions-group">
                  <button class="btn btn-outline btn-sm" (click)="editVeiculo(veiculo)">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/><path d="m15 5 4 4"/></svg>
                    Editar
                  </button>
                  <button class="btn btn-danger btn-sm" (click)="deleteVeiculo(veiculo.id!)">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></svg>
                    Excluir
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        <div class="empty-state" *ngIf="veiculos.length === 0">
          <svg class="empty-state-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9Z"/><path d="M21 18V6a2 2 0 0 0-2-2H5"/>
            <path d="M3 13v3c0 .6.4 1 1 1h2"/><path d="M10 17h6"/><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/>
          </svg>
          <h3 class="empty-state-title">Nenhum ve\u00edculo cadastrado</h3>
          <p class="empty-state-text" *ngIf="isGestor">Clique em "Novo Ve\u00edculo" para come\u00e7ar.</p>
        </div>
      </div>

      <div class="inline-loading" *ngIf="loading">
        <div class="spinner-sm"></div>
        <span>Carregando ve\u00edculos...</span>
      </div>
    </div>

    <!-- Modal -->
    <div class="modal-overlay" *ngIf="showModal" (click)="closeModal()">
      <div class="modal" (click)="$event.stopPropagation()">
        <div class="modal-header">
          <h3>{{ editMode ? 'Editar Ve\u00edculo' : 'Novo Ve\u00edculo' }}</h3>
          <button class="btn btn-ghost btn-icon" (click)="closeModal()">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>
        <div class="modal-body">
          <div class="form-group">
            <label class="form-label">Marca</label>
            <input type="text" class="form-control" [(ngModel)]="form.make" name="make" required placeholder="Ex: Toyota">
          </div>
          <div class="form-group">
            <label class="form-label">Modelo</label>
            <input type="text" class="form-control" [(ngModel)]="form.model" name="model" required placeholder="Ex: Corolla">
          </div>
          <div class="form-group">
            <label class="form-label">Ano</label>
            <input type="number" class="form-control" [(ngModel)]="form.year" name="year" required placeholder="Ex: 2024">
          </div>
          <div class="form-group">
            <label class="form-label">Placa</label>
            <input type="text" class="form-control" [(ngModel)]="form.licensePlate" name="licensePlate" required placeholder="Ex: ABC-1D23">
          </div>
          <div class="form-group">
            <label class="form-label">Cor</label>
            <input type="text" class="form-control" [(ngModel)]="form.color" name="color" required placeholder="Ex: Prata">
          </div>
        </div>
        <div class="modal-footer">
          <button class="btn btn-outline" (click)="closeModal()">Cancelar</button>
          <button class="btn btn-primary" (click)="saveVeiculo()" [disabled]="saving">{{ saving ? 'Salvando...' : (editMode ? 'Atualizar' : 'Salvar') }}</button>
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
  `]
})
export class VeiculosComponent implements OnInit {
  veiculos: Veiculo[] = [];
  showModal = false;
  editMode = false;
  isGestor = false;
  loading = true;
  saving = false;

  form: Veiculo = { model: '', make: '', year: new Date().getFullYear(), licensePlate: '', color: '' };

  constructor(
    private authService: AuthService,
    private apiService: ApiService,
    private toast: ToastService
  ) {}

  ngOnInit(): void {
    this.isGestor = this.authService.isGestor();
    this.loadVeiculos();
  }

  loadVeiculos(): void {
    this.loading = true;
    this.apiService.getVeiculos().subscribe({
      next: (data) => this.veiculos = data,
      complete: () => this.loading = false,
      error: () => { this.toast.error('Erro ao carregar ve\u00edculos'); this.loading = false; }
    });
  }

  openModal(): void {
    this.form = { model: '', make: '', year: new Date().getFullYear(), licensePlate: '', color: '' };
    this.editMode = false;
    this.showModal = true;
  }

  closeModal(): void {
    this.showModal = false;
  }

  editVeiculo(veiculo: Veiculo): void {
    this.form = { ...veiculo };
    this.editMode = true;
    this.showModal = true;
  }

  saveVeiculo(): void {
    this.saving = true;
    if (this.editMode && this.form.id) {
      this.apiService.updateVeiculo(this.form.id, this.form).subscribe({
        next: () => {
          this.toast.success('Ve\u00edculo atualizado com sucesso!');
          this.loadVeiculos();
          this.closeModal();
          this.saving = false;
        },
        error: () => {
          this.toast.error('Erro ao atualizar ve\u00edculo');
          this.saving = false;
        }
      });
    } else {
      this.apiService.createVeiculo(this.form).subscribe({
        next: () => {
          this.toast.success('Ve\u00edculo criado com sucesso!');
          this.loadVeiculos();
          this.closeModal();
          this.saving = false;
        },
        error: () => {
          this.toast.error('Erro ao criar ve\u00edculo');
          this.saving = false;
        }
      });
    }
  }

  deleteVeiculo(id: string): void {
    if (confirm('Tem certeza que deseja excluir este ve\u00edculo?')) {
      this.apiService.deleteVeiculo(id).subscribe({
        next: () => {
          this.toast.success('Ve\u00edculo exclu\u00eddo com sucesso!');
          this.loadVeiculos();
        },
        error: () => this.toast.error('Erro ao excluir ve\u00edculo')
      });
    }
  }
}
