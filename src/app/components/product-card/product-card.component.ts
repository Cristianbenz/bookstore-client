import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styles: [
  ]
})
export class ProductCardComponent {
  @Input() product!: Product
}
