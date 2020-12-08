import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-producto-detalles',
  templateUrl: './producto-detalles.component.html',
  styleUrls: ['./producto-detalles.component.scss']
})
export class ProductoDetallesComponent implements OnInit {

  producto: Producto = null;
  productoId: string = null;

  constructor(
    private productoService: ProductoService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getUrlParams();
  }

  getProductoById(): void {
    this.productoService.getProducto(this.productoId).subscribe((item) => {
      this.producto = {
        $key: item.payload.id,
        ...item.payload.data(),
      }
      console.log(item.payload.data());

    })
  }
  getUrlParams(): void {
    this.route.paramMap.subscribe((params) => {
      this.productoId = params.get('productoId');
      console.log('ID',params.get('productoId'))
      if(this.productoId){
        this.productoService.getProducto(this.productoId).subscribe((item) => {
          this.producto = {
            $key: item.payload.id,
            ...item.payload.data(),
          };  
        });
      }
    })
  }

  goBack(): void{
    this.location.back();
  }

}
