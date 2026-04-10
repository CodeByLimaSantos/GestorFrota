import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';

export interface LoginRequest {
  username: string;
  password: string;
}

export interface RegisterRequest {
  username: string;
  email: string;
  password: string;
  role: string;
}

export interface AuthResponse {
  token: string;
  role: string;
  username: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly TOKEN_KEY = 'auth_token';
  private readonly USER_KEY = 'user_info';

  private currentUserSubject = new BehaviorSubject<any>(null);
  public currentUser$ = this.currentUserSubject.asObservable();

  constructor(private http: HttpClient) {
    this.loadStoredUser();
  }

  private loadStoredUser(): void {
    const userStr = localStorage.getItem(this.USER_KEY);
    if (userStr && this.getToken()) {
      this.currentUserSubject.next(JSON.parse(userStr));
    }
  }

  login(credentials: LoginRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>('/Auth/login', credentials)
      .pipe(
        tap(response => {
          this.setToken(response.token);
          // Usa role e username reais retornados pelo backend
          const rawRole = response.role || '';
          const normalizedRole = rawRole.replace('ROLE_', '');
          const userInfo = {
            username: response.username || credentials.username,
            role: normalizedRole  // 'GESTOR' ou 'OPERATOR'
          };
          localStorage.setItem(this.USER_KEY, JSON.stringify(userInfo));
          this.currentUserSubject.next(userInfo);
        })
      );
  }

 register(data: RegisterRequest): Observable<any> {
     return this.http.post('/Auth/Register', data, {
       headers: { 'Content-Type': 'application/json' }
     });
 }

  logout(): void {
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.USER_KEY);
    this.currentUserSubject.next(null);
  }

  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  private setToken(token: string): void {
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  isGestor(): boolean {
    const user = this.currentUserSubject.getValue();
    return user?.role === 'GESTOR';
  }
}
