import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'firebase';
import { Bolsa } from 'src/app/models/bolsa';
import { Carrito } from 'src/app/models/carrito';
import { Mensaje } from 'src/app/models/mensaje';
import { Producto } from 'src/app/models/producto';
import { UserDetails } from 'src/app/models/user-details';
import { AuthService } from 'src/app/services/auth.service';
import { CarritoService } from 'src/app/services/carrito.service';
import { MensajeService } from 'src/app/services/mensaje.service';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.scss']
})
export class TiendaComponent implements OnInit {

  productos: Array<Producto> = [];
  mensajes: Array<Mensaje> = [];
  producto: Producto = null;
  productoId: string = null;
  label = "Agregar";

  isAuthenticated = false;
  user: UserDetails = null;
  carrito: Carrito = null;

  navBarOpen = false;

  constructor( 
    private productoService: ProductoService, 
    private mensajeService: MensajeService,
    private router: Router,
    private authService: AuthService,
    private carritoService: CarritoService,
    ) { }

  ngOnInit(): void {
    this.getCurrentUser();
    this.getAllProductos();
    this.getAllMensajes();
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
getAllMensajes(): void {
  this.mensajeService.getAllMensajes().subscribe((items) => {
    this.mensajes = items.map(
      (item) => ({
        ...item.payload.doc.data(),
        $key: item.payload.doc.id,
      }as Mensaje)
    );
 
  });
}

  functioncall(e: MouseEvent) {
    this.router.navigateByUrl('/create-product');
}
getCurrentUser(): void{
  this.authService.getCurrentUser().subscribe(async (response) => {
    if(response){
      this.isAuthenticated = true;
      this.user = JSON.parse(localStorage.getItem('user'));
      await this.carritoService.getCarrito(this.user.userId).get().then(response => {
        localStorage.setItem('carrito', JSON.stringify(response.docs[0].data()))
        this.carrito = JSON.parse(localStorage.getItem('carrito'))
        console.log(this.carrito.bolsas)
      });
    }
    else{
      this.isAuthenticated = false;
      this.user = null;
    }
    }
    )
   
    
  ;
}

async escogerBolsa(){
  console.log(document.getElementById("select_bolsa").textContent)
  if(document.getElementById("select_bolsa").textContent == "Nueva Bolsa"){

    const nuevaBolsa: Bolsa = {
      clienteId: this.user.userId,
      productos: {
        producto: this.producto,
        cantidad: 1
      }
    }
    this.carritoService.agregarBolsa(nuevaBolsa, this.carrito)
    await this.carritoService.getCarrito(this.user.userId).get().then(response => {
      localStorage.setItem('carrito', JSON.stringify(response.docs[0].data()))
      this.carrito = JSON.parse(localStorage.getItem('carrito'))
      console.log(this.carrito.bolsas)
    });
  }
  
  
}

getProductoById(): void {
  this.productoService.getProducto(this.productoId).subscribe((item) => {
    this.producto = {
      $key: item.payload.id,
      ...item.payload.data(),
    }


  })
}

agregarProducto(productoId: string){
  this.productoId = productoId
  this.getProductoById()
  console.log(productoId)
  document.getElementById("popUp").style.display = "initial"
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
