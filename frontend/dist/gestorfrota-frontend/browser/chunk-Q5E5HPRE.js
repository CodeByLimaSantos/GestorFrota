import {
  BehaviorSubject,
  __spreadProps,
  __spreadValues,
  ɵɵdefineInjectable
} from "./chunk-YFMWAREJ.js";

// src/app/shared/services/toast.service.ts
var nextId = 1;
var ToastService = class _ToastService {
  constructor() {
    this.toastsSubject = new BehaviorSubject([]);
    this.toasts$ = this.toastsSubject.asObservable();
  }
  success(title, message, duration = 4e3) {
    this.add({ type: "success", title, message, duration });
  }
  error(title, message, duration = 5e3) {
    this.add({ type: "error", title, message, duration });
  }
  warning(title, message, duration = 4e3) {
    this.add({ type: "warning", title, message, duration });
  }
  info(title, message, duration = 3e3) {
    this.add({ type: "info", title, message, duration });
  }
  dismiss(id) {
    this.set(this.get().filter((t) => t.id !== id));
  }
  clear() {
    this.set([]);
  }
  add(toast) {
    const newToast = __spreadProps(__spreadValues({}, toast), { id: nextId++ });
    this.set([...this.get(), newToast]);
    const d = toast.duration ?? 4e3;
    if (d > 0) {
      setTimeout(() => this.dismiss(newToast.id), d);
    }
  }
  set(toasts) {
    this.toastsSubject.next(toasts);
  }
  get() {
    return this.toastsSubject.getValue();
  }
  static {
    this.\u0275fac = function ToastService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ToastService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ToastService, factory: _ToastService.\u0275fac, providedIn: "root" });
  }
};

export {
  ToastService
};
//# sourceMappingURL=chunk-Q5E5HPRE.js.map
