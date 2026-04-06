import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  template: `
    <header class="header">
      <div class="header-content">
        <h1 class="logo">
          <a routerLink="/dashboard">GestorFrota</a>
        </h1>
        <nav class="nav" *ngIf="authService.isAuthenticated()">
          <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
          <a routerLink="/veiculos" routerLinkActive="active">Veículos</a>
          <a routerLink="/motoristas" routerLinkActive="active">Motoristas</a>
          <a routerLink="/alugueis" routerLinkActive="active">Aluguéis</a>
        </nav>
        <div class="user-actions">
          <span class="user-name" *ngIf="userName">{{ userName }}</span>
          <button class="btn btn-secondary" (click)="logout()" *ngIf="authService.isAuthenticated()">
            Sair
          </button>
        </div>
      </div>
    </header>
  `,
  styles: [`
    .header {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      background: #1a1a2e;
      color: white;
      padding: 15px 20px;
      z-index: 1000;
      box-shadow: 0 2px 10px rgba(0,0,0,0.2);
    }
    .header-content {
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .logo a {
      color: white;
      text-decoration: none;
      font-size: 24px;
      font-weight: bold;
    }
    .nav {
      display: flex;
      gap: 20px;
    }
    .nav a {
      color: #ccc;
      text-decoration: none;
      padding: 5px 10px;
      border-radius: 4px;
      transition: all 0.3s;
    }
    .nav a:hover,
    .nav a.active {
      color: white;
      background: rgba(255,255,255,0.1);
    }
    .user-actions {
      display: flex;
      align-items: center;
      gap: 15px;
    }
    .user-name {
      color: #ccc;
      font-size: 14px;
    }
  `]
})
export class HeaderComponent {
  userName: string | null = null;

  constructor(public authService: AuthService) {
    authService.currentUser$.subscribe(user => {
      this.userName = user?.username || null;
    });
  }

  logout(): void {
    this.authService.logout();
  }
}
