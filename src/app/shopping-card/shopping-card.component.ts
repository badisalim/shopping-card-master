import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Product } from '../products-container/products-container.component';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { Router } from '@angular/router';
import { ProductsService } from './invoice.service';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-shopping-card',
  templateUrl: './shopping-card.component.html',
  styleUrls: ['./shopping-card.component.scss']
})

export class ShoppingCardComponent implements OnInit {
  [x: string]: any;
  data: any;

  constructor(private httpClient: HttpClient,
    private productsService: ProductsService,
    private router: Router,
    private api: ApiService) { }


  ngOnInit() {
    this.httpClient.get('http://localhost:3000/products')
      .subscribe(data => {
        console.log(data);
        this.data = data;
        this.http.get('app/files/1.txt').subscribe(data => {
          console.log(data.text());
        })
      });
  }

  addItem() {

    this.data.push({ id: 1, name: '', quantity: 1, price: 1 });
    // CALL SERVICE
    this.ApiService.addItem({ id: 1, name: '', quantity: 1, price: 1 });
  }
  async submit(product: ProductDetailComponent) {
    await this.httpClient.post('http://localhost:3000/products', product).toPromise();
    this.router.navigateByUrl('products');
  }


  total() {
    const productsTotal = this.data.map(product => product.quantity * product.price);
    return (this.data.length > 0) ? productsTotal.reduce((product1, product2) => product1 + product2) : 0;
  }

  removeItem(id) {
    console.log(this.data[id]);
    this.data.splice(id, 1);
  }

  deleteProduct(id) {
    if (window.confirm('Are you sure, you want to delete?')) {
      this.api.deleteProduct(id).subscribe(data => {
        this.loadProducts();
      });
    }
  }

}
