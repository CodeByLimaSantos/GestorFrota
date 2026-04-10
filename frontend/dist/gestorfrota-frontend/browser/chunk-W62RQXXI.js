import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  RequiredValidator,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-X4XRC4RY.js";
import {
  ToastService
} from "./chunk-YLIVN2II.js";
import {
  ApiService
} from "./chunk-JGA337U3.js";
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
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-W6W4SR3A.js";

// src/app/components/veiculos/veiculos.component.ts
function VeiculosComponent_button_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 10);
    \u0275\u0275listener("click", function VeiculosComponent_button_11_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openModal());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 11);
    \u0275\u0275element(2, "path", 12)(3, "path", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Novo Ve\xEDculo ");
    \u0275\u0275elementEnd();
  }
}
function VeiculosComponent_div_13_table_1_th_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th");
    \u0275\u0275text(1, "A\xE7\xF5es");
    \u0275\u0275elementEnd();
  }
}
function VeiculosComponent_div_13_table_1_tr_17_td_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td")(1, "div", 20)(2, "button", 21);
    \u0275\u0275listener("click", function VeiculosComponent_div_13_table_1_tr_17_td_16_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r3);
      const veiculo_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.editVeiculo(veiculo_r4));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 22);
    \u0275\u0275element(4, "path", 23)(5, "path", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, " Editar ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(7, "button", 25);
    \u0275\u0275listener("click", function VeiculosComponent_div_13_table_1_tr_17_td_16_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r3);
      const veiculo_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.deleteVeiculo(veiculo_r4.id));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(8, "svg", 22);
    \u0275\u0275element(9, "path", 26)(10, "path", 27)(11, "path", 28)(12, "line", 29)(13, "line", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275text(14, " Excluir ");
    \u0275\u0275elementEnd()()();
  }
}
function VeiculosComponent_div_13_table_1_tr_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td")(9, "span", 18);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td")(14, "span", 19);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(16, VeiculosComponent_div_13_table_1_tr_17_td_16_Template, 15, 0, "td", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const veiculo_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(veiculo_r4.make);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(veiculo_r4.model);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(veiculo_r4.year);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(veiculo_r4.licensePlate);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(veiculo_r4.color);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r1.vehicleStatusClass(veiculo_r4.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.vehicleStatusLabel(veiculo_r4.status), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isGestor);
  }
}
function VeiculosComponent_div_13_table_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table")(1, "thead")(2, "tr")(3, "th");
    \u0275\u0275text(4, "Marca");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Modelo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Ano");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Placa");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "Cor");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275template(15, VeiculosComponent_div_13_table_1_th_15_Template, 2, 0, "th", 15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "tbody");
    \u0275\u0275template(17, VeiculosComponent_div_13_table_1_tr_17_Template, 17, 9, "tr", 17);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(15);
    \u0275\u0275property("ngIf", ctx_r1.isGestor);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.veiculos);
  }
}
function VeiculosComponent_div_13_div_2_p_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 38);
    \u0275\u0275text(1, 'Clique em "Novo Ve\xEDculo" para come\xE7ar.');
    \u0275\u0275elementEnd();
  }
}
function VeiculosComponent_div_13_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 32);
    \u0275\u0275element(2, "path", 33)(3, "circle", 34)(4, "circle", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "h3", 36);
    \u0275\u0275text(6, "Nenhum ve\xEDculo cadastrado");
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, VeiculosComponent_div_13_div_2_p_7_Template, 2, 0, "p", 37);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r1.isGestor);
  }
}
function VeiculosComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275template(1, VeiculosComponent_div_13_table_1_Template, 18, 2, "table", 15)(2, VeiculosComponent_div_13_div_2_Template, 8, 1, "div", 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.veiculos.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.veiculos.length === 0);
  }
}
function VeiculosComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39);
    \u0275\u0275element(1, "div", 40);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Carregando ve\xEDculos...");
    \u0275\u0275elementEnd()();
  }
}
function VeiculosComponent_div_15_div_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 61);
    \u0275\u0275text(1, " Alugado ");
    \u0275\u0275elementEnd();
  }
}
function VeiculosComponent_div_15_select_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "select", 62);
    \u0275\u0275twoWayListener("ngModelChange", function VeiculosComponent_div_15_select_34_Template_select_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.form.status, $event) || (ctx_r1.form.status = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(1, "option", 63);
    \u0275\u0275text(2, "Dispon\xEDvel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "option", 64);
    \u0275\u0275text(4, "Manuten\xE7\xE3o");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.status);
  }
}
function VeiculosComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 41);
    \u0275\u0275listener("click", function VeiculosComponent_div_15_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275elementStart(1, "div", 42);
    \u0275\u0275listener("click", function VeiculosComponent_div_15_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r5);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 43)(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 44);
    \u0275\u0275listener("click", function VeiculosComponent_div_15_Template_button_click_5_listener() {
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
    \u0275\u0275text(12, "Marca");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "input", 51);
    \u0275\u0275twoWayListener("ngModelChange", function VeiculosComponent_div_15_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.make, $event) || (ctx_r1.form.make = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 49)(15, "label", 50);
    \u0275\u0275text(16, "Modelo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "input", 52);
    \u0275\u0275twoWayListener("ngModelChange", function VeiculosComponent_div_15_Template_input_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.model, $event) || (ctx_r1.form.model = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 49)(19, "label", 50);
    \u0275\u0275text(20, "Ano");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "input", 53);
    \u0275\u0275twoWayListener("ngModelChange", function VeiculosComponent_div_15_Template_input_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.year, $event) || (ctx_r1.form.year = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 49)(23, "label", 50);
    \u0275\u0275text(24, "Placa");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "input", 54);
    \u0275\u0275twoWayListener("ngModelChange", function VeiculosComponent_div_15_Template_input_ngModelChange_25_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.licensePlate, $event) || (ctx_r1.form.licensePlate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 49)(27, "label", 50);
    \u0275\u0275text(28, "Cor");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "input", 55);
    \u0275\u0275twoWayListener("ngModelChange", function VeiculosComponent_div_15_Template_input_ngModelChange_29_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.color, $event) || (ctx_r1.form.color = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 49)(31, "label", 50);
    \u0275\u0275text(32, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275template(33, VeiculosComponent_div_15_div_33_Template, 2, 0, "div", 56)(34, VeiculosComponent_div_15_select_34_Template, 5, 1, "select", 57);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 58)(36, "button", 59);
    \u0275\u0275listener("click", function VeiculosComponent_div_15_Template_button_click_36_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275text(37, "Cancelar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "button", 60);
    \u0275\u0275listener("click", function VeiculosComponent_div_15_Template_button_click_38_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveVeiculo());
    });
    \u0275\u0275text(39);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.editMode ? "Editar Ve\xEDculo" : "Novo Ve\xEDculo");
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.make);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.model);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.year);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.licensePlate);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.color);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.editMode && ctx_r1.form.status === "RENTED");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !(ctx_r1.editMode && ctx_r1.form.status === "RENTED"));
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.saving);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.saving ? "Salvando..." : ctx_r1.editMode ? "Atualizar" : "Salvar");
  }
}
var VeiculosComponent = class _VeiculosComponent {
  constructor(authService, apiService, toast) {
    this.authService = authService;
    this.apiService = apiService;
    this.toast = toast;
    this.veiculos = [];
    this.showModal = false;
    this.editMode = false;
    this.isGestor = false;
    this.loading = true;
    this.saving = false;
    this.form = { model: "", make: "", year: (/* @__PURE__ */ new Date()).getFullYear(), licensePlate: "", color: "", status: "AVAILABLE" };
  }
  ngOnInit() {
    this.isGestor = this.authService.isGestor();
    this.loadVeiculos();
  }
  loadVeiculos() {
    this.loading = true;
    this.apiService.getVeiculos().subscribe({
      next: (data) => this.veiculos = data || [],
      complete: () => this.loading = false,
      error: () => {
        this.toast.error("Erro ao carregar ve\xEDculos");
        this.loading = false;
      }
    });
  }
  openModal() {
    this.form = { model: "", make: "", year: (/* @__PURE__ */ new Date()).getFullYear(), licensePlate: "", color: "", status: "AVAILABLE" };
    this.editMode = false;
    this.showModal = true;
  }
  closeModal() {
    this.showModal = false;
  }
  editVeiculo(veiculo) {
    this.form = __spreadValues({}, veiculo);
    this.editMode = true;
    this.showModal = true;
  }
  saveVeiculo() {
    this.saving = true;
    if (this.editMode && this.form.id) {
      this.apiService.updateVeiculo(this.form.id, this.form).subscribe({
        next: () => {
          this.toast.success("Ve\xEDculo atualizado com sucesso!");
          this.loadVeiculos();
          this.closeModal();
          this.saving = false;
        },
        error: (err) => {
          const msg = err?.error?.error || "Erro ao atualizar ve\xEDculo";
          this.toast.error(msg);
          this.saving = false;
        }
      });
    } else {
      this.apiService.createVeiculo(this.form).subscribe({
        next: () => {
          this.toast.success("Ve\xEDculo criado com sucesso!");
          this.loadVeiculos();
          this.closeModal();
          this.saving = false;
        },
        error: (err) => {
          const msg = err?.error?.error || "Erro ao criar ve\xEDculo";
          this.toast.error(msg);
          this.saving = false;
        }
      });
    }
  }
  deleteVeiculo(id) {
    if (confirm("Tem certeza que deseja excluir este ve\xEDculo?")) {
      this.apiService.deleteVeiculo(id).subscribe({
        next: () => {
          this.toast.success("Ve\xEDculo exclu\xEDdo com sucesso!");
          this.loadVeiculos();
        },
        error: (err) => {
          const msg = err?.error?.error || "Erro ao excluir ve\xEDculo";
          this.toast.error(msg);
        }
      });
    }
  }
  vehicleStatusClass(status) {
    const s = status?.toUpperCase() || "";
    if (s === "AVAILABLE")
      return "badge-success";
    if (s === "RENTED")
      return "badge-info";
    if (s === "MAINTENANCE")
      return "badge-warning";
    return "badge-gray";
  }
  vehicleStatusLabel(status) {
    const s = status?.toUpperCase() || "";
    if (s === "AVAILABLE")
      return "Dispon\xEDvel";
    if (s === "RENTED")
      return "Alugado";
    if (s === "MAINTENANCE")
      return "Manuten\xE7\xE3o";
    return status || "N/A";
  }
  static {
    this.\u0275fac = function VeiculosComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _VeiculosComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(ApiService), \u0275\u0275directiveInject(ToastService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VeiculosComponent, selectors: [["app-veiculos"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 16, vars: 4, consts: [[1, "page-header"], [1, "page-header-left"], [1, "breadcrumbs"], ["routerLink", "/dashboard"], [1, "separator"], ["class", "btn btn-primary", 3, "click", 4, "ngIf"], [1, "card"], ["class", "table-wrapper", 4, "ngIf"], ["class", "inline-loading", 4, "ngIf"], ["class", "modal-overlay", 3, "click", 4, "ngIf"], [1, "btn", "btn-primary", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M5 12h14"], ["d", "M12 5v14"], [1, "table-wrapper"], [4, "ngIf"], ["class", "empty-state", 4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "badge", "badge-gray"], [1, "badge"], [1, "actions-group"], [1, "btn", "btn-outline", "btn-sm", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "14", "height", "14", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"], ["d", "m15 5 4 4"], [1, "btn", "btn-danger", "btn-sm", 3, "click"], ["d", "M3 6h18"], ["d", "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"], ["d", "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"], ["x1", "10", "y1", "11", "x2", "10", "y2", "17"], ["x1", "14", "y1", "11", "x2", "14", "y2", "17"], [1, "empty-state"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.5", 1, "empty-state-icon"], ["d", "M5 17h14v-5l-1.5-3.5A2 2 0 0 0 15.7 7H8.3a2 2 0 0 0-1.8 1.5L5 12v5z"], ["cx", "7.5", "cy", "17", "r", "1.5"], ["cx", "16.5", "cy", "17", "r", "1.5"], [1, "empty-state-title"], ["class", "empty-state-text", 4, "ngIf"], [1, "empty-state-text"], [1, "inline-loading"], [1, "spinner-sm"], [1, "modal-overlay", 3, "click"], [1, "modal", 3, "click"], [1, "modal-header"], [1, "btn", "btn-ghost", "btn-icon", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["x1", "18", "y1", "6", "x2", "6", "y2", "18"], ["x1", "6", "y1", "6", "x2", "18", "y2", "18"], [1, "modal-body"], [1, "form-group"], [1, "form-label"], ["type", "text", "name", "make", "required", "", "placeholder", "Ex: Toyota", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "model", "required", "", "placeholder", "Ex: Corolla", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "number", "name", "year", "required", "", "placeholder", "Ex: 2024", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "licensePlate", "required", "", "placeholder", "Ex: ABC-1D23", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "color", "required", "", "placeholder", "Ex: Prata", 1, "form-control", 3, "ngModelChange", "ngModel"], ["class", "form-control-static badge badge-info", 4, "ngIf"], ["class", "form-control", "name", "status", 3, "ngModel", "ngModelChange", 4, "ngIf"], [1, "modal-footer"], [1, "btn", "btn-outline", 3, "click"], [1, "btn", "btn-primary", 3, "click", "disabled"], [1, "form-control-static", "badge", "badge-info"], ["name", "status", 1, "form-control", 3, "ngModelChange", "ngModel"], ["value", "AVAILABLE"], ["value", "MAINTENANCE"]], template: function VeiculosComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1");
        \u0275\u0275text(3, "Ve\xEDculos");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "nav", 2)(5, "a", 3);
        \u0275\u0275text(6, "In\xEDcio");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "span", 4);
        \u0275\u0275text(8, "/");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "span");
        \u0275\u0275text(10, "Ve\xEDculos");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(11, VeiculosComponent_button_11_Template, 5, 0, "button", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "div", 6);
        \u0275\u0275template(13, VeiculosComponent_div_13_Template, 3, 2, "div", 7)(14, VeiculosComponent_div_14_Template, 4, 0, "div", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275template(15, VeiculosComponent_div_15_Template, 40, 10, "div", 9);
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
    }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, RequiredValidator, NgModel, RouterLink], styles: ["\n\n.spinner-sm[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  border: 2px solid var(--color-gray-200);\n  border-top-color: var(--color-primary-600);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.form-control-static[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 6px 12px;\n  font-size: var(--text-sm);\n  font-weight: var(--font-semibold);\n  cursor: default;\n}\n/*# sourceMappingURL=veiculos.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VeiculosComponent, { className: "VeiculosComponent", filePath: "app\\components\\veiculos\\veiculos.component.ts", lineNumber: 168 });
})();
export {
  VeiculosComponent
};
//# sourceMappingURL=chunk-W62RQXXI.js.map
