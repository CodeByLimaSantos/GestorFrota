import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  RequiredValidator
} from "./chunk-FF3E223G.js";
import {
  ToastService
} from "./chunk-Q5E5HPRE.js";
import {
  ApiService
} from "./chunk-7B5JGBMG.js";
import {
  AuthService,
  CommonModule,
  NgForOf,
  NgIf,
  RouterLink,
  __spreadValues,
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
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-YFMWAREJ.js";

// src/app/components/motoristas/motoristas.component.ts
function MotoristasComponent_button_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 10);
    \u0275\u0275listener("click", function MotoristasComponent_button_11_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openModal());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 11);
    \u0275\u0275element(2, "path", 12)(3, "path", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Novo Motorista ");
    \u0275\u0275elementEnd();
  }
}
function MotoristasComponent_div_13_table_1_th_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th");
    \u0275\u0275text(1, "A\xE7\xF5es");
    \u0275\u0275elementEnd();
  }
}
function MotoristasComponent_div_13_table_1_tr_13_td_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td")(1, "div", 21)(2, "button", 22);
    \u0275\u0275listener("click", function MotoristasComponent_div_13_table_1_tr_13_td_14_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r3);
      const motorista_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.editMotorista(motorista_r4));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 23);
    \u0275\u0275element(4, "path", 24)(5, "path", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, " Editar ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(7, "button", 26);
    \u0275\u0275listener("click", function MotoristasComponent_div_13_table_1_tr_13_td_14_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r3);
      const motorista_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.deleteMotorista(motorista_r4.id));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(8, "svg", 23);
    \u0275\u0275element(9, "path", 27)(10, "path", 28)(11, "path", 29)(12, "line", 30)(13, "line", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275text(14, " Excluir ");
    \u0275\u0275elementEnd()()();
  }
}
function MotoristasComponent_div_13_table_1_tr_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "div", 18)(3, "div", 19);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "strong");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td")(10, "span", 20);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "td");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, MotoristasComponent_div_13_table_1_tr_13_td_14_Template, 15, 0, "td", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const motorista_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(motorista_r4.name.charAt(0));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(motorista_r4.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(motorista_r4.email);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(motorista_r4.cnh);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(motorista_r4.phone);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isGestor);
  }
}
function MotoristasComponent_div_13_table_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table")(1, "thead")(2, "tr")(3, "th");
    \u0275\u0275text(4, "Nome");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "CNH");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Telefone");
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, MotoristasComponent_div_13_table_1_th_11_Template, 2, 0, "th", 15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "tbody");
    \u0275\u0275template(13, MotoristasComponent_div_13_table_1_tr_13_Template, 15, 6, "tr", 17);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(11);
    \u0275\u0275property("ngIf", ctx_r1.isGestor);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.motoristas);
  }
}
function MotoristasComponent_div_13_div_2_p_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 38);
    \u0275\u0275text(1, 'Clique em "Novo Motorista" para come\xE7ar.');
    \u0275\u0275elementEnd();
  }
}
function MotoristasComponent_div_13_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 33);
    \u0275\u0275element(2, "path", 34)(3, "circle", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "h3", 36);
    \u0275\u0275text(5, "Nenhum motorista cadastrado");
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, MotoristasComponent_div_13_div_2_p_6_Template, 2, 0, "p", 37);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx_r1.isGestor);
  }
}
function MotoristasComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275template(1, MotoristasComponent_div_13_table_1_Template, 14, 2, "table", 15)(2, MotoristasComponent_div_13_div_2_Template, 7, 1, "div", 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.motoristas.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.motoristas.length === 0);
  }
}
function MotoristasComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39);
    \u0275\u0275element(1, "div", 40);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Carregando motoristas...");
    \u0275\u0275elementEnd()();
  }
}
function MotoristasComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 41);
    \u0275\u0275listener("click", function MotoristasComponent_div_15_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275elementStart(1, "div", 42);
    \u0275\u0275listener("click", function MotoristasComponent_div_15_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r5);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 43)(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 44);
    \u0275\u0275listener("click", function MotoristasComponent_div_15_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 45);
    \u0275\u0275element(7, "line", 46)(8, "line", 47);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(9, "div", 48)(10, "div", 49)(11, "label", 50);
    \u0275\u0275text(12, "Nome Completo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "input", 51);
    \u0275\u0275twoWayListener("ngModelChange", function MotoristasComponent_div_15_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.name, $event) || (ctx_r1.form.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 49)(15, "label", 50);
    \u0275\u0275text(16, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "input", 52);
    \u0275\u0275twoWayListener("ngModelChange", function MotoristasComponent_div_15_Template_input_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.email, $event) || (ctx_r1.form.email = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 49)(19, "label", 50);
    \u0275\u0275text(20, "CNH");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "input", 53);
    \u0275\u0275twoWayListener("ngModelChange", function MotoristasComponent_div_15_Template_input_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.cnh, $event) || (ctx_r1.form.cnh = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 49)(23, "label", 50);
    \u0275\u0275text(24, "Telefone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "input", 54);
    \u0275\u0275twoWayListener("ngModelChange", function MotoristasComponent_div_15_Template_input_ngModelChange_25_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.phone, $event) || (ctx_r1.form.phone = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "div", 55)(27, "button", 56);
    \u0275\u0275listener("click", function MotoristasComponent_div_15_Template_button_click_27_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275text(28, "Cancelar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "button", 57);
    \u0275\u0275listener("click", function MotoristasComponent_div_15_Template_button_click_29_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveMotorista());
    });
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.editMode ? "Editar Motorista" : "Novo Motorista");
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.name);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.email);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.cnh);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.phone);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.saving);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.saving ? "Salvando..." : ctx_r1.editMode ? "Atualizar" : "Salvar");
  }
}
var MotoristasComponent = class _MotoristasComponent {
  constructor(authService, apiService, toast) {
    this.authService = authService;
    this.apiService = apiService;
    this.toast = toast;
    this.motoristas = [];
    this.showModal = false;
    this.editMode = false;
    this.isGestor = false;
    this.loading = true;
    this.saving = false;
    this.form = { name: "", email: "", cnh: "", phone: "" };
  }
  ngOnInit() {
    this.isGestor = this.authService.isGestor();
    this.loadMotoristas();
  }
  loadMotoristas() {
    this.loading = true;
    this.apiService.getMotoristas().subscribe({
      next: (data) => this.motoristas = data,
      complete: () => this.loading = false,
      error: () => {
        this.toast.error("Erro ao carregar motoristas");
        this.loading = false;
      }
    });
  }
  openModal() {
    this.form = { name: "", email: "", cnh: "", phone: "" };
    this.editMode = false;
    this.showModal = true;
  }
  closeModal() {
    this.showModal = false;
  }
  editMotorista(motorista) {
    this.form = __spreadValues({}, motorista);
    this.editMode = true;
    this.showModal = true;
  }
  saveMotorista() {
    this.saving = true;
    if (this.editMode && this.form.id) {
      this.apiService.updateMotorista(this.form.id, this.form).subscribe({
        next: () => {
          this.toast.success("Motorista atualizado com sucesso!");
          this.loadMotoristas();
          this.closeModal();
          this.saving = false;
        },
        error: (err) => {
          this.toast.error(err?.status === 403 ? "Sem permiss\xE3o" : "Erro ao atualizar motorista", err?.status === 403 ? "Apenas gestores podem editar motoristas." : "Verifique os dados.");
          this.saving = false;
        }
      });
    } else {
      this.apiService.createMotorista(this.form).subscribe({
        next: () => {
          this.toast.success("Motorista criado com sucesso!");
          this.loadMotoristas();
          this.closeModal();
          this.saving = false;
        },
        error: (err) => {
          this.toast.error(err?.status === 403 ? "Sem permiss\xE3o" : "Erro ao criar motorista", err?.status === 403 ? "Apenas gestores podem cadastrar motoristas." : "Verifique o console.");
          this.saving = false;
        }
      });
    }
  }
  getLastHttpError() {
    return "verifique os dados";
  }
  deleteMotorista(id) {
    if (confirm("Tem certeza que deseja excluir este motorista?")) {
      this.apiService.deleteMotorista(id).subscribe({
        next: () => {
          this.toast.success("Motorista exclu\xEDdo com sucesso!");
          this.loadMotoristas();
        },
        error: (err) => this.toast.error(err?.status === 403 ? "Sem permiss\xE3o" : "Erro ao excluir motorista", err?.status === 403 ? "Apenas gestores podem excluir motoristas." : void 0)
      });
    }
  }
  static {
    this.\u0275fac = function MotoristasComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MotoristasComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(ApiService), \u0275\u0275directiveInject(ToastService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MotoristasComponent, selectors: [["app-motoristas"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 16, vars: 4, consts: [[1, "page-header"], [1, "page-header-left"], [1, "breadcrumbs"], ["routerLink", "/dashboard"], [1, "separator"], ["class", "btn btn-primary", 3, "click", 4, "ngIf"], [1, "card"], ["class", "table-wrapper", 4, "ngIf"], ["class", "inline-loading", 4, "ngIf"], ["class", "modal-overlay", 3, "click", 4, "ngIf"], [1, "btn", "btn-primary", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M5 12h14"], ["d", "M12 5v14"], [1, "table-wrapper"], [4, "ngIf"], ["class", "empty-state", 4, "ngIf"], [4, "ngFor", "ngForOf"], [2, "display", "flex", "align-items", "center", "gap", "10px"], [1, "table-avatar"], [1, "badge", "badge-info"], [1, "actions-group"], [1, "btn", "btn-outline", "btn-sm", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "14", "height", "14", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"], ["d", "m15 5 4 4"], [1, "btn", "btn-danger", "btn-sm", 3, "click"], ["d", "M3 6h18"], ["d", "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"], ["d", "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"], ["x1", "10", "y1", "11", "x2", "10", "y2", "17"], ["x1", "14", "y1", "11", "x2", "14", "y2", "17"], [1, "empty-state"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.5", 1, "empty-state-icon"], ["d", "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"], ["cx", "12", "cy", "7", "r", "4"], [1, "empty-state-title"], ["class", "empty-state-text", 4, "ngIf"], [1, "empty-state-text"], [1, "inline-loading"], [1, "spinner-sm"], [1, "modal-overlay", 3, "click"], [1, "modal", 3, "click"], [1, "modal-header"], [1, "btn", "btn-ghost", "btn-icon", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["x1", "18", "y1", "6", "x2", "6", "y2", "18"], ["x1", "6", "y1", "6", "x2", "18", "y2", "18"], [1, "modal-body"], [1, "form-group"], [1, "form-label"], ["type", "text", "name", "name", "required", "", "placeholder", "Nome do motorista", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "email", "name", "email", "required", "", "placeholder", "email@exemplo.com", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "cnh", "required", "", "placeholder", "00000000000", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "phone", "required", "", "placeholder", "(00) 00000-0000", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "modal-footer"], [1, "btn", "btn-outline", 3, "click"], [1, "btn", "btn-primary", 3, "click", "disabled"]], template: function MotoristasComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1");
        \u0275\u0275text(3, "Motoristas");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "nav", 2)(5, "a", 3);
        \u0275\u0275text(6, "In\xEDcio");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "span", 4);
        \u0275\u0275text(8, "/");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "span");
        \u0275\u0275text(10, "Motoristas");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(11, MotoristasComponent_button_11_Template, 5, 0, "button", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "div", 6);
        \u0275\u0275template(13, MotoristasComponent_div_13_Template, 3, 2, "div", 7)(14, MotoristasComponent_div_14_Template, 4, 0, "div", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275template(15, MotoristasComponent_div_15_Template, 31, 7, "div", 9);
      }
      if (rf & 2) {
        \u0275\u0275advance(11);
        \u0275\u0275property("ngIf", ctx.isGestor);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", !ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showModal);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, RequiredValidator, NgModel, RouterLink], styles: ["\n\n.spinner-sm[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  border: 2px solid var(--color-gray-200);\n  border-top-color: var(--color-primary-600);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.table-avatar[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: var(--radius-full);\n  background: var(--color-primary-50);\n  color: var(--color-primary-600);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 12px;\n  font-weight: var(--font-semibold);\n  flex-shrink: 0;\n}\n/*# sourceMappingURL=motoristas.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MotoristasComponent, { className: "MotoristasComponent", filePath: "app\\components\\motoristas\\motoristas.component.ts", lineNumber: 151 });
})();
export {
  MotoristasComponent
};
//# sourceMappingURL=chunk-NXMNM5VM.js.map
