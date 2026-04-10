import {
  DefaultValueAccessor,
  FormsModule,
  MinLengthValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  NgSelectOption,
  RequiredValidator,
  SelectControlValueAccessor,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-X4XRC4RY.js";
import {
  ToastService
} from "./chunk-YLIVN2II.js";
import {
  AuthService,
  CommonModule,
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
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-W6W4SR3A.js";

// src/app/components/registro/registro.component.ts
var RegistroComponent = class _RegistroComponent {
  constructor(authService, router, toast) {
    this.authService = authService;
    this.router = router;
    this.toast = toast;
    this.data = { username: "", email: "", password: "", role: "ROLE_OPERATOR" };
    this.loading = false;
  }
  onSubmit() {
    this.loading = true;
    this.authService.register(this.data).subscribe({
      next: () => {
        this.toast.success("Conta criada com sucesso!", "Voc\xEA ser\xE1 redirecionado para o login.");
        setTimeout(() => this.router.navigate(["/login"]), 2e3);
      },
      error: () => {
        this.toast.error("Erro ao criar conta", "Verifique os dados e tente novamente.");
        this.loading = false;
      }
    });
  }
  static {
    this.\u0275fac = function RegistroComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RegistroComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ToastService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RegistroComponent, selectors: [["app-registro"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 43, vars: 6, consts: [["form", "ngForm"], [1, "auth-layout"], [1, "auth-card"], [1, "auth-brand"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "auth-brand-icon"], ["x", "1", "y", "3", "width", "15", "height", "13"], ["points", "16 8 20 8 23 11 23 16 16 16 16 8"], ["cx", "5.5", "cy", "18.5", "r", "2.5"], ["cx", "18.5", "cy", "18.5", "r", "2.5"], [1, "auth-brand-text"], [1, "auth-header"], [3, "ngSubmit"], [1, "form-group"], ["for", "username", 1, "form-label"], ["type", "text", "id", "username", "name", "username", "required", "", "placeholder", "Seu nome de usu\xE1rio", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "email", 1, "form-label"], ["type", "email", "id", "email", "name", "email", "required", "", "placeholder", "seu@email.com", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "password", 1, "form-label"], ["type", "password", "id", "password", "name", "password", "required", "", "minlength", "6", "placeholder", "M\xEDnimo 6 caracteres", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "role", 1, "form-label"], ["id", "role", "name", "role", 1, "form-control", 3, "ngModelChange", "ngModel"], ["value", "ROLE_OPERATOR"], ["value", "ROLE_GESTOR"], ["type", "submit", 1, "btn", "btn-primary", "btn-lg", "btn-block", 3, "disabled"], [1, "auth-footer"], ["routerLink", "/login"]], template: function RegistroComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(3, "svg", 4);
        \u0275\u0275element(4, "rect", 5)(5, "polygon", 6)(6, "circle", 7)(7, "circle", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(8, "span", 9);
        \u0275\u0275text(9, "DriveControl");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "div", 10)(11, "h2");
        \u0275\u0275text(12, "Criar Conta");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "p");
        \u0275\u0275text(14, "Preencha os dados para se registrar");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(15, "form", 11, 0);
        \u0275\u0275listener("ngSubmit", function RegistroComponent_Template_form_ngSubmit_15_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onSubmit());
        });
        \u0275\u0275elementStart(17, "div", 12)(18, "label", 13);
        \u0275\u0275text(19, "Nome de Usu\xE1rio");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "input", 14);
        \u0275\u0275twoWayListener("ngModelChange", function RegistroComponent_Template_input_ngModelChange_20_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.data.username, $event) || (ctx.data.username = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(21, "div", 12)(22, "label", 15);
        \u0275\u0275text(23, "Email");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "input", 16);
        \u0275\u0275twoWayListener("ngModelChange", function RegistroComponent_Template_input_ngModelChange_24_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.data.email, $event) || (ctx.data.email = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(25, "div", 12)(26, "label", 17);
        \u0275\u0275text(27, "Senha");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "input", 18);
        \u0275\u0275twoWayListener("ngModelChange", function RegistroComponent_Template_input_ngModelChange_28_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.data.password, $event) || (ctx.data.password = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(29, "div", 12)(30, "label", 19);
        \u0275\u0275text(31, "Tipo de Conta");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "select", 20);
        \u0275\u0275twoWayListener("ngModelChange", function RegistroComponent_Template_select_ngModelChange_32_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.data.role, $event) || (ctx.data.role = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementStart(33, "option", 21);
        \u0275\u0275text(34, "Operador");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "option", 22);
        \u0275\u0275text(36, "Gestor");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(37, "button", 23);
        \u0275\u0275text(38);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(39, "div", 24);
        \u0275\u0275text(40, " J\xE1 tem conta? ");
        \u0275\u0275elementStart(41, "a", 25);
        \u0275\u0275text(42, "Fa\xE7a login");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(20);
        \u0275\u0275twoWayProperty("ngModel", ctx.data.username);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.data.email);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.data.password);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.data.role);
        \u0275\u0275advance(5);
        \u0275\u0275property("disabled", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.loading ? "Criando conta..." : "Cadastrar", " ");
      }
    }, dependencies: [CommonModule, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinLengthValidator, NgModel, NgForm, RouterLink], styles: ["\n\n.btn-block[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=registro.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RegistroComponent, { className: "RegistroComponent", filePath: "app\\components\\registro\\registro.component.ts", lineNumber: 69 });
})();
export {
  RegistroComponent
};
//# sourceMappingURL=chunk-CLGMV6IO.js.map
