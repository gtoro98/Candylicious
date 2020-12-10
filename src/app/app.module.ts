import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TiendaComponent } from './pages/tienda/tienda.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { InicioComponent } from './pages/inicio/inicio.component';

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
import { UserDetailsComponent } from './pages/user-details/user-details.component';
import { SignupComponent } from './pages/signup/signup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RecuContraComponent } from './pages/recu-contra/recu-contra.component';
import { PerfilComponent } from './pages/perfil/perfil.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TiendaComponent,
    ContactoComponent,
    InicioComponent,
    CreateProductComponent,
    ButtonComponent,
    ProductoFormComponent,
    EditarProductoComponent,
    ProductoCardComponent,
    LoginComponent,
    ProductoDetallesComponent,
    UserDetailsComponent,
    SignupComponent,
    RecuContraComponent,
    PerfilComponent
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
    BrowserAnimationsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
