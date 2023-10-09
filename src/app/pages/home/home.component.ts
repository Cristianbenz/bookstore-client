import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductSectionComponent } from 'src/app/components/product-section/product-section.component';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ProductSectionComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public products: Array<Product> = [{
    title: "Yo, Robot",
    authors: ["Isaac Asimov"],
    cover: "https://www.penguinlibros.com/uy/1651349-thickbox_default/yo-robot.jpg",
    summary: 'un librito',
    price: 650.00,
    stock: 20
  }]
}
