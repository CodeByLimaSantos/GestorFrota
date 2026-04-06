import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { ToastService } from '../../shared/services/toast.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  template: `
    <div class="auth-layout">
      <div class="auth-card">
        <div class="auth-brand">
          <span class="auth-brand-text">GestorFrota</span>
        </div>

        <div class="auth-header">
          <h2>Bem-vindo de volta</h2>
          <p>Fa\u00e7a login para continuar</p>
        </div>

        <form (ngSubmit)="onSubmit()" #loginForm="ngForm">
          <div class="form-group">
            <label for="username" class="form-label">Nome de Usu\u00e1rio</label>
            <input
              type="text"
              id="username"
              class="form-control"
              [(ngModel)]="credentials.username"
              name="username"
              required
              placeholder="Digite seu nome de usu\u00e1rio"
              #usernameField="ngModel"
            >
            <p class="field-error" *ngIf="usernameField.invalid && usernameField.touched">
              Campo obrigat\u00f3rio
            </p>
          </div>

          <div class="form-group">
            <label for="password" class="form-label">Senha</label>
            <input
              type="password"
              id="password"
              class="form-control"
              [(ngModel)]="credentials.password"
              name="password"
              required
              placeholder="Digite sua senha"
              #passwordField="ngModel"
            >
            <p class="field-error" *ngIf="passwordField.invalid && passwordField.touched">
              Campo obrigat\u00f3rio
            </p>
          </div>

          <button type="submit" class="btn btn-primary btn-lg btn-block" [disabled]="loading">
            <svg *ngIf="loading" class="spinner-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>
            {{ loading ? 'Entrando...' : 'Entrar' }}
          </button>
        </form>

        <div class="auth-footer">
          N\u00e3o tem conta? <a routerLink="/registro">Cadastre-se</a>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .btn-block { width: 100%; margin-top: var(--space-2); }
    .field-error { color: var(--color-error-500); font-size: var(--text-xs); margin-top: var(--space-1); }
    .spinner-icon { width: 18px; height: 18px; animation: spin 0.8s linear infinite; }
    @keyframes spin { to { transform: rotate(360deg); } }
  `]
})
export class LoginComponent {
  credentials = { username: '', password: '' };
  loading = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private toast: ToastService
  ) {}

  onSubmit(): void {
    if (!this.credentials.username || !this.credentials.password) return;

    this.loading = true;
    this.authService.login(this.credentials).subscribe({
      next: () => {
        this.toast.success('Login realizado com sucesso!');
        this.router.navigate(['/dashboard']);
      },
      error: () => {
        this.toast.error('Falha no login', 'Usu\u00e1rio ou senha inv\u00e1lidos.');
        this.loading = false;
      }
    });
  }
}
