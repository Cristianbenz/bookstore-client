import { CUSTOM_ELEMENTS_SCHEMA, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductCardComponent } from '../product-card/product-card.component';
import { Product } from 'src/app/models/product';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-section',
  standalone: true,
  imports: [CommonModule, ProductCardComponent, RouterModule],
  templateUrl: './product-section.component.html',
  styleUrls: ['./product-section.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class ProductSectionComponent {
  @Input() title: string = "";
  @Input() products: Array<Product> = [];
}
