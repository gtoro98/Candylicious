import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminGuard } from './guards/admin.guard';
import { AuthGuard } from './guards/auth.guard';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { CreateProductComponent } from './pages/create-product/create-product.component';
import { EditarProductoComponent } from './pages/editar-producto/editar-producto.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { LoginComponent } from './pages/login/login.component';
import { ProductoDetallesComponent } from './pages/producto-detalles/producto-detalles.component';
import { SignupComponent } from './pages/signup/signup.component';
import { TiendaComponent } from './pages/tienda/tienda.component';
import { UserDetailsComponent } from './pages/user-details/user-details.component';
import { RecuContraComponent } from './pages/recu-contra/recu-contra.component';
import { CarritoComponent } from './pages/carrito/carrito.component';
import { ComprarComponent } from './pages/comprar/comprar.component';
import { Comprar2Component } from './pages/comprar2/comprar2.component';
import { Comprar3Component } from './pages/comprar3/comprar3.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'home',
    component: InicioComponent,
  },
  {
    path: 'about-us',
    component: AboutUsComponent,
  },
  {
    path: 'tienda',
    component: TiendaComponent,
  },
  {
    path: 'tienda',
    component: TiendaComponent,
  },
  {
    path: 'contacto',
    component: ContactoComponent,
  },
  {
    path: 'create-product',
    canActivate: [AuthGuard, AdminGuard],
    component: CreateProductComponent,
  },
  {
    path: 'producto/:productoId/editar',
    canActivate: [AuthGuard, AdminGuard],
    component: EditarProductoComponent,
  },
  {
    path: 'producto/:productoId/detalles',
    component: ProductoDetallesComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'user-details/:userId',
    canActivate: [AuthGuard],
    component: UserDetailsComponent,
  },
  {
    path: 'contrasena',
    component: RecuContraComponent,
  },
  {
    path: 'carrito/:userId',
    canActivate: [AuthGuard],
    component: CarritoComponent,
  },
  {
    path: 'comprar',
    component: ComprarComponent,
  },
  {
    path: 'comprar2',
    component: Comprar2Component,
  },
  {
    path: 'comprar3',
    component: Comprar3Component,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
