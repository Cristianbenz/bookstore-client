import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IRoute } from 'src/app/models/route';

@Component({
  selector: 'app-profile-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './profile-navbar.component.html',
  styles: [
  ]
})
export class ProfileNavbarComponent {
  public routes: Array<IRoute> = [
    {
      route: "./",
      content: "Perfil"
    },
    {
      route: "history",
      content: "Compras"
    }
  ]
}
