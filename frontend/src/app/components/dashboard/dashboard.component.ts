import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="page-header">
      <div class="page-header-left">
        <h1>Dashboard</h1>
        <nav class="breadcrumbs">
          <a routerLink="/dashboard">Início</a>
        </nav>
      </div>
    </div>

    <div class="stat-card-grid" *ngIf="!loading">
      <div class="card stat-card blue">
        <div class="stat-icon-wrapper blue">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M5 17h14v-5l-1.5-3.5A2 2 0 0 0 15.7 7H8.3a2 2 0 0 0-1.8 1.5L5 12v5z"/>
            <circle cx="7.5" cy="17" r="1.5"/>
            <circle cx="16.5" cy="17" r="1.5"/>
          </svg>
        </div>
        <div>
          <div class="stat-value">{{ totalVeiculos }}</div>
          <div class="stat-label">Veículos</div>
        </div>
        <a routerLink="/veiculos" class="stat-link">Ver todos &#8594;</a>
      </div>

      <div class="card stat-card green">
        <div class="stat-icon-wrapper green">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
          </svg>
        </div>
        <div>
          <div class="stat-value">{{ totalMotoristas }}</div>
          <div class="stat-label">Motoristas</div>
        </div>
        <a routerLink="/motoristas" class="stat-link">Ver todos &#8594;</a>
      </div>

      <div class="card stat-card orange">
        <div class="stat-icon-wrapper orange">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect width="8" height="4" x="8" y="2" rx="1" ry="1"/>
          </svg>
        </div>
        <div>
          <div class="stat-value">{{ totalAlugueis }}</div>
          <div class="stat-label">Aluguéis</div>
        </div>
        <a routerLink="/alugueis" class="stat-link">Ver todos &#8594;</a>
      </div>
    </div>

    <div class="inline-loading" *ngIf="loading">
      <div class="spinner-sm"></div>
      <span>Carregando dados...</span>
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
export class DashboardComponent implements OnInit {
  totalVeiculos = 0;
  totalMotoristas = 0;
  totalAlugueis = 0;
  isGestor = false;
  loading = true;

  constructor(
    private authService: AuthService,
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    this.isGestor = this.authService.isGestor();
    this.loadCounts();
  }

  private loadCounts(): void {
    let finished = 0;
    const done = () => {
      finished++;
      if (finished === 3) this.loading = false;
    };

    this.apiService.getVeiculos().subscribe({
      next: (data) => this.totalVeiculos = data.length,
      error: () => { done(); },
      complete: done
    });
    this.apiService.getMotoristas().subscribe({
      next: (data) => this.totalMotoristas = data.length,
      error: () => { done(); },
      complete: done
    });
    this.apiService.getAlugueis().subscribe({
      next: (data) => this.totalAlugueis = data.length,
      error: () => { done(); },
      complete: done
    });
  }
}
