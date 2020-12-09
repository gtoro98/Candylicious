import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'firebase';
import { Producto } from 'src/app/models/producto';
import { UserDetails } from 'src/app/models/user-details';
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
  user: UserDetails = null;

  navBarOpen = false;

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
      this.user = JSON.parse(localStorage.getItem('user'));
      return;
    }
    this.isAuthenticated = false;
    this.user = null;
  });
}

openNav() {

  if(this.navBarOpen === false){
    document.getElementById("mySidebar").style.width = "25em";
    document.getElementById("main").style.marginLeft = "25em";
    console.log("Abriendo...")
    this.navBarOpen = true;
  }
  else{
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    console.log("Cerrando...")
    this.navBarOpen = false;
  }
 
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
closeNav() {
 
}
   
}
