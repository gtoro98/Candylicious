import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'firebase';
import { Producto } from 'src/app/models/producto';
import { AuthService } from 'src/app/services/auth.service';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.scss']
})
export class TiendaComponent implements OnInit {

  productos: Array<Producto> = [];
  label = "Agregar";

  isAuthenticated = false;
  user: User = null;

  constructor( 
    private productoService: ProductoService, 
    private router: Router,
    private authService: AuthService,
    ) { }

  ngOnInit(): void {
    this.getCurrentUser();
    this.getAllProductos();
  }

  getAllProductos(): void {
    this.productoService.getAllProductos().subscribe((items) => {
      this.productos = items.map(
        (item) => ({
          ...item.payload.doc.data(),
          $key: item.payload.doc.id,
        }as Producto)
      );
      
    });
}

  functioncall(e: MouseEvent) {
    this.router.navigateByUrl('/create-product');
}
getCurrentUser(): void{
  this.authService.getCurrentUser().subscribe(response => {
    if(response){
      this.isAuthenticated = true;
      this.user = response;
      return;
    }
    this.isAuthenticated = false;
    this.user = null;
  });
}
   
}
