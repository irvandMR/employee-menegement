import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticated: boolean = false;

  constructor() {}

  login(body: any): boolean {
    if (body?.username === 'user' && body?.password === 'password') {
      this.isAuthenticated = true;
      localStorage.setItem('auth', 'true');
      return true;
    } else {
    }
    return false;
  }

  logout(): void {
    this.isAuthenticated = false;
    localStorage.removeItem('auth');
  }

  isAuthenticatedUser(): boolean {
    return this.isAuthenticated;
  }
}
