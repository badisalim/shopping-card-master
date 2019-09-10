import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../products-container/products-container.component';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.scss']
})
export class UpdateProductComponent implements OnInit {

  product$: Observable<Product>;
  data: any;
  productService: any;
  dialogRef: any;
  dataService: any;
  constructor(private httpClient: HttpClient, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    const id = this.route.snapshot.params.id;
    this.product$ = this.httpClient.get<Product>(`http://localhost:3000/products/${id}`);
  }

  async submit(product) { }

  async remove(product) {
    await this.httpClient.delete(`http://localhost:3000/products/${product.id}`).toPromise();
    this.router.navigateByUrl('/products');
  }

  editItem() {

    this.data.push({ name: '', quantity: 1, price: 1 });
    // CALL SERVICE
    this.productService.addItem({ name: '', quantity: 1, price: 1 });
  }

  onNoClick(): void {
    this.productService.close();
  }

  stopEdit(): void {
    this.productService.updateProduct(this.data);
  }
  updateItem(product: Product): void {
    this.productService.updateProduct({ name: '', quantity: 1, price: 1 });
  }
  async update(product: Product) {
    await this.httpClient.put('http://localhost:3000/products', product).toPromise();
    this.router.navigateByUrl('/products');
  }
}













//   productObj: { 'name': any; 'quantity': any; 'price': any; };
//   id: any;
//   headers: any;
//   products: Promise<any>;
//   exist: boolean;
//   data: any;
//   constructor(private router: Router, private route: ActivatedRoute, private httpClient: HttpClient) { }
//   updateProduct(product) {
//     this.productObj = {
//       name: product.name,
//       quantity: product.quantity,
//       price: product.price
//     };
//     const url = `${'http://localhost:3000/products'}/${this.id}`;
//     this.httpClient.put(url, JSON.stringify(this.productObj), { headers: this.headers })
//       .toPromise()
//       .then(() => {
//         this.router.navigate(['/']);
//       });
//   }

//   ngOnInit() { }

//   async submit(product: Product) {
//     await this.httpClient.post('http://localhost:3000/products', product).toPromise();
//     this.router.navigateByUrl('/products');
//   }

//   async update(product: Product) {
//     await this.httpClient.put('http://localhost:3000/products', product).toPromise();
//     this.router.navigateByUrl('/products');
//   }
// }
