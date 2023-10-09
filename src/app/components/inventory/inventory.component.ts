import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-inventory',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './inventory.component.html',
  styles: [
  ]
})
export class InventoryComponent {
  public products: Array<Product> = [
    {
      title: "Yo, Robot",
      authors: ["Isaac Asimov"],
      cover: "https://www.penguinlibros.com/uy/1651349-thickbox_default/yo-robot.jpg",
      summary: 'un librito',
      price: 650.00,
      stock: 20
    },
    {
      title: "Yo, Robot",
      authors: ["Isaac Asimov"],
      cover: "https://www.penguinlibros.com/uy/1651349-thickbox_default/yo-robot.jpg",
      summary: 'un librito',
      price: 650.00,
      stock: 20
    }
  ]
}
