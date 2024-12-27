import { Component } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';
import { User } from '../../../auth/interfaces/user.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout-page',
  standalone: false,

  templateUrl: './layout-page.component.html',
  styleUrl: './layout-page.component.scss',
})
export class LayoutPageComponent {
  constructor(
    private readonly authService: AuthService,
    private readonly router: Router
  ) {}

  get user(): User | undefined {
    return this.authService.currentUser;
  }

  sidebarItems = [
    { label: 'Listado', icon: 'label', url: './list' },
    { label: 'Añadir', icon: 'add', url: './new-hero' },
    { label: 'Buscar', icon: 'search', url: './search' },
  ];

  onLogout(): void {
    this.authService.logout();
    this.router.navigate(['/auth/login']);
  }
}
