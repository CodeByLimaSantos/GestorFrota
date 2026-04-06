import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export type ToastType = 'success' | 'error' | 'warning' | 'info';

export interface Toast {
  id: number;
  type: ToastType;
  title: string;
  message?: string;
  duration?: number;
}

let nextId = 1;

@Injectable({ providedIn: 'root' })
export class ToastService {
  private toastsSubject = new BehaviorSubject<Toast[]>([]);
  toasts$: Observable<Toast[]> = this.toastsSubject.asObservable();

  success(title: string, message?: string, duration = 4000): void {
    this.add({ type: 'success', title, message, duration });
  }

  error(title: string, message?: string, duration = 5000): void {
    this.add({ type: 'error', title, message, duration });
  }

  warning(title: string, message?: string, duration = 4000): void {
    this.add({ type: 'warning', title, message, duration });
  }

  info(title: string, message?: string, duration = 3000): void {
    this.add({ type: 'info', title, message, duration });
  }

  dismiss(id: number): void {
    this.set(this.get().filter(t => t.id !== id));
  }

  clear(): void {
    this.set([]);
  }

  private add(toast: Omit<Toast, 'id'>): void {
    const newToast: Toast = { ...toast, id: nextId++ };
    this.set([...this.get(), newToast]);
    const d = toast.duration ?? 4000;
    if (d > 0) {
      setTimeout(() => this.dismiss(newToast.id), d);
    }
  }

  private set(toasts: Toast[]): void {
    this.toastsSubject.next(toasts);
  }

  private get(): Toast[] {
    return this.toastsSubject.getValue();
  }
}
