import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './link/shop.component';
import { RouterModule } from '@angular/router';
import { ProductFormComponent } from './product-form/product-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

@NgModule({
  declarations: [

    ShopComponent,
    ProductFormComponent,
    AddProductComponent,
    EditProductComponent,
    ProductDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: ShopComponent,
        children: [

          {
            path: '',
            redirectTo: 'create-product',
            pathMatch: 'full'
          },
          {
            path: 'create-product',
            component: AddProductComponent
          },
          {
            path: 'edit-product/:id',
            component: EditProductComponent
          },
          {
            path: 'product-detail',
            component: ProductDetailComponent
          },

        ]
      }
    ])
  ]
})
export class ShopModule { }
