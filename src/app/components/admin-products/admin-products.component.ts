import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from 'src/app/models/product';

import { MatTableModule } from '@angular/material/table';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { AddBookButtonComponent } from '../add-book-button/add-book-button.component';
import { ProductFormComponent } from '../product-form/product-form.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@Component({
  selector: 'app-admin-products',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    AddBookButtonComponent,
    MatDialogModule,
    ProductFormComponent,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  templateUrl: './admin-products.component.html',
  styles: [],
})
export class AdminProductsComponent {
  private _dialog: MatDialog = inject(MatDialog);
  public columns: Array<string> = ['title', 'stock', 'price', 'visibility'];

  public products: Array<Product> = [
    {
      title: 'Yo, Robot',
      authors: ['Isaac Asimov'],
      cover:
        'https://www.penguinlibros.com/uy/1651349-thickbox_default/yo-robot.jpg',
      summary: 'un librito',
      price: 650.0,
      stock: 20,
    },
  ];

  edit(product: Product) {
    this._dialog.open(ProductFormComponent, {
      data: product,
    });
  }
}
