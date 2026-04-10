import {
  ToastService
} from "./chunk-Q5E5HPRE.js";
import {
  AuthService,
  CommonModule,
  EventEmitter,
  NgForOf,
  NgIf,
  NgStyle,
  NgSwitch,
  NgSwitchCase,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
  bootstrapApplication,
  catchError,
  inject,
  provideHttpClient,
  provideRouter,
  throwError,
  withInterceptors,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMapInterpolate1,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-YFMWAREJ.js";

// src/app/shared/components/sidebar/sidebar.component.ts
var _c0 = (a0) => ({ exact: a0 });
var _c1 = (a0, a1) => ({ "opacity": a0, "width": a1, "overflow": "hidden" });
function SidebarComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 8)(2, "span", 9);
    \u0275\u0275text(3, "GestorFrota");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
}
function SidebarComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "span", 11);
    \u0275\u0275text(2, "GF");
    \u0275\u0275elementEnd()();
  }
}
function SidebarComponent_nav_5_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 16);
    \u0275\u0275text(1, "Principal");
    \u0275\u0275elementEnd();
  }
}
function SidebarComponent_nav_5_a_3__svg_svg_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 21);
    \u0275\u0275element(1, "rect", 22)(2, "rect", 23)(3, "rect", 24)(4, "rect", 25);
    \u0275\u0275elementEnd();
  }
}
function SidebarComponent_nav_5_a_3__svg_svg_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 21);
    \u0275\u0275element(1, "path", 26)(2, "circle", 27)(3, "circle", 28);
    \u0275\u0275elementEnd();
  }
}
function SidebarComponent_nav_5_a_3__svg_svg_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 21);
    \u0275\u0275element(1, "path", 29)(2, "circle", 30);
    \u0275\u0275elementEnd();
  }
}
function SidebarComponent_nav_5_a_3__svg_svg_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 21);
    \u0275\u0275element(1, "path", 31)(2, "rect", 32)(3, "path", 33)(4, "path", 34)(5, "path", 35)(6, "path", 36);
    \u0275\u0275elementEnd();
  }
}
function SidebarComponent_nav_5_a_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 17);
    \u0275\u0275elementContainerStart(1, 18);
    \u0275\u0275template(2, SidebarComponent_nav_5_a_3__svg_svg_2_Template, 5, 0, "svg", 19)(3, SidebarComponent_nav_5_a_3__svg_svg_3_Template, 4, 0, "svg", 19)(4, SidebarComponent_nav_5_a_3__svg_svg_4_Template, 3, 0, "svg", 19)(5, SidebarComponent_nav_5_a_3__svg_svg_5_Template, 7, 0, "svg", 19);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementStart(6, "span", 20);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("routerLink", item_r2.route)("routerLinkActiveOptions", \u0275\u0275pureFunction1(10, _c0, item_r2.route === "/dashboard"))("title", ctx_r2.collapsed ? item_r2.label : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitch", item_r2.icon);
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "dashboard");
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "vehicles");
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "drivers");
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "rentals");
    \u0275\u0275advance();
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction2(12, _c1, ctx_r2.collapsed ? "0" : "1", ctx_r2.collapsed ? "0" : "auto"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r2.label);
  }
}
function SidebarComponent_nav_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "nav", 12)(1, "div", 13);
    \u0275\u0275template(2, SidebarComponent_nav_5_span_2_Template, 2, 0, "span", 14)(3, SidebarComponent_nav_5_a_3_Template, 8, 15, "a", 15);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r2.collapsed);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.navItems);
  }
}
function SidebarComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37)(1, "div", 38);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 39)(4, "span", 40);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 41);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.userInitial);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.userName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.userRole);
  }
}
function SidebarComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42)(1, "div", 43);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.userInitial);
  }
}
var SidebarComponent = class _SidebarComponent {
  constructor(authService) {
    this.authService = authService;
    this.toggled = new EventEmitter();
    this.navItems = [
      { label: "Dashboard", route: "/dashboard", icon: "dashboard" },
      { label: "Ve\xEDculos", route: "/veiculos", icon: "vehicles" },
      { label: "Motoristas", route: "/motoristas", icon: "drivers" },
      { label: "Alugu\xE9is", route: "/alugueis", icon: "rentals" }
    ];
    this.collapsed = false;
    this.userName = "";
    this.userRole = "";
    this.userInitial = "?";
    authService.currentUser$.subscribe((user) => {
      this.userName = user?.username || "";
      const role = user?.role || "";
      this.userRole = role === "GESTOR" ? "Gestor" : role === "OPERATOR" ? "Operador" : role;
      this.userInitial = this.userName?.charAt(0).toUpperCase() || "?";
    });
  }
  toggle() {
    this.collapsed = !this.collapsed;
    this.toggled.emit(this.collapsed);
  }
  static {
    this.\u0275fac = function SidebarComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SidebarComponent)(\u0275\u0275directiveInject(AuthService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SidebarComponent, selectors: [["app-sidebar"]], outputs: { toggled: "toggled" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 9, vars: 7, consts: [["collapsedLogo", ""], [1, "sidebar"], [1, "sidebar-header", 3, "click"], [4, "ngIf", "ngIfElse"], ["class", "sidebar-nav", 4, "ngIf"], [1, "sidebar-footer"], ["class", "sidebar-user", 4, "ngIf"], ["class", "sidebar-user-collapsed", 4, "ngIf"], [1, "sidebar-brand"], [1, "brand-text"], [1, "sidebar-brand-collapsed"], [1, "brand-text-collapsed"], [1, "sidebar-nav"], [1, "nav-section"], ["class", "nav-section-label", 4, "ngIf"], ["routerLinkActive", "active", "class", "nav-link", 3, "routerLink", "routerLinkActiveOptions", "title", 4, "ngFor", "ngForOf"], [1, "nav-section-label"], ["routerLinkActive", "active", 1, "nav-link", 3, "routerLink", "routerLinkActiveOptions", "title"], [3, "ngSwitch"], ["class", "nav-icon", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 4, "ngSwitchCase"], [1, "nav-label", 3, "ngStyle"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "nav-icon"], ["width", "7", "height", "9", "x", "3", "y", "3", "rx", "1"], ["width", "7", "height", "5", "x", "14", "y", "3", "rx", "1"], ["width", "7", "height", "9", "x", "14", "y", "12", "rx", "1"], ["width", "7", "height", "5", "x", "3", "y", "16", "rx", "1"], ["d", "M5 17h14v-5l-1.5-3.5A2 2 0 0 0 15.7 7H8.3a2 2 0 0 0-1.8 1.5L5 12v5z"], ["cx", "7.5", "cy", "17", "r", "1.5"], ["cx", "16.5", "cy", "17", "r", "1.5"], ["d", "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"], ["cx", "12", "cy", "7", "r", "4"], ["d", "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"], ["width", "8", "height", "4", "x", "8", "y", "2", "rx", "1", "ry", "1"], ["d", "M12 11h4"], ["d", "M12 15h4"], ["d", "m8 11 2-2-2-2"], ["d", "m16 15-2-2 2-2"], [1, "sidebar-user"], [1, "user-avatar"], [1, "user-info"], [1, "user-name"], [1, "user-role"], [1, "sidebar-user-collapsed"], [1, "user-avatar-sm"]], template: function SidebarComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "aside", 1)(1, "div", 2);
        \u0275\u0275listener("click", function SidebarComponent_Template_div_click_1_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.toggle());
        });
        \u0275\u0275template(2, SidebarComponent_ng_container_2_Template, 4, 0, "ng-container", 3)(3, SidebarComponent_ng_template_3_Template, 3, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd();
        \u0275\u0275template(5, SidebarComponent_nav_5_Template, 4, 2, "nav", 4);
        \u0275\u0275elementStart(6, "div", 5);
        \u0275\u0275template(7, SidebarComponent_div_7_Template, 8, 3, "div", 6)(8, SidebarComponent_div_8_Template, 3, 1, "div", 7);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        const collapsedLogo_r4 = \u0275\u0275reference(4);
        \u0275\u0275classProp("collapsed", ctx.collapsed);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", !ctx.collapsed)("ngIfElse", collapsedLogo_r4);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", ctx.authService.isAuthenticated());
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", !ctx.collapsed && ctx.authService.isAuthenticated());
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.collapsed && ctx.authService.isAuthenticated());
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, NgStyle, NgSwitch, NgSwitchCase, RouterLink, RouterLinkActive], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.sidebar[_ngcontent-%COMP%] {\n  height: 100vh;\n  width: 100%;\n  background: var(--sidebar-bg);\n  display: flex;\n  flex-direction: column;\n  position: sticky;\n  top: 0;\n  overflow-y: auto;\n  z-index: var(--z-sticky);\n}\n.sidebar-header[_ngcontent-%COMP%] {\n  height: var(--topbar-height);\n  display: flex;\n  align-items: center;\n  padding: 0 var(--space-5);\n  cursor: pointer;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.08);\n  flex-shrink: 0;\n}\n.sidebar-brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-3);\n}\n.brand-text[_ngcontent-%COMP%] {\n  font-size: var(--text-lg);\n  font-weight: var(--font-bold);\n  color: white;\n}\n.sidebar-brand-collapsed[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.brand-text-collapsed[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: var(--font-bold);\n  color: white;\n}\n.sidebar-nav[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: var(--space-4) var(--space-3);\n}\n.nav-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-1);\n}\n.nav-section-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: var(--font-semibold);\n  color: var(--color-gray-500);\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  padding: 0 var(--space-3);\n  margin-bottom: var(--space-2);\n}\n.nav-link[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-3);\n  padding: var(--space-2) var(--space-3);\n  color: var(--sidebar-text);\n  text-decoration: none;\n  border-radius: var(--radius-md);\n  font-size: var(--text-sm);\n  font-weight: var(--font-medium);\n  transition: all var(--transition-fast);\n}\n.nav-link[_ngcontent-%COMP%]:hover {\n  background: var(--sidebar-hover-bg);\n  color: white;\n}\n.nav-link.active[_ngcontent-%COMP%] {\n  background: var(--sidebar-active-bg);\n  color: var(--sidebar-active-text);\n}\n.nav-icon[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  flex-shrink: 0;\n}\n.collapsed[_ngcontent-%COMP%]   .sidebar-header[_ngcontent-%COMP%] {\n  justify-content: center;\n  padding: 0;\n}\n.collapsed[_ngcontent-%COMP%]   .sidebar-nav[_ngcontent-%COMP%] {\n  padding: var(--space-4) var(--space-2);\n}\n.collapsed[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  padding: var(--space-2);\n  justify-content: center;\n}\n.collapsed[_ngcontent-%COMP%]   .nav-section-label[_ngcontent-%COMP%] {\n  display: none;\n}\n.sidebar-footer[_ngcontent-%COMP%] {\n  border-top: 1px solid rgba(255, 255, 255, 0.08);\n  padding: var(--space-4) var(--space-3);\n  flex-shrink: 0;\n}\n.sidebar-user[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-3);\n}\n.user-avatar[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: var(--radius-full);\n  background: var(--color-primary-600);\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: var(--text-sm);\n  font-weight: var(--font-semibold);\n  flex-shrink: 0;\n}\n.user-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n}\n.user-name[_ngcontent-%COMP%] {\n  font-size: var(--text-sm);\n  font-weight: var(--font-medium);\n  color: var(--color-gray-300);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.user-role[_ngcontent-%COMP%] {\n  font-size: var(--text-xs);\n  color: var(--color-gray-500);\n}\n.sidebar-user-collapsed[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.user-avatar-sm[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: var(--radius-full);\n  background: var(--color-primary-600);\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 12px;\n  font-weight: var(--font-semibold);\n}\n/*# sourceMappingURL=sidebar.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SidebarComponent, { className: "SidebarComponent", filePath: "app\\shared\\components\\sidebar\\sidebar.component.ts", lineNumber: 235 });
})();

// src/app/shared/components/toast-container/toast-container.component.ts
function ToastContainerComponent_div_1__svg_svg_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 11);
    \u0275\u0275element(1, "path", 12);
    \u0275\u0275elementEnd();
  }
}
function ToastContainerComponent_div_1__svg_svg_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 11);
    \u0275\u0275element(1, "path", 13);
    \u0275\u0275elementEnd();
  }
}
function ToastContainerComponent_div_1__svg_svg_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 11);
    \u0275\u0275element(1, "path", 14);
    \u0275\u0275elementEnd();
  }
}
function ToastContainerComponent_div_1__svg_svg_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 11);
    \u0275\u0275element(1, "path", 15);
    \u0275\u0275elementEnd();
  }
}
function ToastContainerComponent_div_1_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r2.message);
  }
}
function ToastContainerComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275elementContainerStart(1, 2);
    \u0275\u0275template(2, ToastContainerComponent_div_1__svg_svg_2_Template, 2, 0, "svg", 3)(3, ToastContainerComponent_div_1__svg_svg_3_Template, 2, 0, "svg", 3)(4, ToastContainerComponent_div_1__svg_svg_4_Template, 2, 0, "svg", 3)(5, ToastContainerComponent_div_1__svg_svg_5_Template, 2, 0, "svg", 3);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementStart(6, "div", 4)(7, "div", 5);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, ToastContainerComponent_div_1_div_9_Template, 2, 1, "div", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 7);
    \u0275\u0275listener("click", function ToastContainerComponent_div_1_Template_button_click_10_listener() {
      const t_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.dismiss(t_r2.id));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(11, "svg", 8);
    \u0275\u0275element(12, "line", 9)(13, "line", 10);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const t_r2 = ctx.$implicit;
    \u0275\u0275classMapInterpolate1("toast ", t_r2.type, "");
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitch", t_r2.type);
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "success");
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "error");
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "warning");
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "info");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r2.title);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", t_r2.message);
  }
}
var ToastContainerComponent = class _ToastContainerComponent {
  constructor(toastService) {
    this.toastService = toastService;
    this.toasts = [];
  }
  ngOnInit() {
    this.toastService.toasts$.subscribe((list) => this.toasts = list);
  }
  dismiss(id) {
    this.toastService.dismiss(id);
  }
  static {
    this.\u0275fac = function ToastContainerComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ToastContainerComponent)(\u0275\u0275directiveInject(ToastService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ToastContainerComponent, selectors: [["app-toast-container"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 2, vars: 2, consts: [[1, "toast-container", 3, "hidden"], [3, "class", 4, "ngFor", "ngForOf"], [3, "ngSwitch"], ["class", "toast-icon", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "currentColor", 4, "ngSwitchCase"], [1, "toast-content"], [1, "toast-title"], ["class", "toast-message", 4, "ngIf"], [1, "toast-close", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["x1", "18", "y1", "6", "x2", "6", "y2", "18"], ["x1", "6", "y1", "6", "x2", "18", "y2", "18"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "currentColor", 1, "toast-icon"], ["fill-rule", "evenodd", "d", "M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z", "clip-rule", "evenodd"], ["fill-rule", "evenodd", "d", "M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94Z", "clip-rule", "evenodd"], ["fill-rule", "evenodd", "d", "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3Zm1.58 6a.75.75 0 0 0-1.5 0v3a.75.75 0 0 0 1.5 0Zm0 6a1 1 0 1 0-2 0 1 1 0 0 0 2 0Z", "clip-rule", "evenodd"], ["fill-rule", "evenodd", "d", "M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z", "clip-rule", "evenodd"], [1, "toast-message"]], template: function ToastContainerComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275template(1, ToastContainerComponent_div_1_Template, 14, 10, "div", 1);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275property("hidden", ctx.toasts.length === 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", ctx.toasts);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, NgSwitch, NgSwitchCase], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ToastContainerComponent, { className: "ToastContainerComponent", filePath: "app\\shared\\components\\toast-container\\toast-container.component.ts", lineNumber: 29 });
})();

// src/app/shared/services/theme.service.ts
var ThemeService = class _ThemeService {
  constructor() {
    this.STORAGE_KEY = "drivecontrol-theme";
  }
  get isDark() {
    const stored = localStorage.getItem(this.STORAGE_KEY);
    if (stored)
      return stored === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  }
  setDark(value) {
    localStorage.setItem(this.STORAGE_KEY, value ? "dark" : "light");
    this.apply(value);
  }
  toggle() {
    const next = !this.isDark;
    this.setDark(next);
    return next;
  }
  /** Apply theme on initial load (called from both app component and inline script) */
  static applyFromStorage() {
    const stored = localStorage.getItem("drivecontrol-theme");
    if (stored && stored === "dark") {
      document.documentElement.classList.add("dark");
      return true;
    }
    if (!stored && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      document.documentElement.classList.add("dark");
      return true;
    }
    document.documentElement.classList.remove("dark");
    return false;
  }
  apply(dark) {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }
  static {
    this.\u0275fac = function ThemeService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ThemeService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ThemeService, factory: _ThemeService.\u0275fac, providedIn: "root" });
  }
};

// src/app/app.component.ts
function AppComponent_router_outlet_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "router-outlet");
  }
}
function AppComponent_div_2__svg_svg_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 7);
    \u0275\u0275element(1, "circle", 21)(2, "path", 22)(3, "path", 23)(4, "path", 24)(5, "path", 25)(6, "path", 26)(7, "path", 27)(8, "path", 28)(9, "path", 29);
    \u0275\u0275elementEnd();
  }
}
function AppComponent_div_2__svg_svg_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 7);
    \u0275\u0275element(1, "path", 30);
    \u0275\u0275elementEnd();
  }
}
function AppComponent_div_2_span_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 31);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.currentUser);
  }
}
function AppComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "app-sidebar", 3);
    \u0275\u0275listener("toggled", function AppComponent_div_2_Template_app_sidebar_toggled_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSidebarToggle($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 4)(3, "header", 5)(4, "button", 6);
    \u0275\u0275listener("click", function AppComponent_div_2_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleSidebar());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(5, "svg", 7);
    \u0275\u0275element(6, "line", 8)(7, "line", 9)(8, "line", 10);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(9, "div", 11)(10, "button", 12);
    \u0275\u0275listener("click", function AppComponent_div_2_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleTheme());
    });
    \u0275\u0275template(11, AppComponent_div_2__svg_svg_11_Template, 10, 0, "svg", 13)(12, AppComponent_div_2__svg_svg_12_Template, 2, 0, "svg", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, AppComponent_div_2_span_13_Template, 2, 1, "span", 14);
    \u0275\u0275elementStart(14, "button", 15);
    \u0275\u0275listener("click", function AppComponent_div_2_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.logout());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(15, "svg", 16);
    \u0275\u0275element(16, "path", 17)(17, "polyline", 18)(18, "line", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275text(19, " Sair ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(20, "main", 20);
    \u0275\u0275element(21, "router-outlet");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("collapsed", ctx_r1.sidebarCollapsed);
    \u0275\u0275advance(9);
    \u0275\u0275property("title", ctx_r1.darkMode ? "Tema claro" : "Tema escuro");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.darkMode);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.darkMode);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.currentUser);
  }
}
var AppComponent = class _AppComponent {
  constructor(authService, themeService, router) {
    this.authService = authService;
    this.themeService = themeService;
    this.router = router;
    this.isLoggedIn = false;
    this.sidebarCollapsed = false;
    this.currentUser = null;
    this.darkMode = false;
  }
  ngOnInit() {
    this.darkMode = this.themeService.isDark;
    this.isLoggedIn = this.authService.isAuthenticated();
    this.authService.currentUser$.subscribe((user) => {
      this.currentUser = user?.username || null;
      this.isLoggedIn = !!user;
    });
  }
  toggleTheme() {
    this.darkMode = this.themeService.toggle();
  }
  toggleSidebar() {
    this.sidebarCollapsed = !this.sidebarCollapsed;
  }
  onSidebarToggle(collapsed) {
    this.sidebarCollapsed = collapsed;
  }
  logout() {
    this.authService.logout();
    this.router.navigate(["/login"]);
  }
  static {
    this.\u0275fac = function AppComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AppComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(ThemeService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 3, vars: 2, consts: [[4, "ngIf"], ["class", "app-layout", 4, "ngIf"], [1, "app-layout"], [1, "sidebar-wrapper", 3, "toggled"], [1, "main-content"], [1, "topbar"], ["title", "Toggle sidebar", 1, "btn", "btn-ghost", "btn-icon", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["x1", "3", "y1", "6", "x2", "21", "y2", "6"], ["x1", "3", "y1", "12", "x2", "21", "y2", "12"], ["x1", "3", "y1", "18", "x2", "21", "y2", "18"], [1, "topbar-right"], [1, "btn", "btn-ghost", "btn-icon", "theme-toggle", 3, "click", "title"], ["xmlns", "http://www.w3.org/2000/svg", "width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 4, "ngIf"], ["class", "topbar-user", 4, "ngIf"], [1, "btn", "btn-outline", "btn-sm", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"], ["points", "16 17 21 12 16 7"], ["x1", "21", "y1", "12", "x2", "9", "y2", "12"], [1, "page-container"], ["cx", "12", "cy", "12", "r", "4"], ["d", "M12 2v2"], ["d", "M12 20v2"], ["d", "m4.93 4.93 1.41 1.41"], ["d", "m17.66 17.66 1.41 1.41"], ["d", "M2 12h2"], ["d", "M20 12h2"], ["d", "m6.34 17.66-1.41 1.41"], ["d", "m19.07 4.93-1.41 1.41"], ["d", "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"], [1, "topbar-user"]], template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-toast-container");
        \u0275\u0275template(1, AppComponent_router_outlet_1_Template, 1, 0, "router-outlet", 0)(2, AppComponent_div_2_Template, 22, 6, "div", 1);
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.isLoggedIn);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.isLoggedIn);
      }
    }, dependencies: [CommonModule, NgIf, RouterOutlet, SidebarComponent, ToastContainerComponent], styles: ["\n\n.sidebar-wrapper[_ngcontent-%COMP%] {\n  width: var(--sidebar-width);\n  flex-shrink: 0;\n  transition: width var(--transition-slow);\n  overflow: hidden;\n}\n.sidebar-wrapper.collapsed[_ngcontent-%COMP%] {\n  width: var(--sidebar-collapsed-width);\n}\n.main-content[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n}\n.topbar[_ngcontent-%COMP%] {\n  height: var(--topbar-height);\n  background: var(--topbar-bg);\n  border-bottom: 1px solid var(--topbar-border);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 var(--space-6);\n  position: sticky;\n  top: 0;\n  z-index: var(--z-sticky);\n}\n.topbar-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-4);\n}\n.topbar-user[_ngcontent-%COMP%] {\n  font-size: var(--text-sm);\n  font-weight: var(--font-medium);\n  color: var(--color-gray-600);\n}\n/*# sourceMappingURL=app.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "app\\app.component.ts", lineNumber: 98 });
})();

// src/app/guards/auth.guard.ts
var authGuard = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  if (authService.isAuthenticated()) {
    return true;
  }
  router.navigate(["/login"]);
  return false;
};

// src/app/app.routes.ts
var appRoutes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "login", loadComponent: () => import("./chunk-ZDRJEU5V.js").then((m) => m.LoginComponent) },
  { path: "registro", loadComponent: () => import("./chunk-5WSQHAHP.js").then((m) => m.RegistroComponent) },
  { path: "dashboard", loadComponent: () => import("./chunk-XDP7HL6Q.js").then((m) => m.DashboardComponent), canActivate: [authGuard] },
  { path: "veiculos", loadComponent: () => import("./chunk-TJ7XC24V.js").then((m) => m.VeiculosComponent), canActivate: [authGuard] },
  { path: "motoristas", loadComponent: () => import("./chunk-NXMNM5VM.js").then((m) => m.MotoristasComponent), canActivate: [authGuard] },
  { path: "alugueis", loadComponent: () => import("./chunk-WQ5QXU4F.js").then((m) => m.AlugueisComponent), canActivate: [authGuard] },
  { path: "**", redirectTo: "login" }
];

// src/app/interceptors/auth.interceptor.ts
var authInterceptor = (req, next) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const token = authService.getToken();
  let authReq = req;
  if (token) {
    authReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
  }
  return next(authReq).pipe(catchError((error) => {
    if (error.status === 401) {
      authService.logout();
      router.navigate(["/login"]);
    }
    return throwError(() => error);
  }));
};

// src/main.ts
bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(appRoutes),
    provideHttpClient(withInterceptors([authInterceptor]))
  ]
}).catch((err) => console.error(err));
//# sourceMappingURL=main.js.map
