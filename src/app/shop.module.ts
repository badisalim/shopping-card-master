import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop/shop.component';
import { RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ProductsContainerComponent } from './products-container/products-container.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';

@NgModule({
  declarations: [

    ShopComponent,
    ProductsComponent,
    ProductsContainerComponent,
    ProductFormComponent,
    AddProductComponent,
    EditProductComponent,
    UpdateProductComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: ShopComponent,
        children: [

          {
            path: 'products',
            component: ProductsContainerComponent
          },
          {
            path: 'add-product',
            component: AddProductComponent
          },
          {
            path: 'edit-product/:id',
            component: EditProductComponent
          },
          {
            path: 'update-product/:id',
            component: UpdateProductComponent
          },

        ]
      }
    ])
  ]
})
export class ShopModule { }
