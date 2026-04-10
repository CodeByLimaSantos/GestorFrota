import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
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
  catchError,
  forkJoin,
  map,
  of,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
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
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-W6W4SR3A.js";

// src/app/components/alugueis/alugueis.component.ts
function AlugueisComponent_button_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 11);
    \u0275\u0275listener("click", function AlugueisComponent_button_11_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openModal());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 12);
    \u0275\u0275element(2, "path", 13)(3, "path", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Novo Aluguel ");
    \u0275\u0275elementEnd();
  }
}
function AlugueisComponent_div_13_table_1_th_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th");
    \u0275\u0275text(1, "A\xE7\xF5es");
    \u0275\u0275elementEnd();
  }
}
function AlugueisComponent_div_13_table_1_tr_15_td_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td")(1, "div", 22)(2, "button", 23);
    \u0275\u0275listener("click", function AlugueisComponent_div_13_table_1_tr_15_td_16_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r3);
      const aluguel_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.editAluguel(aluguel_r4));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 24);
    \u0275\u0275element(4, "path", 25)(5, "path", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, " Editar ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(7, "button", 27);
    \u0275\u0275listener("click", function AlugueisComponent_div_13_table_1_tr_15_td_16_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r3);
      const aluguel_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(aluguel_r4.id && ctx_r1.deleteAluguel(aluguel_r4.id));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(8, "svg", 24);
    \u0275\u0275element(9, "path", 28)(10, "path", 29)(11, "path", 30)(12, "line", 31)(13, "line", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275text(14, " Excluir ");
    \u0275\u0275elementEnd()()();
  }
}
function AlugueisComponent_div_13_table_1_tr_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td")(5, "div", 19)(6, "div", 20);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td")(14, "span", 21);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(16, AlugueisComponent_div_13_table_1_tr_15_td_16_Template, 15, 0, "td", 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const aluguel_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.getVeiculoNome(aluguel_r4));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.getMotoristaNome(aluguel_r4).charAt(0));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getMotoristaNome(aluguel_r4), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(aluguel_r4.startDate));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(aluguel_r4.endDate));
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r1.statusClass(aluguel_r4.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.statusLabel(aluguel_r4.status), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isGestor);
  }
}
function AlugueisComponent_div_13_table_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table")(1, "thead")(2, "tr")(3, "th");
    \u0275\u0275text(4, "Ve\xEDculo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Motorista");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "In\xEDcio");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Fim");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, AlugueisComponent_div_13_table_1_th_13_Template, 2, 0, "th", 16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "tbody");
    \u0275\u0275template(15, AlugueisComponent_div_13_table_1_tr_15_Template, 17, 9, "tr", 18);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(13);
    \u0275\u0275property("ngIf", ctx_r1.isGestor);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.alugueis);
  }
}
function AlugueisComponent_div_13_div_2_p_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 39);
    \u0275\u0275text(1, 'Clique em "Novo Aluguel" para come\xE7ar.');
    \u0275\u0275elementEnd();
  }
}
function AlugueisComponent_div_13_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 34);
    \u0275\u0275element(2, "path", 35)(3, "rect", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "h3", 37);
    \u0275\u0275text(5, "Nenhum aluguel cadastrado");
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, AlugueisComponent_div_13_div_2_p_6_Template, 2, 0, "p", 38);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx_r1.isGestor);
  }
}
function AlugueisComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275template(1, AlugueisComponent_div_13_table_1_Template, 16, 2, "table", 16)(2, AlugueisComponent_div_13_div_2_Template, 7, 1, "div", 17);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.alugueis.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.alugueis.length === 0);
  }
}
function AlugueisComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 40)(1, "button", 11);
    \u0275\u0275listener("click", function AlugueisComponent_div_14_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.loadAll());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 12);
    \u0275\u0275element(3, "polyline", 41)(4, "path", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " Tentar novamente ");
    \u0275\u0275elementEnd()();
  }
}
function AlugueisComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43);
    \u0275\u0275element(1, "div", 44);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Carregando alugu\xE9is...");
    \u0275\u0275elementEnd()();
  }
}
function AlugueisComponent_div_16_option_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 56);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const v_r7 = ctx.$implicit;
    \u0275\u0275property("value", v_r7.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate3(" ", v_r7.licensePlate, " \u2014 ", v_r7.make, " ", v_r7.model, " ");
  }
}
function AlugueisComponent_div_16_option_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 59);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const m_r8 = ctx.$implicit;
    \u0275\u0275property("ngValue", m_r8.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(m_r8.name);
  }
}
function AlugueisComponent_div_16_div_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 72);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("validation-error-conflict", ctx_r1.isConflictError());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.formError, " ");
  }
}
function AlugueisComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 45);
    \u0275\u0275listener("click", function AlugueisComponent_div_16_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275elementStart(1, "div", 46);
    \u0275\u0275listener("click", function AlugueisComponent_div_16_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r6);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 47)(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 48);
    \u0275\u0275listener("click", function AlugueisComponent_div_16_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 49);
    \u0275\u0275element(7, "line", 50)(8, "line", 51);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(9, "div", 52)(10, "div", 53)(11, "label", 54);
    \u0275\u0275text(12, "Ve\xEDculo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "select", 55);
    \u0275\u0275twoWayListener("ngModelChange", function AlugueisComponent_div_16_Template_select_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.vehicleId, $event) || (ctx_r1.form.vehicleId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(14, "option", 56);
    \u0275\u0275text(15, "Selecione um ve\xEDculo...");
    \u0275\u0275elementEnd();
    \u0275\u0275template(16, AlugueisComponent_div_16_option_16_Template, 2, 4, "option", 57);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 53)(18, "label", 54);
    \u0275\u0275text(19, "Motorista");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "select", 58);
    \u0275\u0275twoWayListener("ngModelChange", function AlugueisComponent_div_16_Template_select_ngModelChange_20_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.driverId, $event) || (ctx_r1.form.driverId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(21, "option", 59);
    \u0275\u0275text(22, "Selecione um motorista...");
    \u0275\u0275elementEnd();
    \u0275\u0275template(23, AlugueisComponent_div_16_option_23_Template, 2, 2, "option", 60);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 61)(25, "div", 53)(26, "label", 54);
    \u0275\u0275text(27, "Data de In\xEDcio");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "input", 62);
    \u0275\u0275twoWayListener("ngModelChange", function AlugueisComponent_div_16_Template_input_ngModelChange_28_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.startDate, $event) || (ctx_r1.form.startDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 53)(30, "label", 54);
    \u0275\u0275text(31, "Data de Fim");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "input", 63);
    \u0275\u0275twoWayListener("ngModelChange", function AlugueisComponent_div_16_Template_input_ngModelChange_32_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.endDate, $event) || (ctx_r1.form.endDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(33, "div", 53)(34, "label", 54);
    \u0275\u0275text(35, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "select", 64);
    \u0275\u0275twoWayListener("ngModelChange", function AlugueisComponent_div_16_Template_select_ngModelChange_36_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.status, $event) || (ctx_r1.form.status = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(37, "option", 65);
    \u0275\u0275text(38, "Ativo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "option", 66);
    \u0275\u0275text(40, "Encerrado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "option", 67);
    \u0275\u0275text(42, "Cancelado");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(43, AlugueisComponent_div_16_div_43_Template, 2, 3, "div", 68);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "div", 69)(45, "button", 70);
    \u0275\u0275listener("click", function AlugueisComponent_div_16_Template_button_click_45_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275text(46, "Cancelar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "button", 71);
    \u0275\u0275listener("click", function AlugueisComponent_div_16_Template_button_click_47_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveAluguel());
    });
    \u0275\u0275text(48);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.editMode ? "Editar Aluguel" : "Novo Aluguel");
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.vehicleId);
    \u0275\u0275advance();
    \u0275\u0275property("value", 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.veiculosDisponiveis);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.driverId);
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.motoristasDisponiveis);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.startDate);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.endDate);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.status);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r1.formError);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.saving);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.saving ? "Salvando..." : ctx_r1.editMode ? "Atualizar" : "Salvar");
  }
}
var AlugueisComponent = class _AlugueisComponent {
  constructor(authService, apiService, toast) {
    this.authService = authService;
    this.apiService = apiService;
    this.toast = toast;
    this.alugueis = [];
    this.veiculos = [];
    this.motoristas = [];
    this.veiculosDisponiveis = [];
    this.motoristasDisponiveis = [];
    this.showModal = false;
    this.editMode = false;
    this.isGestor = false;
    this.loading = true;
    this.saving = false;
    this.loadError = false;
    this.formError = "";
    this.form = {
      vehicleId: 0,
      driverId: 0,
      startDate: "",
      endDate: "",
      status: "ACTIVE"
    };
  }
  //Revisar
  ngOnInit() {
    this.isGestor = this.authService.isGestor();
    this.loadAll();
  }
  loadAll() {
    this.loading = true;
    this.loadError = false;
    const rentals$ = this.apiService.getAlugueis().pipe(map((data) => data || []), catchError(() => of([])));
    const vehicles$ = this.apiService.getVeiculos().pipe(map((data) => data || []), catchError(() => of([])));
    const drivers$ = this.apiService.getMotoristas().pipe(map((data) => data || []), catchError(() => of([])));
    forkJoin({
      alugueis: rentals$,
      vehicles: vehicles$,
      drivers: drivers$
    }).subscribe({
      next: ({ alugueis, vehicles, drivers }) => {
        this.alugueis = alugueis;
        this.veiculos = vehicles;
        this.motoristas = drivers;
        this.veiculosDisponiveis = vehicles.filter((v) => {
          const s = v.status?.toUpperCase();
          return s !== "MAINTENANCE" && s !== "RENTED";
        });
        this.motoristasDisponiveis = drivers;
        this.loading = false;
      },
      error: (err) => {
        console.error("Erro ao carregar dados:", err);
        this.toast.error("Erro ao carregar dados. Verifique sua conex\xE3o.");
        this.loadError = true;
        this.loading = false;
      }
    });
  }
  getVeiculoNome(aluguel) {
    if (aluguel.vehicle)
      return `${aluguel.vehicle.make} ${aluguel.vehicle.model}`;
    const v = this.veiculos.find((v2) => v2.id === aluguel.vehicleId);
    return v ? `${v.make} ${v.model}` : "N/A";
  }
  getMotoristaNome(aluguel) {
    if (aluguel.driver)
      return aluguel.driver.name;
    const m = this.motoristas.find((m2) => m2.id === aluguel.driverId);
    return m ? m.name : "N/A";
  }
  //funcionando
  formatDate(dateStr) {
    if (!dateStr)
      return "";
    const [year, month, day] = dateStr.split("-");
    return `${day}/${month}/${year}`;
  }
  statusClass(status) {
    const s = status?.toLowerCase() || "";
    if (s === "active")
      return "badge-success";
    if (s === "closed")
      return "badge-info";
    if (s === "cancelled")
      return "badge-error";
    return "badge-gray";
  }
  statusLabel(status) {
    const s = status?.toUpperCase() || "";
    if (s === "ACTIVE")
      return "Ativo";
    if (s === "CLOSED")
      return "Encerrado";
    if (s === "CANCELLED")
      return "Cancelado";
    return status;
  }
  openModal() {
    this.form = { vehicleId: 0, driverId: 0, startDate: "", endDate: "", status: "ACTIVE" };
    this.formError = "";
    this.editMode = false;
    this.showModal = true;
  }
  closeModal() {
    this.showModal = false;
  }
  editAluguel(aluguel) {
    this.form = {
      id: aluguel.id,
      vehicleId: aluguel.vehicleId ?? 0,
      driverId: aluguel.driverId ?? 0,
      startDate: aluguel.startDate.split("T")[0],
      endDate: aluguel.endDate.split("T")[0],
      status: aluguel.status
    };
    const currentVehicleId = aluguel.vehicleId;
    this.veiculosDisponiveis = this.veiculos.filter((v) => {
      const s = v.status?.toUpperCase();
      return v.id === currentVehicleId || s !== "MAINTENANCE" && s !== "RENTED";
    });
    this.formError = "";
    this.editMode = true;
    this.showModal = true;
  }
  validateForm() {
    if (!this.form.vehicleId)
      return "Selecione um ve\xEDculo.";
    if (!this.form.driverId)
      return "Selecione um motorista.";
    if (!this.form.startDate)
      return "Informe a data de in\xEDcio.";
    if (!this.form.endDate)
      return "Informe a data de fim.";
    if (this.form.endDate <= this.form.startDate) {
      return "A data de fim deve ser posterior \xE0 data de in\xEDcio.";
    }
    return null;
  }
  saveAluguel() {
    this.formError = this.validateForm() ?? "";
    if (this.formError)
      return;
    this.saving = true;
    if (this.editMode && this.form.id) {
      this.apiService.updateAluguel(String(this.form.id), this.form).subscribe({
        next: () => {
          this.toast.success("Aluguel atualizado com sucesso!");
          this.loadAll();
          this.closeModal();
          this.saving = false;
        },
        error: (err) => {
          this.formError = this.extractErrorMessage(err);
          this.saving = false;
        }
      });
    } else {
      this.apiService.createAluguel(this.form).subscribe({
        next: () => {
          this.toast.success("Aluguel criado com sucesso!");
          this.loadAll();
          this.closeModal();
          this.saving = false;
        },
        error: (err) => {
          console.error("Erro ao criar aluguel:", err);
          this.formError = this.extractErrorMessage(err);
          this.saving = false;
        }
      });
    }
  }
  extractErrorMessage(err) {
    if (err?.error?.error)
      return err.error.error;
    if (err?.error?.message)
      return err.error.message;
    return "Erro ao processar a requisi\xE7\xE3o. Verifique os dados e tente novamente.";
  }
  isConflictError() {
    return this.formError.includes("aluguel");
  }
  deleteAluguel(id) {
    if (confirm("Tem certeza que deseja excluir este aluguel?")) {
      this.apiService.deleteAluguel(String(id)).subscribe({
        next: () => {
          this.toast.success("Aluguel exclu\xEDdo com sucesso!");
          this.loadAll();
        },
        error: () => this.toast.error("Erro ao excluir aluguel")
      });
    }
  }
  static {
    this.\u0275fac = function AlugueisComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AlugueisComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(ApiService), \u0275\u0275directiveInject(ToastService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AlugueisComponent, selectors: [["app-alugueis"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 17, vars: 5, consts: [[1, "page-header"], [1, "page-header-left"], [1, "breadcrumbs"], ["routerLink", "/dashboard"], [1, "separator"], ["class", "btn btn-primary", 3, "click", 4, "ngIf"], [1, "card"], ["class", "table-wrapper", 4, "ngIf"], ["class", "error-state", 4, "ngIf"], ["class", "inline-loading", 4, "ngIf"], ["class", "modal-overlay", 3, "click", 4, "ngIf"], [1, "btn", "btn-primary", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M5 12h14"], ["d", "M12 5v14"], [1, "table-wrapper"], [4, "ngIf"], ["class", "empty-state", 4, "ngIf"], [4, "ngFor", "ngForOf"], [2, "display", "flex", "align-items", "center", "gap", "10px"], [1, "table-avatar"], [1, "badge"], [1, "actions-group"], [1, "btn", "btn-outline", "btn-sm", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "14", "height", "14", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"], ["d", "m15 5 4 4"], [1, "btn", "btn-danger", "btn-sm", 3, "click"], ["d", "M3 6h18"], ["d", "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"], ["d", "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"], ["x1", "10", "y1", "11", "x2", "10", "y2", "17"], ["x1", "14", "y1", "11", "x2", "14", "y2", "17"], [1, "empty-state"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.5", 1, "empty-state-icon"], ["d", "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"], ["width", "8", "height", "4", "x", "8", "y", "2", "rx", "1", "ry", "1"], [1, "empty-state-title"], ["class", "empty-state-text", 4, "ngIf"], [1, "empty-state-text"], [1, "error-state"], ["points", "23 4 23 10 17 10"], ["d", "M20.49 15a9 9 0 1 1-2.12-9.36L23 10"], [1, "inline-loading"], [1, "spinner-sm"], [1, "modal-overlay", 3, "click"], [1, "modal", 3, "click"], [1, "modal-header"], [1, "btn", "btn-ghost", "btn-icon", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["x1", "18", "y1", "6", "x2", "6", "y2", "18"], ["x1", "6", "y1", "6", "x2", "18", "y2", "18"], [1, "modal-body"], [1, "form-group"], [1, "form-label"], ["name", "vehicleId", 1, "form-control", 3, "ngModelChange", "ngModel"], [3, "value"], [3, "value", 4, "ngFor", "ngForOf"], ["name", "driverId", 1, "form-control", 3, "ngModelChange", "ngModel"], [3, "ngValue"], [3, "ngValue", 4, "ngFor", "ngForOf"], [2, "display", "grid", "grid-template-columns", "1fr 1fr", "gap", "var(--space-4)"], ["type", "date", "name", "startDate", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "date", "name", "endDate", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["name", "status", 1, "form-control", 3, "ngModelChange", "ngModel"], ["value", "ACTIVE"], ["value", "CLOSED"], ["value", "CANCELLED"], ["class", "validation-error", 3, "validation-error-conflict", 4, "ngIf"], [1, "modal-footer"], [1, "btn", "btn-outline", 3, "click"], [1, "btn", "btn-primary", 3, "click", "disabled"], [1, "validation-error"]], template: function AlugueisComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1");
        \u0275\u0275text(3, "Alugu\xE9is");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "nav", 2)(5, "a", 3);
        \u0275\u0275text(6, "In\xEDcio");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "span", 4);
        \u0275\u0275text(8, "/");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "span");
        \u0275\u0275text(10, "Alugu\xE9is");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(11, AlugueisComponent_button_11_Template, 5, 0, "button", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "div", 6);
        \u0275\u0275template(13, AlugueisComponent_div_13_Template, 3, 2, "div", 7)(14, AlugueisComponent_div_14_Template, 6, 0, "div", 8)(15, AlugueisComponent_div_15_Template, 4, 0, "div", 9);
        \u0275\u0275elementEnd();
        \u0275\u0275template(16, AlugueisComponent_div_16_Template, 49, 13, "div", 10);
      }
      if (rf & 2) {
        \u0275\u0275advance(11);
        \u0275\u0275property("ngIf", ctx.isGestor);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", !ctx.loading && !ctx.loadError);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.loadError);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showModal);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, RequiredValidator, NgModel, RouterLink], styles: ["\n\n.spinner-sm[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  border: 2px solid var(--color-gray-200);\n  border-top-color: var(--color-primary-600);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.table-avatar[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border-radius: var(--radius-full);\n  background: var(--color-primary-50);\n  color: var(--color-primary-600);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 11px;\n  font-weight: var(--font-semibold);\n  flex-shrink: 0;\n}\n.error-state[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: var(--space-12);\n  flex-direction: column;\n  gap: var(--space-3);\n}\n.error-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--color-gray-500);\n  font-size: var(--text-sm);\n}\n.validation-error[_ngcontent-%COMP%] {\n  background: var(--color-error-50);\n  border: 1px solid var(--color-error-500);\n  border-radius: var(--radius-md);\n  color: var(--color-error-700);\n  font-size: var(--text-sm);\n  padding: var(--space-3);\n  margin-top: var(--space-2);\n}\n.validation-error-conflict[_ngcontent-%COMP%] {\n  background: var(--color-warning-50);\n  border-color: var(--color-warning-500);\n  color: var(--color-warning-700);\n}\n/*# sourceMappingURL=alugueis.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AlugueisComponent, { className: "AlugueisComponent", filePath: "app\\components\\alugueis\\alugueis.component.ts", lineNumber: 234 });
})();
export {
  AlugueisComponent
};
//# sourceMappingURL=chunk-DH6TIU32.js.map
