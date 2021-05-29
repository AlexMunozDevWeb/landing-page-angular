import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { Seccion1Component } from './main/seccion1/seccion1.component';
import { Seccion2Component } from './main/seccion2/seccion2.component';
import { Seccion3Component } from './main/seccion3/seccion3.component';
import { Seccion4Component } from './main/seccion4/seccion4.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    Seccion1Component,
    Seccion2Component,
    Seccion3Component,
    Seccion4Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
