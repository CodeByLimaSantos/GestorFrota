import { Component, Output, EventEmitter, HostBinding } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

export interface SidebarNavItem {
  label: string;
  route: string;
  icon: string;
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  template: `
    <aside class="sidebar" [class.collapsed]="collapsed">
      <div class="sidebar-header" (click)="toggle()">
        <ng-container *ngIf="!collapsed; else collapsedLogo">
          <div class="sidebar-brand">
            <span class="brand-text">GestorFrota</span>
          </div>
        </ng-container>
        <ng-template #collapsedLogo>
          <div class="sidebar-brand-collapsed">
            <span class="brand-text-collapsed">GF</span>
          </div>
        </ng-template>
      </div>

      <nav class="sidebar-nav" *ngIf="authService.isAuthenticated()">
        <div class="nav-section">
          <span class="nav-section-label" *ngIf="!collapsed">Principal</span>
          <a
            *ngFor="let item of navItems"
            [routerLink]="item.route"
            routerLinkActive="active"
            [routerLinkActiveOptions]="{ exact: item.route === '/dashboard' }"
            class="nav-link"
            [title]="collapsed ? item.label : ''"
          >
            <ng-container [ngSwitch]="item.icon">
              <svg *ngSwitchCase="'dashboard'" class="nav-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/>
              </svg>
              <svg *ngSwitchCase="'vehicles'" class="nav-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9Z"/><path d="M21 18V6a2 2 0 0 0-2-2H5"/>
                <path d="M3 13v3c0 .6.4 1 1 1h2"/><path d="M10 17h6"/><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/>
                <path d="M2 14a2 2 0 0 1 2-2h3v9H4a2 2 0 0 1-2-2Z"/><path d="M21 13h-4V4h2c1.1 0 2 .9 2 2z"/>
              </svg>
              <svg *ngSwitchCase="'drivers'" class="nav-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
              </svg>
              <svg *ngSwitchCase="'rentals'" class="nav-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M12 11h4"/><path d="M12 15h4"/><path d="m8 11 2-2-2-2"/><path d="m16 15-2-2 2-2"/>
              </svg>
            </ng-container>
            <span class="nav-label" [ngStyle]="{'opacity': collapsed ? '0' : '1', 'width': collapsed ? '0' : 'auto', 'overflow': 'hidden'}">{{ item.label }}</span>
          </a>
        </div>
      </nav>

      <div class="sidebar-footer">
        <div class="sidebar-user" *ngIf="!collapsed && authService.isAuthenticated()">
          <div class="user-avatar">{{ userInitial }}</div>
          <div class="user-info">
            <span class="user-name">{{ userName }}</span>
            <span class="user-role">{{ userRole }}</span>
          </div>
        </div>
        <div class="sidebar-user-collapsed" *ngIf="collapsed && authService.isAuthenticated()">
          <div class="user-avatar-sm">{{ userInitial }}</div>
        </div>
      </div>
    </aside>
  `,
  styles: [`
    :host { display: block; }
    .sidebar {
      height: 100vh;
      width: 100%;
      background: var(--sidebar-bg);
      display: flex;
      flex-direction: column;
      position: sticky;
      top: 0;
      overflow-y: auto;
      z-index: var(--z-sticky);
    }
    .sidebar-header {
      height: var(--topbar-height);
      display: flex;
      align-items: center;
      padding: 0 var(--space-5);
      cursor: pointer;
      border-bottom: 1px solid rgba(255,255,255,0.08);
      flex-shrink: 0;
    }
    .sidebar-brand {
      display: flex;
      align-items: center;
      gap: var(--space-3);
    }
    .brand-text {
      font-size: var(--text-lg);
      font-weight: var(--font-bold);
      color: white;
    }
    .sidebar-brand-collapsed {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .brand-text-collapsed {
      font-size: 14px;
      font-weight: var(--font-bold);
      color: white;
    }
    .sidebar-nav {
      flex: 1;
      padding: var(--space-4) var(--space-3);
    }
    .nav-section {
      display: flex;
      flex-direction: column;
      gap: var(--space-1);
    }
    .nav-section-label {
      font-size: 11px;
      font-weight: var(--font-semibold);
      color: var(--color-gray-500);
      text-transform: uppercase;
      letter-spacing: 0.08em;
      padding: 0 var(--space-3);
      margin-bottom: var(--space-2);
    }
    .nav-link {
      display: flex;
      align-items: center;
      gap: var(--space-3);
      padding: var(--space-2) var(--space-3);
      color: var(--sidebar-text);
      text-decoration: none;
      border-radius: var(--radius-md);
      font-size: var(--text-sm);
      font-weight: var(--font-medium);
      transition: all var(--transition-fast);
    }
    .nav-link:hover {
      background: var(--sidebar-hover-bg);
      color: white;
    }
    .nav-link.active {
      background: var(--sidebar-active-bg);
      color: var(--sidebar-active-text);
    }
    .nav-icon {
      width: 20px;
      height: 20px;
      flex-shrink: 0;
    }
    .collapsed .sidebar-header {
      justify-content: center;
      padding: 0;
    }
    .collapsed .sidebar-nav {
      padding: var(--space-4) var(--space-2);
    }
    .collapsed .nav-link {
      padding: var(--space-2);
      justify-content: center;
    }
    .collapsed .nav-section-label {
      display: none;
    }
    .sidebar-footer {
      border-top: 1px solid rgba(255,255,255,0.08);
      padding: var(--space-4) var(--space-3);
      flex-shrink: 0;
    }
    .sidebar-user {
      display: flex;
      align-items: center;
      gap: var(--space-3);
    }
    .user-avatar {
      width: 36px;
      height: 36px;
      border-radius: var(--radius-full);
      background: var(--color-primary-600);
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: var(--text-sm);
      font-weight: var(--font-semibold);
      flex-shrink: 0;
    }
    .user-info {
      display: flex;
      flex-direction: column;
      min-width: 0;
    }
    .user-name {
      font-size: var(--text-sm);
      font-weight: var(--font-medium);
      color: var(--color-gray-300);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .user-role {
      font-size: var(--text-xs);
      color: var(--color-gray-500);
    }
    .sidebar-user-collapsed {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .user-avatar-sm {
      width: 32px;
      height: 32px;
      border-radius: var(--radius-full);
      background: var(--color-primary-600);
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 12px;
      font-weight: var(--font-semibold);
    }
  `]
})
export class SidebarComponent {
  @Output() toggled = new EventEmitter<boolean>();

  navItems: SidebarNavItem[] = [
    { label: 'Dashboard', route: '/dashboard', icon: 'dashboard' },
    { label: 'Ve\u00edculos', route: '/veiculos', icon: 'vehicles' },
    { label: 'Motoristas', route: '/motoristas', icon: 'drivers' },
    { label: 'Alugu\u00e9is', route: '/alugueis', icon: 'rentals' }
  ];

  collapsed = false;
  userName = '';
  userRole = '';
  userInitial = '?';

  constructor(public authService: AuthService) {
    authService.currentUser$.subscribe(user => {
      this.userName = user?.username || '';
      this.userRole = user?.role || 'OPERADOR';
      this.userInitial = this.userName?.charAt(0).toUpperCase() || '?';
    });
  }

  toggle(): void {
    this.collapsed = !this.collapsed;
    this.toggled.emit(this.collapsed);
  }
}
