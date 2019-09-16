import { Injectable } from '@angular/core';

@Injectable()
export class ProductsService {

  constructor() { }
  products: string[] = [];
  getProductFromId(id: number) {
    throw new Error('Method not implemented.');
  }
  updateProduct(product: any) {
    throw new Error('Method not implemented.');
  }

  add(product: string) {
    this.products.push(product);
  }

  deleteAllProducts() {
    this.products = [];
  }

}
