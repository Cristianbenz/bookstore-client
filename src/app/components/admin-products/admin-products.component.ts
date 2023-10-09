import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableModule } from "@angular/material/table"
import { Product } from 'src/app/models/product';
import { ProductFormComponent } from '../product-form/product-form.component';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@Component({
  selector: 'app-admin-products',
  standalone: true,
  imports: [CommonModule, MatTableModule, ProductFormComponent, MatDialogModule, MatDatepickerModule, MatNativeDateModule],
  templateUrl: './admin-products.component.html',
  styles: [
  ]
})
export class AdminProductsComponent {
  private _dialog: MatDialog = inject(MatDialog);
  public products: Array<Product> = [{
    title: "Yo, Robot",
    authors: ["Isaac Asimov"],
    cover: "https://www.penguinlibros.com/uy/1651349-thickbox_default/yo-robot.jpg",
    price: 650.00,
    stock: 20
  }];
  public columns: Array<string> = ["title", "stock", "price", "visibility"];

  openForm(prod: Product) {
    this._dialog.open(ProductFormComponent, {
      data: prod
    })
  }
}
