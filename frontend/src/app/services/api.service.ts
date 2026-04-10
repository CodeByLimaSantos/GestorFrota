import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface DashboardStats {
  totalVehicles: number;
  vehiclesAvailable: number;
  vehiclesRented: number;
  vehiclesMaintenance: number;
  totalDrivers: number;
  driversOnRental: number;
  driversWaiting: number;
  driversInactive: number;
  totalRentals: number;
  rentalsActive: number;
  rentalsClosed: number;
  rentalsCancelled: number;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) {}

  // Dashboard
  getDashboardStats(): Observable<DashboardStats> {
    return this.http.get<DashboardStats>('/dashboard/stats');
  }

  // Veículos
  getVeiculos(): Observable<any[]> {
    return this.http.get<any[]>('/Vehicles/all');
  }

  getVeiculo(id: string): Observable<any> {
    return this.http.get<any>(`/Vehicles/search/${id}`);
  }

  createVeiculo(data: any): Observable<any> {
    return this.http.post('/Vehicles/Register', data);
  }

  updateVeiculo(id: string, data: any): Observable<any> {
    return this.http.put(`/Vehicles/Change/${id}`, data);
  }

  deleteVeiculo(id: string): Observable<any> {
    return this.http.delete(`/Vehicles/Delete/${id}`);
  }

  // Motoristas
  getMotoristas(): Observable<any[]> {
    return this.http.get<any[]>('/Drivers/all');
  }

  getMotorista(id: string): Observable<any> {
    return this.http.get<any>(`/Drivers/search/${id}`);
  }

  createMotorista(data: any): Observable<any> {
    return this.http.post('/Drivers/Register', data);
  }

  updateMotorista(id: string, data: any): Observable<any> {
    return this.http.put(`/Drivers/Change/${id}`, data);
  }

  deleteMotorista(id: string): Observable<any> {
    return this.http.delete(`/Drivers/Delete/${id}`);
  }

  // Aluguéis
  getAlugueis(): Observable<any[]> {
    return this.http.get<any[]>('/rentals/all');
  }

  getAluguel(id: string): Observable<any> {
    return this.http.get<any>(`/rentals/${id}`);
  }

  createAluguel(data: any): Observable<any> {
    return this.http.post('/rentals/Register', data);
  }

  updateAluguel(id: string, data: any): Observable<any> {
    return this.http.put(`/rentals/${id}`, data);
  }

  deleteAluguel(id: string): Observable<any> {
    return this.http.delete(`/rentals/${id}`);
  }
}
