import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  constructor(private authService: AuthService, private router: Router) {}

  navigateTo(route: string) {
    this.router.navigate([route]);
  }

  logout() {
    console.log('Logging out...');
    this.authService.logout();
    this.router.navigate(['/auth/login']);
  }
}
