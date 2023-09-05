import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableModule } from "@angular/material/table"
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-admin-products',
  standalone: true,
  imports: [CommonModule, MatTableModule],
  templateUrl: './admin-products.component.html',
  styles: [
  ]
})
export class AdminProductsComponent {
  public products: Array<Product> = [{
    title: "Yo, Robot",
    authors: ["Isaac Asimov"],
    cover: "https://www.penguinlibros.com/uy/1651349-thickbox_default/yo-robot.jpg",
    price: 650.00,
    stock: 20
  }];
  public columns: Array<string> = ["title", "stock", "price", "visibility"];
}
