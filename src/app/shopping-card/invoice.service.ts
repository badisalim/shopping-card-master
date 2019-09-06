import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../products-container/products-container.component';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

export interface Product {

    id: number;
    name: string;
    quantity: number;
    price: number;

}

@Injectable({
    providedIn: 'root'
})
export class ProductsService {
    // host = 'https://my-json-server.typicode.com/badisalim/shopping-card/data';
    host = 'https://localhost:3000/products';
    constructor(private httpClient: HttpClient, private productService: ProductsService, private router: Router) { }

    getProducts(): Observable<Product[]> {

        return this.httpClient.get<Product[]>(this.host);
    }
    getProduct(id: number): Observable<Product> {
        return this.httpClient.get<Product>('${this.host}/${id}');
    }


    addItem(product: Product) {

        return this.httpClient.post(this.host, product).subscribe(data => console.log(data));
    }
    addProduct(product: Product) {
        console.log('1234', product);
        return this.httpClient.post(this.host, product).subscribe(data => console.log(data));
    }
    editProduct(product: Product) {
        return this.httpClient.put(this.host, product);

    }
    deleteProduct(id: number) {
        return this.httpClient.delete<Product>('${this.host}/${id}');

    }

}
