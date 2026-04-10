import {
  ApiService
} from "./chunk-7B5JGBMG.js";
import {
  AuthService,
  CommonModule,
  NgIf,
  RouterLink,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-YFMWAREJ.js";

// src/app/components/dashboard/dashboard.component.ts
function DashboardComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 7)(2, "div", 8);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 9);
    \u0275\u0275element(4, "path", 10)(5, "circle", 11)(6, "circle", 12);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(7, "div")(8, "div", 13);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 14);
    \u0275\u0275text(11, "Ve\xEDculos");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "a", 15);
    \u0275\u0275text(13, "Ver todos \u2192");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 16)(15, "div", 17);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(16, "svg", 9);
    \u0275\u0275element(17, "path", 18)(18, "circle", 19);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(19, "div")(20, "div", 13);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 14);
    \u0275\u0275text(23, "Motoristas");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "a", 20);
    \u0275\u0275text(25, "Ver todos \u2192");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 21)(27, "div", 22);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(28, "svg", 9);
    \u0275\u0275element(29, "path", 23)(30, "rect", 24);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(31, "div")(32, "div", 13);
    \u0275\u0275text(33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div", 14);
    \u0275\u0275text(35, "Alugu\xE9is");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "a", 25);
    \u0275\u0275text(37, "Ver todos \u2192");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r0.totalVeiculos);
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate(ctx_r0.totalMotoristas);
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate(ctx_r0.totalAlugueis);
  }
}
function DashboardComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275element(1, "div", 27);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Carregando dados...");
    \u0275\u0275elementEnd()();
  }
}
var DashboardComponent = class _DashboardComponent {
  constructor(authService, apiService) {
    this.authService = authService;
    this.apiService = apiService;
    this.totalVeiculos = 0;
    this.totalMotoristas = 0;
    this.totalAlugueis = 0;
    this.isGestor = false;
    this.loading = true;
  }
  ngOnInit() {
    this.isGestor = this.authService.isGestor();
    this.loadCounts();
  }
  loadCounts() {
    let finished = 0;
    const done = () => {
      finished++;
      if (finished === 3)
        this.loading = false;
    };
    this.apiService.getVeiculos().subscribe({
      next: (data) => this.totalVeiculos = data.length,
      error: () => {
        done();
      },
      complete: done
    });
    this.apiService.getMotoristas().subscribe({
      next: (data) => this.totalMotoristas = data.length,
      error: () => {
        done();
      },
      complete: done
    });
    this.apiService.getAlugueis().subscribe({
      next: (data) => this.totalAlugueis = data.length,
      error: () => {
        done();
      },
      complete: done
    });
  }
  static {
    this.\u0275fac = function DashboardComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DashboardComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(ApiService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DashboardComponent, selectors: [["app-dashboard"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 9, vars: 2, consts: [[1, "page-header"], [1, "page-header-left"], [1, "breadcrumbs"], ["routerLink", "/dashboard"], ["class", "stat-card-grid", 4, "ngIf"], ["class", "inline-loading", 4, "ngIf"], [1, "stat-card-grid"], [1, "card", "stat-card", "blue"], [1, "stat-icon-wrapper", "blue"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M5 17h14v-5l-1.5-3.5A2 2 0 0 0 15.7 7H8.3a2 2 0 0 0-1.8 1.5L5 12v5z"], ["cx", "7.5", "cy", "17", "r", "1.5"], ["cx", "16.5", "cy", "17", "r", "1.5"], [1, "stat-value"], [1, "stat-label"], ["routerLink", "/veiculos", 1, "stat-link"], [1, "card", "stat-card", "green"], [1, "stat-icon-wrapper", "green"], ["d", "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"], ["cx", "12", "cy", "7", "r", "4"], ["routerLink", "/motoristas", 1, "stat-link"], [1, "card", "stat-card", "orange"], [1, "stat-icon-wrapper", "orange"], ["d", "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"], ["width", "8", "height", "4", "x", "8", "y", "2", "rx", "1", "ry", "1"], ["routerLink", "/alugueis", 1, "stat-link"], [1, "inline-loading"], [1, "spinner-sm"]], template: function DashboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1");
        \u0275\u0275text(3, "Dashboard");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "nav", 2)(5, "a", 3);
        \u0275\u0275text(6, "In\xEDcio");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275template(7, DashboardComponent_div_7_Template, 38, 3, "div", 4)(8, DashboardComponent_div_8_Template, 4, 0, "div", 5);
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275property("ngIf", !ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.loading);
      }
    }, dependencies: [CommonModule, NgIf, RouterLink], styles: ["\n\n.spinner-sm[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  border: 2px solid var(--color-gray-200);\n  border-top-color: var(--color-primary-600);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=dashboard.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DashboardComponent, { className: "DashboardComponent", filePath: "app\\components\\dashboard\\dashboard.component.ts", lineNumber: 80 });
})();
export {
  DashboardComponent
};
//# sourceMappingURL=chunk-XDP7HL6Q.js.map
