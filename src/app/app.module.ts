import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductService } from './product.service';
import { ProductsService } from './products.service';
import { ParticipantComponent } from './participant/participant.component';
import { ProjectsComponent } from './projects/projects.component';
import { ShoppingCardComponent } from './shopping-card/shopping-card.component';


@NgModule({
  declarations: [
    AppComponent,
    ParticipantComponent,
    ProjectsComponent,
    ShoppingCardComponent,


  ],
  imports: [BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule],
  providers: [

    ProductService,
    ProductsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
