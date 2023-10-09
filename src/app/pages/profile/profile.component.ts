import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ProfileNavbarComponent } from 'src/app/components/profile-navbar/profile-navbar.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, RouterModule, ProfileNavbarComponent],
  templateUrl: './profile.component.html',
  styles: [
  ]
})
export class ProfileComponent {

}
