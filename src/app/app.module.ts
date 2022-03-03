import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localFr from '@angular/common/locales/fr';
registerLocaleData(localFr);

import { SortByDatePipe } from './pipes/product.pipe';

import { AppComponent } from './app.component';
import { ProductCardComponent } from './product-card/product-card.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductCardComponent,
    SortByDatePipe
  ],
  exports: [
    SortByDatePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'fr-FR'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
