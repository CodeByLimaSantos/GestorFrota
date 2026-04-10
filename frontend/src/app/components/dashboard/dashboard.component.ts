import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import {
  trigger,
  transition,
  query,
  style,
  stagger,
  animate
} from '@angular/animations';
import { AuthService } from '../../services/auth.service';
import { ApiService, DashboardStats } from '../../services/api.service';

interface PieSegment {
  dasharray: string;
  dashoffset: number;
  color: string;
}

interface ChartData {
  segments: PieSegment[];
  items: { label: string; value: number; color: string; dotClass: string }[];
  total: number;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink],
  animations: [
    trigger('cardStagger', [
      transition(':enter', [
        query('.stat-card, .chart-card', [
          style({ opacity: 0, transform: 'translateY(15px)' }),
          stagger(100, [
            animate('300ms cubic-bezier(0.35, 0, 0.25, 1)',
              style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true })
      ])
    ])
  ],
  template: `
    <div class="page-header">
      <div class="page-header-left">
        <h1>Dashboard</h1>
        <nav class="breadcrumbs">
          <a routerLink="/dashboard">Início</a>
        </nav>
      </div>
    </div>

    <!-- Cards principais -->
    <div @cardStagger *ngIf="!loading">
    <div class="stat-card-grid">
      <div class="card stat-card blue">
        <div class="stat-icon-wrapper blue">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M5 17h14v-5l-1.5-3.5A2 2 0 0 0 15.7 7H8.3a2 2 0 0 0-1.8 1.5L5 12v5z"/>
            <circle cx="7.5" cy="17" r="1.5"/>
            <circle cx="16.5" cy="17" r="1.5"/>
          </svg>
        </div>
        <div>
          <div class="stat-value">{{ stats.totalVehicles }}</div>
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
          <div class="stat-value">{{ stats.totalDrivers }}</div>
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
          <div class="stat-value">{{ stats.totalRentals }}</div>
          <div class="stat-label">Aluguéis</div>
        </div>
        <a routerLink="/alugueis" class="stat-link">Ver todos &#8594;</a>
      </div>
    </div>

    <!-- Breakdown com Gráficos de Pizza -->
    <div class="chart-grid">

      <!-- Veículos -->
      <div class="card chart-card">
        <div class="chart-card-header">
          <h3>Veículos por Status</h3>
        </div>
        <div class="chart-card-body">
          <div class="donut-wrapper">
            <svg viewBox="0 0 100 100" class="donut-svg">
              <!-- Background ring -->
              <circle cx="50" cy="50" r="35" fill="none" stroke-width="14" class="donut-bg"/>
              <!-- Segments -->
              <circle *ngFor="let seg of vehicleChart.segments"
                cx="50" cy="50" r="35" fill="none" stroke-width="14"
                [attr.stroke]="seg.color"
                [attr.stroke-dasharray]="seg.dasharray"
                [attr.stroke-dashoffset]="seg.dashoffset"
                stroke-linecap="round"
                class="donut-segment"/>
            </svg>
            <div class="donut-center">
              <span class="donut-total">{{ vehicleChart.total }}</span>
              <span class="donut-total-label">Total</span>
            </div>
          </div>
          <div class="chart-legend">
            <div class="legend-item" *ngFor="let item of vehicleChart.items">
              <span class="legend-dot" [class]="item.dotClass"></span>
              <span class="legend-label">{{ item.label }}</span>
              <span class="legend-value">{{ item.value }}</span>
              <span class="legend-pct">{{ pct(item.value, vehicleChart.total) }}%</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Motoristas -->
      <div class="card chart-card">
        <div class="chart-card-header">
          <h3>Motoristas por Status</h3>
        </div>
        <div class="chart-card-body">
          <div class="donut-wrapper">
            <svg viewBox="0 0 100 100" class="donut-svg">
              <circle cx="50" cy="50" r="35" fill="none" stroke-width="14" class="donut-bg"/>
              <circle *ngFor="let seg of driverChart.segments"
                cx="50" cy="50" r="35" fill="none" stroke-width="14"
                [attr.stroke]="seg.color"
                [attr.stroke-dasharray]="seg.dasharray"
                [attr.stroke-dashoffset]="seg.dashoffset"
                stroke-linecap="round"
                class="donut-segment"/>
            </svg>
            <div class="donut-center">
              <span class="donut-total">{{ driverChart.total }}</span>
              <span class="donut-total-label">Total</span>
            </div>
          </div>
          <div class="chart-legend">
            <div class="legend-item" *ngFor="let item of driverChart.items">
              <span class="legend-dot" [class]="item.dotClass"></span>
              <span class="legend-label">{{ item.label }}</span>
              <span class="legend-value">{{ item.value }}</span>
              <span class="legend-pct">{{ pct(item.value, driverChart.total) }}%</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Aluguéis -->
      <div class="card chart-card">
        <div class="chart-card-header">
          <h3>Aluguéis por Status</h3>
        </div>
        <div class="chart-card-body">
          <div class="donut-wrapper">
            <svg viewBox="0 0 100 100" class="donut-svg">
              <circle cx="50" cy="50" r="35" fill="none" stroke-width="14" class="donut-bg"/>
              <circle *ngFor="let seg of rentalChart.segments"
                cx="50" cy="50" r="35" fill="none" stroke-width="14"
                [attr.stroke]="seg.color"
                [attr.stroke-dasharray]="seg.dasharray"
                [attr.stroke-dashoffset]="seg.dashoffset"
                stroke-linecap="round"
                class="donut-segment"/>
            </svg>
            <div class="donut-center">
              <span class="donut-total">{{ rentalChart.total }}</span>
              <span class="donut-total-label">Total</span>
            </div>
          </div>
          <div class="chart-legend">
            <div class="legend-item" *ngFor="let item of rentalChart.items">
              <span class="legend-dot" [class]="item.dotClass"></span>
              <span class="legend-label">{{ item.label }}</span>
              <span class="legend-value">{{ item.value }}</span>
              <span class="legend-pct">{{ pct(item.value, rentalChart.total) }}%</span>
            </div>
          </div>
        </div>
      </div>

    </div>
    </div>

    <div class="inline-loading" *ngIf="loading">
      <div class="spinner-sm"></div>
      <span>Carregando dados...</span>
    </div>

    <div class="error-state" *ngIf="loadError">
      <p>Erro ao carregar estatísticas.</p>
      <button class="btn btn-primary btn-sm" (click)="loadStats()">Tentar novamente</button>
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

    /* ===== Chart Grid ===== */
    .chart-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
      gap: var(--space-6, 24px);
      margin-top: var(--space-6, 24px);
    }

    .chart-card {
      padding: 0;
      overflow: hidden;
    }

    .chart-card-header {
      padding: var(--space-5, 20px) var(--space-6, 24px) var(--space-3, 12px);
    }
    .chart-card-header h3 {
      font-size: var(--text-base, 16px);
      font-weight: var(--font-semibold, 600);
      color: var(--color-gray-800, #1e293b);
      margin: 0;
    }

    .chart-card-body {
      display: flex;
      align-items: center;
      gap: var(--space-6, 24px);
      padding: var(--space-4, 16px) var(--space-6, 24px) var(--space-6, 24px);
    }

    /* ===== Donut Chart ===== */
    .donut-wrapper {
      position: relative;
      width: 140px;
      height: 140px;
      flex-shrink: 0;
    }

    .donut-svg {
      width: 100%;
      height: 100%;
      transform: rotate(-90deg);
    }

    .donut-bg {
      stroke: var(--color-gray-100, #f3f4f6);
    }

    .donut-segment {
      transition: stroke-dasharray 0.8s ease, stroke-dashoffset 0.8s ease;
    }

    .donut-center {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      pointer-events: none;
    }

    .donut-total {
      font-size: var(--text-2xl, 24px);
      font-weight: var(--font-bold, 700);
      color: var(--color-gray-900, #111827);
      line-height: 1;
    }

    .donut-total-label {
      font-size: var(--text-xs, 12px);
      color: var(--color-gray-400, #9ca3af);
      margin-top: 2px;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }

    /* ===== Legend ===== */
    .chart-legend {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: var(--space-3, 12px);
    }

    .legend-item {
      display: grid;
      grid-template-columns: 10px 1fr auto auto;
      align-items: center;
      gap: var(--space-2, 8px);
      padding: var(--space-2, 8px) var(--space-3, 12px);
      border-radius: var(--radius-md, 8px);
      transition: background-color 0.15s ease;
    }

    .legend-item:hover {
      background: var(--color-gray-50, #f9fafb);
    }

    .legend-dot {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      flex-shrink: 0;
    }

    .legend-dot.dot-available   { background: #22c55e; }
    .legend-dot.dot-rented      { background: #3b82f6; }
    .legend-dot.dot-maintenance { background: #f59e0b; }
    .legend-dot.dot-on-rental   { background: #3b82f6; }
    .legend-dot.dot-waiting     { background: #22c55e; }
    .legend-dot.dot-inactive    { background: #94a3b8; }
    .legend-dot.dot-active      { background: #22c55e; }
    .legend-dot.dot-closed      { background: #06b6d4; }
    .legend-dot.dot-cancelled   { background: #94a3b8; }

    .legend-label {
      font-size: var(--text-sm, 14px);
      color: var(--color-gray-600, #475569);
    }

    .legend-value {
      font-size: var(--text-sm, 14px);
      font-weight: var(--font-semibold, 600);
      color: var(--color-gray-800, #1e293b);
      text-align: right;
      min-width: 24px;
    }

    .legend-pct {
      font-size: var(--text-xs, 12px);
      color: var(--color-gray-400, #9ca3af);
      text-align: right;
      min-width: 36px;
    }

    /* ===== Error State ===== */
    .error-state {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: var(--space-3, 12px);
      padding: var(--space-12, 48px);
    }
    .error-state p {
      color: var(--color-gray-500, #64748b);
      font-size: var(--text-sm, 14px);
    }

    /* ===== Responsive ===== */
    @media (max-width: 480px) {
      .chart-card-body {
        flex-direction: column;
        align-items: center;
      }
      .donut-wrapper {
        width: 120px;
        height: 120px;
      }
      .chart-legend {
        width: 100%;
      }
    }
  `]
})
export class DashboardComponent implements OnInit {
  stats: DashboardStats = {
    totalVehicles: 0, vehiclesAvailable: 0, vehiclesRented: 0, vehiclesMaintenance: 0,
    totalDrivers: 0, driversOnRental: 0, driversWaiting: 0, driversInactive: 0,
    totalRentals: 0, rentalsActive: 0, rentalsClosed: 0, rentalsCancelled: 0
  };
  isGestor = false;
  loading = true;
  loadError = false;

  vehicleChart: ChartData = { segments: [], items: [], total: 0 };
  driverChart: ChartData = { segments: [], items: [], total: 0 };
  rentalChart: ChartData = { segments: [], items: [], total: 0 };

  private readonly CIRCUMFERENCE = 2 * Math.PI * 35; // r=35

  constructor(
    private authService: AuthService,
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    this.isGestor = this.authService.isGestor();
    this.loadStats();
  }

  loadStats(): void {
    this.loading = true;
    this.loadError = false;
    this.apiService.getDashboardStats().subscribe({
      next: (data) => {
        this.stats = data;
        this.buildCharts();
        this.loading = false;
      },
      error: (err) => {
        console.error('[Dashboard] Erro ao carregar stats:', err.status, err.message);
        this.loading = false;
        this.loadError = true;
      }
    });
  }

  pct(value: number, total: number): number {
    if (!total || total === 0) return 0;
    return Math.round((value / total) * 100);
  }

  private buildCharts(): void {
    this.vehicleChart = this.buildChart(
      [this.stats.vehiclesAvailable, this.stats.vehiclesRented, this.stats.vehiclesMaintenance],
      ['#22c55e', '#3b82f6', '#f59e0b'],
      ['Disponíveis', 'Alugados', 'Manutenção'],
      ['dot-available', 'dot-rented', 'dot-maintenance'],
      this.stats.totalVehicles
    );

    this.driverChart = this.buildChart(
      [this.stats.driversOnRental, this.stats.driversWaiting, this.stats.driversInactive],
      ['#3b82f6', '#22c55e', '#94a3b8'],
      ['Em Aluguel', 'Aguardando', 'Inativos'],
      ['dot-on-rental', 'dot-waiting', 'dot-inactive'],
      this.stats.totalDrivers
    );

    this.rentalChart = this.buildChart(
      [this.stats.rentalsActive, this.stats.rentalsClosed, this.stats.rentalsCancelled],
      ['#22c55e', '#06b6d4', '#94a3b8'],
      ['Ativos', 'Encerrados', 'Cancelados'],
      ['dot-active', 'dot-closed', 'dot-cancelled'],
      this.stats.totalRentals
    );
  }

  private buildChart(
    values: number[],
    colors: string[],
    labels: string[],
    dotClasses: string[],
    total: number
  ): ChartData {
    const segments: PieSegment[] = [];
    const items = labels.map((label, i) => ({
      label,
      value: values[i],
      color: colors[i],
      dotClass: dotClasses[i]
    }));

    if (total > 0) {
      let offset = 0;
      for (let i = 0; i < values.length; i++) {
        if (values[i] === 0) continue;
        const fraction = values[i] / total;
        const segLen = fraction * this.CIRCUMFERENCE;
        // Small gap between segments for visual separation
        const gap = values.filter(v => v > 0).length > 1 ? 3 : 0;
        const actualLen = Math.max(segLen - gap, 0);

        segments.push({
          dasharray: `${actualLen} ${this.CIRCUMFERENCE - actualLen}`,
          dashoffset: -(offset + gap / 2),
          color: colors[i]
        });
        offset += segLen;
      }
    }

    return { segments, items, total };
  }
}
