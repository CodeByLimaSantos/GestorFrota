import { HttpInterceptorFn, HttpErrorResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { catchError, throwError } from 'rxjs';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const token = authService.getToken();

  let authReq = req;
  if (token) {
    console.log('[AuthInterceptor] Token found, adding Authorization header');
    authReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
  } else {
    console.log('[AuthInterceptor] No token found for request:', req.url);
  }

  return next(authReq).pipe(
    catchError(error => {
      console.error('[AuthInterceptor] Error on', req.method, req.url, ':', error.status);
      return throwError(() => error);
    })
  );
};
