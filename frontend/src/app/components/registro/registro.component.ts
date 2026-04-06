import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { ToastService } from '../../shared/services/toast.service';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  template: `
    <div class="auth-layout">
      <div class="auth-card">
        <div class="auth-brand">
          <svg class="auth-brand-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="1" y="3" width="15" height="13"></rect>
            <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
            <circle cx="5.5" cy="18.5" r="2.5"></circle>
            <circle cx="18.5" cy="18.5" r="2.5"></circle>
          </svg>
          <span class="auth-brand-text">DriveControl</span>
        </div>

        <div class="auth-header">
          <h2>Criar Conta</h2>
          <p>Preencha os dados para se registrar</p>
        </div>

        <form (ngSubmit)="onSubmit()" #form="ngForm">
          <div class="form-group">
            <label for="username" class="form-label">Nome de Usu\u00e1rio</label>
            <input type="text" id="username" class="form-control" [(ngModel)]="data.username" name="username" required placeholder="Seu nome de usu\u00e1rio">
          </div>

          <div class="form-group">
            <label for="email" class="form-label">Email</label>
            <input type="email" id="email" class="form-control" [(ngModel)]="data.email" name="email" required placeholder="seu@email.com">
          </div>

          <div class="form-group">
            <label for="password" class="form-label">Senha</label>
            <input type="password" id="password" class="form-control" [(ngModel)]="data.password" name="password" required minlength="6" placeholder="M\u00ednimo 6 caracteres">
          </div>

          <div class="form-group">
            <label for="role" class="form-label">Tipo de Conta</label>
            <select id="role" class="form-control" [(ngModel)]="data.role" name="role">
              <option value="ROLE_OPERATOR">Operador</option>
              <option value="ROLE_GESTOR">Gestor</option>
            </select>
          </div>

          <button type="submit" class="btn btn-primary btn-lg btn-block" [disabled]="loading">
            {{ loading ? 'Criando conta...' : 'Cadastrar' }}
          </button>
        </form>

        <div class="auth-footer">
          J\u00e1 tem conta? <a routerLink="/login">Fa\u00e7a login</a>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .btn-block { width: 100%; }
  `]
})
export class RegistroComponent {
  data = { username: '', email: '', password: '', role: 'ROLE_OPERATOR' };
  loading = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private toast: ToastService
  ) {}

  onSubmit(): void {
    this.loading = true;
    this.authService.register(this.data).subscribe({
      next: () => {
        this.toast.success('Conta criada com sucesso!', 'Voc\u00ea ser\u00e1 redirecionado para o login.');
        setTimeout(() => this.router.navigate(['/login']), 2000);
      },
      error: () => {
        this.toast.error('Erro ao criar conta', 'Verifique os dados e tente novamente.');
        this.loading = false;
      }
    });
  }
}
