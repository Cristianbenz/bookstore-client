import { Component, Inject, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {
  MatCheckboxChange,
  MatCheckboxModule,
} from '@angular/material/checkbox';
import { MatSelectChange, MatSelectModule } from '@angular/material/select';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSelectModule,
  ],
  templateUrl: './product-form.component.html',
  styles: [],
})
export class ProductFormComponent {
  @Inject(MAT_DIALOG_DATA) product!: Product
  private _dialogRef: MatDialogRef<ProductFormComponent> = inject(
    MatDialogRef<ProductFormComponent>
  );
  private _formBuilder: FormBuilder = inject(FormBuilder);
  discount = false;
  public productForm = this._formBuilder.group({
    title: [this.product.title ?? ''],
    description: [this.product.title ?? ''],
    stock: [this.product.title ?? 0],
    price: [this.product.title ?? 0],
    visibility: [this.product.title ?? 'enabled']
  });

  onDiscountCheckbox(event: MatCheckboxChange) {
    if (event.checked) this.discount = true;
    else this.discount = false;
  }
}
