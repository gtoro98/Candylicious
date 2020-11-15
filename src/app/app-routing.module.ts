import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { CreateProductComponent } from './pages/create-product/create-product.component';
import { EditarProductoComponent } from './pages/editar-producto/editar-producto.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { LoginComponent } from './pages/login/login.component';
import { ProductoDetallesComponent } from './pages/producto-detalles/producto-detalles.component';
import { TiendaComponent } from './pages/tienda/tienda.component';

const routes: Routes = [
  {
    path: '',
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
    component: CreateProductComponent,
  },
  {
    path: 'producto/:productoId/editar',
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
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
