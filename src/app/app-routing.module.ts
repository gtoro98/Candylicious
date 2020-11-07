import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { InicioComponent } from './pages/inicio/inicio.component';
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

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
