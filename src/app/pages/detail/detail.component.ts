import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent {
  public product: Product = {
    id: 89237,
    title: "Yo, Robot",
    authors: ["Isaac Asimov"],
    cover: "https://www.penguinlibros.com/uy/1651349-thickbox_default/yo-robot.jpg",
    summary: 'un librito',
    price: 650.00,
    stock: 20
  }
}
