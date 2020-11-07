import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TiendaComponent } from './pages/tienda/tienda.component';
import { ContactoComponent } from './pages/contacto/contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TiendaComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
