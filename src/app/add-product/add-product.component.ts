import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  @Input() productDetails = { name: '', quantity: 0, price: 0 };


  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private api: ApiService) { }

  ngOnInit() { }

  // async submit(product: Product) {
  //   await this.httpClient.post('http://localhost:3000/products', product).toPromise();
  //   this.router.navigateByUrl('/products');
  // }
  addProduct(dataProduct) {
    this.api.createProduct(this.productDetails).subscribe((data: {}) => {
      this.router.navigate(['/product-detail']);
    });
  }

}
