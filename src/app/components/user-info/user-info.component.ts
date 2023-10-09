import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventoryComponent } from '../inventory/inventory.component';

@Component({
  selector: 'app-user-info',
  standalone: true,
  imports: [CommonModule, InventoryComponent],
  templateUrl: './user-info.component.html',
  styles: [
  ]
})
export class UserInfoComponent {
  public user = {
    username: "user1",
    email: "john@gmail.com",
    firstName: "John",
    lastName: "Doe",
    avatar: "https://muytecnologicos.com/wp-content/uploads/2023/04/Autenticacion-de-usuario.png",
    status: 1
  }
}
