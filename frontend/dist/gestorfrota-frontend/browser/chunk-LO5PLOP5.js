import {
  animate,
  query,
  stagger,
  style,
  transition,
  trigger
} from "./chunk-FAOQMSPJ.js";
import {
  ApiService
} from "./chunk-JGA337U3.js";
import {
  AuthService,
  CommonModule,
  NgForOf,
  NgIf,
  RouterLink,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-W6W4SR3A.js";

// src/app/components/dashboard/dashboard.component.ts
function DashboardComponent_div_7__svg_circle_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "circle", 40);
  }
  if (rf & 2) {
    const seg_r1 = ctx.$implicit;
    \u0275\u0275attribute("stroke", seg_r1.color)("stroke-dasharray", seg_r1.dasharray)("stroke-dashoffset", seg_r1.dashoffset);
  }
}
function DashboardComponent_div_7_div_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41);
    \u0275\u0275element(1, "span", 42);
    \u0275\u0275elementStart(2, "span", 43);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 44);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 45);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classMap(item_r2.dotClass);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r2.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r2.value);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r2.pct(item_r2.value, ctx_r2.vehicleChart.total), "%");
  }
}
function DashboardComponent_div_7__svg_circle_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "circle", 40);
  }
  if (rf & 2) {
    const seg_r4 = ctx.$implicit;
    \u0275\u0275attribute("stroke", seg_r4.color)("stroke-dasharray", seg_r4.dasharray)("stroke-dashoffset", seg_r4.dashoffset);
  }
}
function DashboardComponent_div_7_div_71_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41);
    \u0275\u0275element(1, "span", 42);
    \u0275\u0275elementStart(2, "span", 43);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 44);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 45);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classMap(item_r5.dotClass);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r5.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r5.value);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r2.pct(item_r5.value, ctx_r2.driverChart.total), "%");
  }
}
function DashboardComponent_div_7__svg_circle_80_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "circle", 40);
  }
  if (rf & 2) {
    const seg_r6 = ctx.$implicit;
    \u0275\u0275attribute("stroke", seg_r6.color)("stroke-dasharray", seg_r6.dasharray)("stroke-dashoffset", seg_r6.dashoffset);
  }
}
function DashboardComponent_div_7_div_87_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41);
    \u0275\u0275element(1, "span", 42);
    \u0275\u0275elementStart(2, "span", 43);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 44);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 45);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classMap(item_r7.dotClass);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r7.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r7.value);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r2.pct(item_r7.value, ctx_r2.rentalChart.total), "%");
  }
}
function DashboardComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 7)(2, "div", 8)(3, "div", 9);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(4, "svg", 10);
    \u0275\u0275element(5, "path", 11)(6, "circle", 12)(7, "circle", 13);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(8, "div")(9, "div", 14);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 15);
    \u0275\u0275text(12, "Ve\xEDculos");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "a", 16);
    \u0275\u0275text(14, "Ver todos \u2192");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 17)(16, "div", 18);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(17, "svg", 10);
    \u0275\u0275element(18, "path", 19)(19, "circle", 20);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(20, "div")(21, "div", 14);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 15);
    \u0275\u0275text(24, "Motoristas");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "a", 21);
    \u0275\u0275text(26, "Ver todos \u2192");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 22)(28, "div", 23);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(29, "svg", 10);
    \u0275\u0275element(30, "path", 24)(31, "rect", 25);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(32, "div")(33, "div", 14);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 15);
    \u0275\u0275text(36, "Alugu\xE9is");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "a", 26);
    \u0275\u0275text(38, "Ver todos \u2192");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(39, "div", 27)(40, "div", 28)(41, "div", 29)(42, "h3");
    \u0275\u0275text(43, "Ve\xEDculos por Status");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "div", 30)(45, "div", 31);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(46, "svg", 32);
    \u0275\u0275element(47, "circle", 33);
    \u0275\u0275template(48, DashboardComponent_div_7__svg_circle_48_Template, 1, 3, "circle", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(49, "div", 35)(50, "span", 36);
    \u0275\u0275text(51);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "span", 37);
    \u0275\u0275text(53, "Total");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(54, "div", 38);
    \u0275\u0275template(55, DashboardComponent_div_7_div_55_Template, 8, 5, "div", 39);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(56, "div", 28)(57, "div", 29)(58, "h3");
    \u0275\u0275text(59, "Motoristas por Status");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(60, "div", 30)(61, "div", 31);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(62, "svg", 32);
    \u0275\u0275element(63, "circle", 33);
    \u0275\u0275template(64, DashboardComponent_div_7__svg_circle_64_Template, 1, 3, "circle", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(65, "div", 35)(66, "span", 36);
    \u0275\u0275text(67);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "span", 37);
    \u0275\u0275text(69, "Total");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(70, "div", 38);
    \u0275\u0275template(71, DashboardComponent_div_7_div_71_Template, 8, 5, "div", 39);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(72, "div", 28)(73, "div", 29)(74, "h3");
    \u0275\u0275text(75, "Alugu\xE9is por Status");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(76, "div", 30)(77, "div", 31);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(78, "svg", 32);
    \u0275\u0275element(79, "circle", 33);
    \u0275\u0275template(80, DashboardComponent_div_7__svg_circle_80_Template, 1, 3, "circle", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(81, "div", 35)(82, "span", 36);
    \u0275\u0275text(83);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(84, "span", 37);
    \u0275\u0275text(85, "Total");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(86, "div", 38);
    \u0275\u0275template(87, DashboardComponent_div_7_div_87_Template, 8, 5, "div", 39);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("@cardStagger", void 0);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r2.stats.totalVehicles);
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate(ctx_r2.stats.totalDrivers);
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate(ctx_r2.stats.totalRentals);
    \u0275\u0275advance(14);
    \u0275\u0275property("ngForOf", ctx_r2.vehicleChart.segments);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.vehicleChart.total);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r2.vehicleChart.items);
    \u0275\u0275advance(9);
    \u0275\u0275property("ngForOf", ctx_r2.driverChart.segments);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.driverChart.total);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r2.driverChart.items);
    \u0275\u0275advance(9);
    \u0275\u0275property("ngForOf", ctx_r2.rentalChart.segments);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.rentalChart.total);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r2.rentalChart.items);
  }
}
function DashboardComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 46);
    \u0275\u0275element(1, "div", 47);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Carregando dados...");
    \u0275\u0275elementEnd()();
  }
}
function DashboardComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 48)(1, "p");
    \u0275\u0275text(2, "Erro ao carregar estat\xEDsticas.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 49);
    \u0275\u0275listener("click", function DashboardComponent_div_9_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.loadStats());
    });
    \u0275\u0275text(4, "Tentar novamente");
    \u0275\u0275elementEnd()();
  }
}
var DashboardComponent = class _DashboardComponent {
  constructor(authService, apiService) {
    this.authService = authService;
    this.apiService = apiService;
    this.stats = {
      totalVehicles: 0,
      vehiclesAvailable: 0,
      vehiclesRented: 0,
      vehiclesMaintenance: 0,
      totalDrivers: 0,
      driversOnRental: 0,
      driversWaiting: 0,
      driversInactive: 0,
      totalRentals: 0,
      rentalsActive: 0,
      rentalsClosed: 0,
      rentalsCancelled: 0
    };
    this.isGestor = false;
    this.loading = true;
    this.loadError = false;
    this.vehicleChart = { segments: [], items: [], total: 0 };
    this.driverChart = { segments: [], items: [], total: 0 };
    this.rentalChart = { segments: [], items: [], total: 0 };
    this.CIRCUMFERENCE = 2 * Math.PI * 35;
  }
  ngOnInit() {
    this.isGestor = this.authService.isGestor();
    this.loadStats();
  }
  loadStats() {
    this.loading = true;
    this.loadError = false;
    this.apiService.getDashboardStats().subscribe({
      next: (data) => {
        this.stats = data;
        this.buildCharts();
        this.loading = false;
      },
      error: (err) => {
        console.error("[Dashboard] Erro ao carregar stats:", err.status, err.message);
        this.loading = false;
        this.loadError = true;
      }
    });
  }
  pct(value, total) {
    if (!total || total === 0)
      return 0;
    return Math.round(value / total * 100);
  }
  buildCharts() {
    this.vehicleChart = this.buildChart([this.stats.vehiclesAvailable, this.stats.vehiclesRented, this.stats.vehiclesMaintenance], ["#22c55e", "#3b82f6", "#f59e0b"], ["Dispon\xEDveis", "Alugados", "Manuten\xE7\xE3o"], ["dot-available", "dot-rented", "dot-maintenance"], this.stats.totalVehicles);
    this.driverChart = this.buildChart([this.stats.driversOnRental, this.stats.driversWaiting, this.stats.driversInactive], ["#3b82f6", "#22c55e", "#94a3b8"], ["Em Aluguel", "Aguardando", "Inativos"], ["dot-on-rental", "dot-waiting", "dot-inactive"], this.stats.totalDrivers);
    this.rentalChart = this.buildChart([this.stats.rentalsActive, this.stats.rentalsClosed, this.stats.rentalsCancelled], ["#22c55e", "#06b6d4", "#94a3b8"], ["Ativos", "Encerrados", "Cancelados"], ["dot-active", "dot-closed", "dot-cancelled"], this.stats.totalRentals);
  }
  buildChart(values, colors, labels, dotClasses, total) {
    const segments = [];
    const items = labels.map((label, i) => ({
      label,
      value: values[i],
      color: colors[i],
      dotClass: dotClasses[i]
    }));
    if (total > 0) {
      let offset = 0;
      for (let i = 0; i < values.length; i++) {
        if (values[i] === 0)
          continue;
        const fraction = values[i] / total;
        const segLen = fraction * this.CIRCUMFERENCE;
        const gap = values.filter((v) => v > 0).length > 1 ? 3 : 0;
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
  static {
    this.\u0275fac = function DashboardComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DashboardComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(ApiService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DashboardComponent, selectors: [["app-dashboard"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 10, vars: 3, consts: [[1, "page-header"], [1, "page-header-left"], [1, "breadcrumbs"], ["routerLink", "/dashboard"], [4, "ngIf"], ["class", "inline-loading", 4, "ngIf"], ["class", "error-state", 4, "ngIf"], [1, "stat-card-grid"], [1, "card", "stat-card", "blue"], [1, "stat-icon-wrapper", "blue"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M5 17h14v-5l-1.5-3.5A2 2 0 0 0 15.7 7H8.3a2 2 0 0 0-1.8 1.5L5 12v5z"], ["cx", "7.5", "cy", "17", "r", "1.5"], ["cx", "16.5", "cy", "17", "r", "1.5"], [1, "stat-value"], [1, "stat-label"], ["routerLink", "/veiculos", 1, "stat-link"], [1, "card", "stat-card", "green"], [1, "stat-icon-wrapper", "green"], ["d", "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"], ["cx", "12", "cy", "7", "r", "4"], ["routerLink", "/motoristas", 1, "stat-link"], [1, "card", "stat-card", "orange"], [1, "stat-icon-wrapper", "orange"], ["d", "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"], ["width", "8", "height", "4", "x", "8", "y", "2", "rx", "1", "ry", "1"], ["routerLink", "/alugueis", 1, "stat-link"], [1, "chart-grid"], [1, "card", "chart-card"], [1, "chart-card-header"], [1, "chart-card-body"], [1, "donut-wrapper"], ["viewBox", "0 0 100 100", 1, "donut-svg"], ["cx", "50", "cy", "50", "r", "35", "fill", "none", "stroke-width", "14", 1, "donut-bg"], ["cx", "50", "cy", "50", "r", "35", "fill", "none", "stroke-width", "14", "stroke-linecap", "round", "class", "donut-segment", 4, "ngFor", "ngForOf"], [1, "donut-center"], [1, "donut-total"], [1, "donut-total-label"], [1, "chart-legend"], ["class", "legend-item", 4, "ngFor", "ngForOf"], ["cx", "50", "cy", "50", "r", "35", "fill", "none", "stroke-width", "14", "stroke-linecap", "round", 1, "donut-segment"], [1, "legend-item"], [1, "legend-dot"], [1, "legend-label"], [1, "legend-value"], [1, "legend-pct"], [1, "inline-loading"], [1, "spinner-sm"], [1, "error-state"], [1, "btn", "btn-primary", "btn-sm", 3, "click"]], template: function DashboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1");
        \u0275\u0275text(3, "Dashboard");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "nav", 2)(5, "a", 3);
        \u0275\u0275text(6, "In\xEDcio");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275template(7, DashboardComponent_div_7_Template, 88, 13, "div", 4)(8, DashboardComponent_div_8_Template, 4, 0, "div", 5)(9, DashboardComponent_div_9_Template, 5, 0, "div", 6);
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275property("ngIf", !ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.loadError);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, RouterLink], styles: ["\n\n.spinner-sm[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  border: 2px solid var(--color-gray-200);\n  border-top-color: var(--color-primary-600);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.chart-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));\n  gap: var(--space-6, 24px);\n  margin-top: var(--space-6, 24px);\n}\n.chart-card[_ngcontent-%COMP%] {\n  padding: 0;\n  overflow: hidden;\n}\n.chart-card-header[_ngcontent-%COMP%] {\n  padding: var(--space-5, 20px) var(--space-6, 24px) var(--space-3, 12px);\n}\n.chart-card-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: var(--text-base, 16px);\n  font-weight: var(--font-semibold, 600);\n  color: var(--color-gray-800, #1e293b);\n  margin: 0;\n}\n.chart-card-body[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-6, 24px);\n  padding: var(--space-4, 16px) var(--space-6, 24px) var(--space-6, 24px);\n}\n.donut-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  width: 140px;\n  height: 140px;\n  flex-shrink: 0;\n}\n.donut-svg[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  transform: rotate(-90deg);\n}\n.donut-bg[_ngcontent-%COMP%] {\n  stroke: var(--color-gray-100, #f3f4f6);\n}\n.donut-segment[_ngcontent-%COMP%] {\n  transition: stroke-dasharray 0.8s ease, stroke-dashoffset 0.8s ease;\n}\n.donut-center[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  pointer-events: none;\n}\n.donut-total[_ngcontent-%COMP%] {\n  font-size: var(--text-2xl, 24px);\n  font-weight: var(--font-bold, 700);\n  color: var(--color-gray-900, #111827);\n  line-height: 1;\n}\n.donut-total-label[_ngcontent-%COMP%] {\n  font-size: var(--text-xs, 12px);\n  color: var(--color-gray-400, #9ca3af);\n  margin-top: 2px;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.chart-legend[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-3, 12px);\n}\n.legend-item[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 10px 1fr auto auto;\n  align-items: center;\n  gap: var(--space-2, 8px);\n  padding: var(--space-2, 8px) var(--space-3, 12px);\n  border-radius: var(--radius-md, 8px);\n  transition: background-color 0.15s ease;\n}\n.legend-item[_ngcontent-%COMP%]:hover {\n  background: var(--color-gray-50, #f9fafb);\n}\n.legend-dot[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.legend-dot.dot-available[_ngcontent-%COMP%] {\n  background: #22c55e;\n}\n.legend-dot.dot-rented[_ngcontent-%COMP%] {\n  background: #3b82f6;\n}\n.legend-dot.dot-maintenance[_ngcontent-%COMP%] {\n  background: #f59e0b;\n}\n.legend-dot.dot-on-rental[_ngcontent-%COMP%] {\n  background: #3b82f6;\n}\n.legend-dot.dot-waiting[_ngcontent-%COMP%] {\n  background: #22c55e;\n}\n.legend-dot.dot-inactive[_ngcontent-%COMP%] {\n  background: #94a3b8;\n}\n.legend-dot.dot-active[_ngcontent-%COMP%] {\n  background: #22c55e;\n}\n.legend-dot.dot-closed[_ngcontent-%COMP%] {\n  background: #06b6d4;\n}\n.legend-dot.dot-cancelled[_ngcontent-%COMP%] {\n  background: #94a3b8;\n}\n.legend-label[_ngcontent-%COMP%] {\n  font-size: var(--text-sm, 14px);\n  color: var(--color-gray-600, #475569);\n}\n.legend-value[_ngcontent-%COMP%] {\n  font-size: var(--text-sm, 14px);\n  font-weight: var(--font-semibold, 600);\n  color: var(--color-gray-800, #1e293b);\n  text-align: right;\n  min-width: 24px;\n}\n.legend-pct[_ngcontent-%COMP%] {\n  font-size: var(--text-xs, 12px);\n  color: var(--color-gray-400, #9ca3af);\n  text-align: right;\n  min-width: 36px;\n}\n.error-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: var(--space-3, 12px);\n  padding: var(--space-12, 48px);\n}\n.error-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--color-gray-500, #64748b);\n  font-size: var(--text-sm, 14px);\n}\n@media (max-width: 480px) {\n  .chart-card-body[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: center;\n  }\n  .donut-wrapper[_ngcontent-%COMP%] {\n    width: 120px;\n    height: 120px;\n  }\n  .chart-legend[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=dashboard.component.css.map */"], data: { animation: [
      trigger("cardStagger", [
        transition(":enter", [
          query(".stat-card, .chart-card", [
            style({ opacity: 0, transform: "translateY(15px)" }),
            stagger(100, [
              animate("300ms cubic-bezier(0.35, 0, 0.25, 1)", style({ opacity: 1, transform: "translateY(0)" }))
            ])
          ], { optional: true })
        ])
      ])
    ] } });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DashboardComponent, { className: "DashboardComponent", filePath: "app\\components\\dashboard\\dashboard.component.ts", lineNumber: 393 });
})();
export {
  DashboardComponent
};
//# sourceMappingURL=chunk-LO5PLOP5.js.map
