import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingCardComponent } from './shopping-card/shopping-card.component';
import { AddProductComponent } from './add-product/add-product.component';


const routes: Routes = [

  {
    path: 'shop',
    loadChildren: './shop.module#ShopModule'
  },
  {
    path: 'shopping-card',
    component: ShoppingCardComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
