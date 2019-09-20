import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-product-details',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {
  id = this.route.snapshot.params['id'];
  productData: any = {};

  constructor(public httpClient: HttpClient,
              public route: ActivatedRoute,
              public router: Router,
              public api: ApiService) { }

  ngOnInit() {
    this.api.getProduct(this.id).subscribe((data: {}) => {
      this.productData = data;
    });
  }


  // async submit(product) { }

  // async remove(product) {
  //   await this.httpClient.delete(`http://localhost:3000/products/${product.id}`).toPromise();
  //   this.router.navigateByUrl('/products');
  // }
  updateProduct() {
    if (window.confirm('Are you sure, you want to update?')) {
      this.api.updateProduct(this.id, this.productData).subscribe(data => {
        this.router.navigate(['/product-detail']);
      });
    }
  }

}
