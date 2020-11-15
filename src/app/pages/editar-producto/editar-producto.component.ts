import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.scss']
})
export class EditarProductoComponent implements OnInit {

  producto: Producto = null;
  productoId: string = null;

  constructor(
    private productoService: ProductoService,
    private route: ActivatedRoute) {

 
   }

  ngOnInit(): void {

  }

 
  getProductoById(): void {
    this.productoService.getProducto(this.productoId).subscribe((item) => {
      this.producto = {
        $key: item.payload.id,
        ...item.payload.data(),
      };

    })
  }

}
