import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TiendaComponent } from './pages/tienda/tienda.component';
import { ContactoComponent } from './pages/contacto/contacto.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { environment } from 'src/environments/environment';
import { from } from 'rxjs';
import { CreateProductComponent } from './pages/create-product/create-product.component';
import { ButtonComponent } from './components/button/button.component';
import { ProductoFormComponent } from './components/producto-form/producto-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditarProductoComponent } from './pages/editar-producto/editar-producto.component';
import { ProductoCardComponent } from './components/producto-card/producto-card.component';
import { LoginComponent } from './pages/login/login.component';
import { ProductoDetallesComponent } from './pages/producto-detalles/producto-detalles.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TiendaComponent,
    ContactoComponent,
    CreateProductComponent,
    ButtonComponent,
    ProductoFormComponent,
    EditarProductoComponent,
    ProductoCardComponent,
    LoginComponent,
    ProductoDetallesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
  

    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
