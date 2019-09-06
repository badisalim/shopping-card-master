import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Product } from '../products-container/products-container.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
  @Input() product: Product;
  @Output() save = new EventEmitter<Product>();
  formGroup: FormGroup;
  form: any;
  routerNavigateByUrl: any;
  productsService: any;
  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      id: [],
      name: [''],
      quantity: [],
      price: []
    });
    this.formGroup.patchValue(this.product);
  }

  async submit() {
    if (this.formGroup.valid) {
      console.log(this.formGroup.value);
      this.save.emit(this.formGroup.value);
      await this.productsService.addItem(this.formGroup.value).toPromise();
      
      this.router.navigateByUrl('/products');

    }
  }
}
