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
    canActivate: [!AuthGuard],
    component: SignupComponent,
  },
  {
    path: 'user-details/:userId',
    canActivate: [AuthGuard],
    component: UserDetailsComponent,
  },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
