import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductCardComponent } from '../product-card/product-card.component';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-section',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './product-section.component.html',
  styles: [
  ]
})
export class ProductSectionComponent {
  @Input() title: string = "";
  @Input() products: Array<Product> = [];
}
