import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthState } from '@auth0/auth0-angular';

import { SignInButtonComponent } from '../sign-in-button/sign-in-button.component';
import { SignOutButtonComponent } from '../sign-out-button/sign-out-button.component';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule, SignInButtonComponent, SignOutButtonComponent],
  templateUrl: './nav-bar.component.html',
  styles: [
  ]
})
export class NavBarComponent {
  public state = inject(AuthState)
}
