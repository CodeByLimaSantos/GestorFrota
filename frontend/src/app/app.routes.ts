import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';

export const appRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadComponent: () => import('./components/login/login.component').then(m => m.LoginComponent) },
  { path: 'registro', loadComponent: () => import('./components/registro/registro.component').then(m => m.RegistroComponent) },
  { path: 'dashboard', loadComponent: () => import('./components/dashboard/dashboard.component').then(m => m.DashboardComponent), canActivate: [authGuard] },
  { path: 'veiculos', loadComponent: () => import('./components/veiculos/veiculos.component').then(m => m.VeiculosComponent), canActivate: [authGuard] },
  { path: 'motoristas', loadComponent: () => import('./components/motoristas/motoristas.component').then(m => m.MotoristasComponent), canActivate: [authGuard] },
  { path: 'alugueis', loadComponent: () => import('./components/alugueis/alugueis.component').then(m => m.AlugueisComponent), canActivate: [authGuard] },
  { path: '**', redirectTo: 'login' }
];
