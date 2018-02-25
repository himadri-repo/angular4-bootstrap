import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductListModule } from './products/product-list.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, ProductListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
