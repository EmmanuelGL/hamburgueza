import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BsDropdownModule } from "ngx-bootstrap/dropdown";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { TacosComponent } from './tacos/tacos.component';
import { FooterComponent } from './footer/footer.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ContactosComponent } from './contactos/contactos.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { HamburgesaComponent } from './hamburgesa/hamburgesa.component';
import { AlitasComponent } from './alitas/alitas.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    TacosComponent,
    FooterComponent,
    ContactosComponent,
    GaleriaComponent,
    HamburgesaComponent,
    AlitasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
