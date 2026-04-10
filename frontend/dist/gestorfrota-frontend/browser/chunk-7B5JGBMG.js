import {
  HttpClient,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-YFMWAREJ.js";

// src/app/services/api.service.ts
var ApiService = class _ApiService {
  constructor(http) {
    this.http = http;
  }
  // Veículos
  getVeiculos() {
    return this.http.get("/Vehicles/all");
  }
  getVeiculo(id) {
    return this.http.get(`/Vehicles/search/${id}`);
  }
  createVeiculo(data) {
    return this.http.post("/Vehicles/Register", data);
  }
  updateVeiculo(id, data) {
    return this.http.put(`/Vehicles/Change/${id}`, data);
  }
  deleteVeiculo(id) {
    return this.http.delete(`/Vehicles/Delete/${id}`);
  }
  // Motoristas
  getMotoristas() {
    return this.http.get("/Drivers/all");
  }
  getMotorista(id) {
    return this.http.get(`/Drivers/search/${id}`);
  }
  createMotorista(data) {
    return this.http.post("/Drivers/Register", data);
  }
  updateMotorista(id, data) {
    return this.http.put(`/Drivers/Change/${id}`, data);
  }
  deleteMotorista(id) {
    return this.http.delete(`/Drivers/Delete/${id}`);
  }
  // Aluguéis
  getAlugueis() {
    return this.http.get("/rentals/all");
  }
  getAluguel(id) {
    return this.http.get(`/rentals/${id}`);
  }
  createAluguel(data) {
    return this.http.post("/rentals/Register", data);
  }
  updateAluguel(id, data) {
    return this.http.put(`/rentals/${id}`, data);
  }
  deleteAluguel(id) {
    return this.http.delete(`/rentals/${id}`);
  }
  static {
    this.\u0275fac = function ApiService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ApiService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ApiService, factory: _ApiService.\u0275fac, providedIn: "root" });
  }
};

export {
  ApiService
};
//# sourceMappingURL=chunk-7B5JGBMG.js.map
