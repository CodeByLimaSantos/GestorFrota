import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';
import { AuthService } from './services/auth.service';
import { ThemeService } from './shared/services/theme.service';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { ToastContainerComponent } from './shared/components/toast-container/toast-container.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SidebarComponent, ToastContainerComponent],
  template: `
    <app-toast-container></app-toast-container>

    <!-- Auth pages (no sidebar) -->
    <router-outlet *ngIf="!isLoggedIn"></router-outlet>

    <!-- Dashboard pages (sidebar + topbar + content) -->
    <div class="app-layout" *ngIf="isLoggedIn">
      <app-sidebar
        class="sidebar-wrapper"
        [class.collapsed]="sidebarCollapsed"
        (toggled)="onSidebarToggle($event)"
      ></app-sidebar>

      <div class="main-content">
        <header class="topbar">
          <button class="btn btn-ghost btn-icon" (click)="toggleSidebar()" title="Toggle sidebar">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
          </button>

          <div class="topbar-right">
            <button class="btn btn-ghost btn-icon theme-toggle" (click)="toggleTheme()" [title]="darkMode ? 'Tema claro' : 'Tema escuro'">
              <!-- Sun icon for dark mode (will switch to light) -->
              <svg *ngIf="darkMode" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
              <!-- Moon icon for light mode (will switch to dark) -->
              <svg *ngIf="!darkMode" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
            </button>
            <span class="topbar-user" *ngIf="currentUser">{{ currentUser }}</span>
            <button class="btn btn-outline btn-sm" (click)="logout()">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
              Sair
            </button>
          </div>
        </header>

        <main class="page-container">
          <router-outlet></router-outlet>
        </main>
      </div>
    </div>
  `,
  styles: [`
    .sidebar-wrapper {
      width: var(--sidebar-width);
      flex-shrink: 0;
      transition: width var(--transition-slow);
      overflow: hidden;
    }
    .sidebar-wrapper.collapsed {
      width: var(--sidebar-collapsed-width);
    }
    .main-content {
      flex: 1;
      display: flex;
      flex-direction: column;
      min-width: 0;
    }

    /* Topbar */
    .topbar {
      height: var(--topbar-height);
      background: var(--topbar-bg);
      border-bottom: 1px solid var(--topbar-border);
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 var(--space-6);
      position: sticky;
      top: 0;
      z-index: var(--z-sticky);
    }

    .topbar-right {
      display: flex;
      align-items: center;
      gap: var(--space-4);
    }

    .topbar-user {
      font-size: var(--text-sm);
      font-weight: var(--font-medium);
      color: var(--color-gray-600);
    }
  `]
})
export class AppComponent implements OnInit {
  isLoggedIn = false;
  sidebarCollapsed = false;
  currentUser: string | null = null;
  darkMode = false;
  private isAuthPage = false;

  constructor(
    private authService: AuthService,
    private themeService: ThemeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.darkMode = this.themeService.isDark;

    // Track current route to detect auth pages
    this.router.events.pipe(
      filter((e): e is NavigationEnd => e instanceof NavigationEnd)
    ).subscribe(event => {
      this.isAuthPage = ['/login', '/registro'].includes(event.urlAfterRedirects);
      this.updateLoggedIn();
    });

    // Also check on initial load
    this.isAuthPage = ['/login', '/registro', '/'].includes(this.router.url);

    this.authService.currentUser$.subscribe(user => {
      this.currentUser = user?.username || null;
      this.updateLoggedIn();
    });

    this.updateLoggedIn();
  }

  private updateLoggedIn(): void {
    // Never show sidebar on auth pages, even if token exists
    this.isLoggedIn = !this.isAuthPage && this.authService.isAuthenticated();
  }

  toggleTheme(): void {
    this.darkMode = this.themeService.toggle();
  }

  toggleSidebar(): void {
    this.sidebarCollapsed = !this.sidebarCollapsed;
  }

  onSidebarToggle(collapsed: boolean): void {
    this.sidebarCollapsed = collapsed;
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
