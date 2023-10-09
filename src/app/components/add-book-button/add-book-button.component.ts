import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { ProductFormComponent } from '../product-form/product-form.component';

@Component({
  selector: 'app-add-book-button',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatDialogModule, ProductFormComponent],
  templateUrl: './add-book-button.component.html',
  styles: [
  ]
})
export class AddBookButtonComponent {
  private _dialog: MatDialog = inject(MatDialog);

  open() {
    this._dialog.open(ProductFormComponent);
  }
}
