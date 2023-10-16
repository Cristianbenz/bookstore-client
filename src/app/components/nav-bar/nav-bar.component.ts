import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthState } from '@auth0/auth0-angular';
import { RouterModule } from '@angular/router';

import { SignInButtonComponent } from '../sign-in-button/sign-in-button.component';
import { SignOutButtonComponent } from '../sign-out-button/sign-out-button.component';
import { IRoute } from 'src/app/models/route';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule, SignInButtonComponent, SignOutButtonComponent, RouterModule, CartComponent],
  templateUrl: './nav-bar.component.html',
  styles: [
  ]
})
export class NavBarComponent {
  public userState = inject(AuthState)

  public routes: Array<IRoute> = [
    {
      route: "home",
      content: "Inicio",
    },
    {
      route: "discounts",
      content: "Descuentos",
    },
    {
      route: "profile",
      content: "Perfil",
    }
  ]
}
