import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  RequiredValidator,
  ɵNgNoValidate
} from "./chunk-FF3E223G.js";
import {
  ToastService
} from "./chunk-Q5E5HPRE.js";
import {
  AuthService,
  CommonModule,
  NgIf,
  Router,
  RouterLink,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceSVG,
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-YFMWAREJ.js";

// src/app/components/login/login.component.ts
function LoginComponent_p_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 19);
    \u0275\u0275text(1, " Campo obrigat\xF3rio ");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_p_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 19);
    \u0275\u0275text(1, " Campo obrigat\xF3rio ");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent__svg_svg_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 20);
    \u0275\u0275element(1, "path", 21);
    \u0275\u0275elementEnd();
  }
}
var LoginComponent = class _LoginComponent {
  constructor(authService, router, toast) {
    this.authService = authService;
    this.router = router;
    this.toast = toast;
    this.credentials = { username: "", password: "" };
    this.loading = false;
  }
  onSubmit() {
    if (!this.credentials.username || !this.credentials.password)
      return;
    this.loading = true;
    this.authService.login(this.credentials).subscribe({
      next: () => {
        this.toast.success("Login realizado com sucesso!");
        this.router.navigate(["/dashboard"]);
      },
      error: () => {
        this.toast.error("Falha no login", "Usu\xE1rio ou senha inv\xE1lidos.");
        this.loading = false;
      }
    });
  }
  static {
    this.\u0275fac = function LoginComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LoginComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ToastService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 31, vars: 7, consts: [["loginForm", "ngForm"], ["usernameField", "ngModel"], ["passwordField", "ngModel"], [1, "auth-layout"], [1, "auth-card"], [1, "auth-brand"], [1, "auth-brand-text"], [1, "auth-header"], [3, "ngSubmit"], [1, "form-group"], ["for", "username", 1, "form-label"], ["type", "text", "id", "username", "name", "username", "required", "", "placeholder", "Digite seu nome de usu\xE1rio", 1, "form-control", 3, "ngModelChange", "ngModel"], ["class", "field-error", 4, "ngIf"], ["for", "password", 1, "form-label"], ["type", "password", "id", "password", "name", "password", "required", "", "placeholder", "Digite sua senha", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "submit", 1, "btn", "btn-primary", "btn-lg", "btn-block", 3, "disabled"], ["class", "spinner-icon", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 4, "ngIf"], [1, "auth-footer"], ["routerLink", "/registro"], [1, "field-error"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "spinner-icon"], ["d", "M21 12a9 9 0 1 1-6.219-8.56"]], template: function LoginComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 3)(1, "div", 4)(2, "div", 5)(3, "span", 6);
        \u0275\u0275text(4, "GestorFrota");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(5, "div", 7)(6, "h2");
        \u0275\u0275text(7, "Bem-vindo de volta");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "p");
        \u0275\u0275text(9, "Fa\xE7a login para continuar");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "form", 8, 0);
        \u0275\u0275listener("ngSubmit", function LoginComponent_Template_form_ngSubmit_10_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onSubmit());
        });
        \u0275\u0275elementStart(12, "div", 9)(13, "label", 10);
        \u0275\u0275text(14, "Nome de Usu\xE1rio");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "input", 11, 1);
        \u0275\u0275twoWayListener("ngModelChange", function LoginComponent_Template_input_ngModelChange_15_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.credentials.username, $event) || (ctx.credentials.username = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275template(17, LoginComponent_p_17_Template, 2, 0, "p", 12);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "div", 9)(19, "label", 13);
        \u0275\u0275text(20, "Senha");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "input", 14, 2);
        \u0275\u0275twoWayListener("ngModelChange", function LoginComponent_Template_input_ngModelChange_21_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.credentials.password, $event) || (ctx.credentials.password = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275template(23, LoginComponent_p_23_Template, 2, 0, "p", 12);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "button", 15);
        \u0275\u0275template(25, LoginComponent__svg_svg_25_Template, 2, 0, "svg", 16);
        \u0275\u0275text(26);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(27, "div", 17);
        \u0275\u0275text(28, " N\xE3o tem conta? ");
        \u0275\u0275elementStart(29, "a", 18);
        \u0275\u0275text(30, "Cadastre-se");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        const usernameField_r2 = \u0275\u0275reference(16);
        const passwordField_r3 = \u0275\u0275reference(22);
        \u0275\u0275advance(15);
        \u0275\u0275twoWayProperty("ngModel", ctx.credentials.username);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", usernameField_r2.invalid && usernameField_r2.touched);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.credentials.password);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", passwordField_r3.invalid && passwordField_r3.touched);
        \u0275\u0275advance();
        \u0275\u0275property("disabled", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.loading ? "Entrando..." : "Entrar", " ");
      }
    }, dependencies: [CommonModule, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, NgModel, NgForm, RouterLink], styles: ["\n\n.btn-block[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: var(--space-2);\n}\n.field-error[_ngcontent-%COMP%] {\n  color: var(--color-error-500);\n  font-size: var(--text-xs);\n  margin-top: var(--space-1);\n}\n.spinner-icon[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=login.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "app\\components\\login\\login.component.ts", lineNumber: 78 });
})();
export {
  LoginComponent
};
//# sourceMappingURL=chunk-ZDRJEU5V.js.map
