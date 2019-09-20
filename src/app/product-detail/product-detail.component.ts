import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})

export class ProductDetailComponent implements OnInit {

  Product: any = [];

  constructor(
    public api: ApiService
  ) { }

  ngOnInit() {
    this.loadProducts();
  }

  // Get Products list
  loadProducts() {
    return this.api.getProducts().subscribe((data: {}) => {
      this.Product = data;
    });
  }

  // Delete Product
  deleteProduct(id) {
    if (window.confirm('Are you sure, you want to delete?')) {
      this.api.deleteProduct(id).subscribe(data => {
        this.loadProducts();
      });
    }
  }

}
