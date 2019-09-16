import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../products-container/products-container.component';
import { Router } from '@angular/router';
import { ProductsService } from './invoice.service';
import { ProductService } from './../product.service';
@Component({
  selector: 'app-shopping-card',
  templateUrl: './shopping-card.component.html',
  styleUrls: ['./shopping-card.component.scss']
})

export class ShoppingCardComponent implements OnInit {
  [x: string]: any;
  data: any;

  constructor(private httpClient: HttpClient, private productsService: ProductsService, private router: Router) { }


  ngOnInit() {
    this.httpClient.get('http://localhost:3000/products')
      .subscribe(data => {
        console.log(data);
        this.data = data;
      });
  }

  addItem() {

    this.data.push({ id: 1, name: '', quantity: 1, price: 1 });
    // CALL SERVICE
    this.productService.addItem({ id: 1, name: '', quantity: 1, price: 1 });
  }
  async submit(product: Product) {
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

}
