import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
// import { ShopComponent } from './shop/shop/shop.component';
import { ShoppingCardComponent } from './shopping-card/shopping-card.component';
// import { EditProductComponent } from './edit-product/edit-product.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/projects',
    pathMatch: 'full'
  },

  {
    path: 'projects',
    component: ProjectsComponent
  },
  {
    path: 'shop',
    loadChildren: './shop.module#ShopModule'
  },
  {
    path: 'shopping-card',
    component: ShoppingCardComponent
  },
  // {
  //   path: 'edit-product/:id',
  //   component: EditProductComponent
  // },
  // {
  //   path: 'shop',
  //   component: ShopComponent
  // },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
