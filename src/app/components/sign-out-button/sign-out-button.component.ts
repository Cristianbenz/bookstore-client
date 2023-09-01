import { Component, inject } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-sign-out-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sign-out-button.component.html',
  styles: [
  ]
})
export class SignOutButtonComponent {
  private auth = inject(AuthService)
  private doc = inject(DOCUMENT)
  signOut() {
    this.auth.logout({
      logoutParams: {
        returnTo: this.doc.location.origin
      }
    })
  }
}
