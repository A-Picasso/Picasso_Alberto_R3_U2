import { Injectable } from '@angular/core';

interface User {
  name: string;
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private users: User[] = [];
  private currentUser: User | null = null;

  constructor() {
    this.users.push({
      name: 'Alberto Picasso',
      email: 'albertoPicasso@oldgames.com',
      password: 'uvegReto3'
    });
  }

  register(user: User): boolean {
    const exists = this.users.find(u => u.email === user.email);
    if (exists) {
      return false;
    }
    this.users.push(user);
    return true;
  }

  login(email: string, password: string): boolean {
    const user = this.users.find(u => u.email === email && u.password === password);
    if (user) {
      this.currentUser = user;
      return true;
    }
    return false;
  }

  logout() {
    this.currentUser = null;
  }

  isAuthenticated(): boolean {
    return this.currentUser !== null;
  }
}
