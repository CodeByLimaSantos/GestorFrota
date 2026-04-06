import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly STORAGE_KEY = 'drivecontrol-theme';

  get isDark(): boolean {
    const stored = localStorage.getItem(this.STORAGE_KEY);
    if (stored) return stored === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  setDark(value: boolean): void {
    localStorage.setItem(this.STORAGE_KEY, value ? 'dark' : 'light');
    this.apply(value);
  }

  toggle(): boolean {
    const next = !this.isDark;
    this.setDark(next);
    return next;
  }

  /** Apply theme on initial load (called from both app component and inline script) */
  static applyFromStorage(): boolean {
    const stored = localStorage.getItem('drivecontrol-theme');
    if (stored && stored === 'dark') {
      document.documentElement.classList.add('dark');
      return true;
    }
    if (!stored && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.classList.add('dark');
      return true;
    }
    document.documentElement.classList.remove('dark');
    return false;
  }

  private apply(dark: boolean): void {
    if (dark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }
}
