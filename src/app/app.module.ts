import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AccordionsComponent } from './accordions/accordions.component';
import { DuplicateIdComponent } from './duplicate-id/duplicate-id.component';
import { CONST_ROUTING } from './app.routing';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    AccordionsComponent,
    DuplicateIdComponent
  ],
  imports: [
    BrowserModule,
    CONST_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
