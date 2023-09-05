import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatSidenavModule} from '@angular/material/sidenav';

import { AdminNavComponent } from 'src/app/components/admin-nav/admin-nav.component';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, MatSidenavModule, RouterModule, AdminNavComponent],
  templateUrl: './admin.component.html',
  styles: [
  ]
})
export class AdminComponent {

}
