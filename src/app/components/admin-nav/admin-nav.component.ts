import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IRoute } from 'src/app/models/route';

@Component({
  selector: 'app-admin-nav',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './admin-nav.component.html',
  styles: [
  ]
})
export class AdminNavComponent {
  public routes:  Array<IRoute> = [
    {
      route: "./",
      content: "Productos"
    },
    {
      route: "users",
      content: "Usuarios"
    }
  ]
}
