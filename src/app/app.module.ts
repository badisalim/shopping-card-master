import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiService } from './api.service';
import { ProductsService } from './products.service';
import { ShoppingCardComponent } from './shopping-card/shopping-card.component';


@NgModule({
  declarations: [
    AppComponent,
    ShoppingCardComponent,


  ],
  imports: [BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule],
  providers: [

    ApiService,
    ProductsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
