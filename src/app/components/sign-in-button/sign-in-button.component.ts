import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-sign-in-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sign-in-button.component.html',
  styles: [
  ]
})
export class SignInButtonComponent {
  private auth = inject(AuthService)
  signIn() {
    this.auth.loginWithRedirect()
  }
}
