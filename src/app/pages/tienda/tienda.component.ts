import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.scss']
})
export class TiendaComponent implements OnInit {

  productos: Array<Producto> = [];
  label = "Agregar";

  constructor( private productoService: ProductoService, private router: Router) { }

  ngOnInit(): void {
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
   
}
