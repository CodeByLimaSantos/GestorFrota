import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { ApiService } from '../../services/api.service';
import { ToastService } from '../../shared/services/toast.service';

interface Motorista {
  id?: string;
  name: string;
  email: string;
  cnh: string;
  phone: string;
  cpf?: string;
  licenseCategory?: string;
  licenseExpiryDate?: string;
  adress?: string;
  status?: string;
  rental?: any;
}

@Component({
  selector: 'app-motoristas',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  template: `
    <div class="page-header">
      <div class="page-header-left">
        <h1>Motoristas</h1>
        <nav class="breadcrumbs">
          <a routerLink="/dashboard">In\u00edcio</a>
          <span class="separator">/</span>
          <span>Motoristas</span>
        </nav>
      </div>
      <button class="btn btn-primary" (click)="openModal()" *ngIf="isGestor">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
        Novo Motorista
      </button>
    </div>

    <div class="card">
      <div class="table-wrapper" *ngIf="!loading">
        <table *ngIf="motoristas.length > 0">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Email</th>
              <th>CNH</th>
              <th>Telefone</th>
              <th *ngIf="isGestor">A\u00e7\u00f5es</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let motorista of motoristas">
              <td>
                <div style="display:flex;align-items:center;gap:10px">
                  <div class="table-avatar">{{ motorista.name.charAt(0) }}</div>
                  <strong>{{ motorista.name }}</strong>
                </div>
              </td>
              <td>{{ motorista.email }}</td>
              <td><span class="badge badge-info">{{ motorista.cnh }}</span></td>
              <td>{{ motorista.phone }}</td>
              <td *ngIf="isGestor">
                <div class="actions-group">
                  <button class="btn btn-outline btn-sm" (click)="editMotorista(motorista)">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/><path d="m15 5 4 4"/></svg>
                    Editar
                  </button>
                  <button class="btn btn-danger btn-sm" (click)="deleteMotorista(motorista.id!)">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></svg>
                    Excluir
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        <div class="empty-state" *ngIf="motoristas.length === 0">
          <svg class="empty-state-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
          </svg>
          <h3 class="empty-state-title">Nenhum motorista cadastrado</h3>
          <p class="empty-state-text" *ngIf="isGestor">Clique em "Novo Motorista" para come\u00e7ar.</p>
        </div>
      </div>

      <div class="inline-loading" *ngIf="loading">
        <div class="spinner-sm"></div>
        <span>Carregando motoristas...</span>
      </div>
    </div>

    <!-- Modal -->
    <div class="modal-overlay" *ngIf="showModal" (click)="closeModal()">
      <div class="modal" (click)="$event.stopPropagation()">
        <div class="modal-header">
          <h3>{{ editMode ? 'Editar Motorista' : 'Novo Motorista' }}</h3>
          <button class="btn btn-ghost btn-icon" (click)="closeModal()">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>
        <div class="modal-body">
          <div class="form-group">
            <label class="form-label">Nome Completo</label>
            <input type="text" class="form-control" [(ngModel)]="form.name" name="name" required placeholder="Nome do motorista">
          </div>
          <div class="form-group">
            <label class="form-label">Email</label>
            <input type="email" class="form-control" [(ngModel)]="form.email" name="email" required placeholder="email@exemplo.com">
          </div>
          <div class="form-group">
            <label class="form-label">CNH</label>
            <input type="text" class="form-control" [(ngModel)]="form.cnh" name="cnh" required placeholder="00000000000">
          </div>
          <div class="form-group">
            <label class="form-label">Telefone</label>
            <input type="text" class="form-control" [(ngModel)]="form.phone" name="phone" required placeholder="(00) 00000-0000">
          </div>
        </div>
        <div class="modal-footer">
          <button class="btn btn-outline" (click)="closeModal()">Cancelar</button>
          <button class="btn btn-primary" (click)="saveMotorista()" [disabled]="saving">{{ saving ? 'Salvando...' : (editMode ? 'Atualizar' : 'Salvar') }}</button>
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
      width: 32px; height: 32px;
      border-radius: var(--radius-full);
      background: var(--color-primary-50);
      color: var(--color-primary-600);
      display: flex; align-items: center; justify-content: center;
      font-size: 12px; font-weight: var(--font-semibold);
      flex-shrink: 0;
    }
  `]
})
export class MotoristasComponent implements OnInit {
  motoristas: Motorista[] = [];
  showModal = false;
  editMode = false;
  isGestor = false;
  loading = true;
  saving = false;

  form: Motorista = { name: '', email: '', cnh: '', phone: '' };

  constructor(
    private authService: AuthService,
    private apiService: ApiService,
    private toast: ToastService
  ) {}

  ngOnInit(): void {
    this.isGestor = this.authService.isGestor();
    this.loadMotoristas();
  }

  loadMotoristas(): void {
    this.loading = true;
    this.apiService.getMotoristas().subscribe({
      next: (data) => this.motoristas = data,
      complete: () => this.loading = false,
      error: () => { this.toast.error('Erro ao carregar motoristas'); this.loading = false; }
    });
  }

  openModal(): void {
    this.form = { name: '', email: '', cnh: '', phone: '' };
    this.editMode = false;
    this.showModal = true;
  }

  closeModal(): void {
    this.showModal = false;
  }

  editMotorista(motorista: Motorista): void {
    this.form = { ...motorista };
    this.editMode = true;
    this.showModal = true;
  }

  saveMotorista(): void {
    this.saving = true;
    if (this.editMode && this.form.id) {
      this.apiService.updateMotorista(this.form.id, this.form).subscribe({
        next: () => {
          this.toast.success('Motorista atualizado com sucesso!');
          this.loadMotoristas();
          this.closeModal();
          this.saving = false;
        },
        error: () => {
          this.toast.error('Erro ao atualizar motorista: ' + (this.getLastHttpError()));
          this.saving = false;
        }
      });
    } else {
      this.apiService.createMotorista(this.form).subscribe({
        next: () => {
          this.toast.success('Motorista criado com sucesso!');
          this.loadMotoristas();
          this.closeModal();
          this.saving = false;
        },
        error: (err) => {
          console.error('Erro ao criar motorista:', err);
          this.toast.error('Erro ao criar motorista. Verifique o console.');
          this.saving = false;
        }
      });
    }
  }

  private getLastHttpError(): string {
    return 'verifique os dados';
  }

  deleteMotorista(id: string): void {
    if (confirm('Tem certeza que deseja excluir este motorista?')) {
      this.apiService.deleteMotorista(id).subscribe({
        next: () => {
          this.toast.success('Motorista exclu\u00eddo com sucesso!');
          this.loadMotoristas();
        },
        error: () => this.toast.error('Erro ao excluir motorista')
      });
    }
  }
}
