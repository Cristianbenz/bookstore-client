import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from "@angular/forms";

import { MatNativeDateModule } from '@angular/material/core';
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog"
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from "@angular/material/datepicker" 
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [  
    MatDatepickerModule,  
  ],
  templateUrl: './product-form.component.html',
  styles: [
  ]
})
export class ProductFormComponent {
  private _dialogRef: MatDialogRef<ProductFormComponent> = inject(MatDialogRef<ProductFormComponent>);
  private _data: Product = inject(MAT_DIALOG_DATA);
  private _formBuider: FormBuilder = inject(FormBuilder);
  public productForm = this._formBuider.group({
    title: [this._data?.title || '', Validators.required],
    price: [this._data?.price || 0, Validators.required],
    summary: [this._data?.summary || '', Validators.required],
    authors: [this._data?.authors || '', Validators.required],
    cover: [this._data?.cover || ''],
    stock: [this._data?.stock || 0, Validators.required]
  });

  public discount: boolean = false;

  coverChange(evt: any) {
    
  }

  discountChange(evt: any) {
    this.discount = evt.target.checked;
  }

  upload() {
    console.log(this.productForm.value)
    this._dialogRef.close()

    
  }

  now() {
    return new Date().toISOString().split("T")[0]
  }
}
