import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, MatTableModule],
  templateUrl: './users.component.html',
  styles: [
  ]
})
export class UsersComponent {
  public users: Array<User> = [
    {
      username: "user1",
      email: "john@gmail.com",
      firstName: "John",
      lastName: "Doe",
      avatar: "https://muytecnologicos.com/wp-content/uploads/2023/04/Autenticacion-de-usuario.png",
      status: 1
    }
  ];
  public columns: Array<string> = ["name", "email", "status"];
}
