import { Component, Input, OnInit } from '@angular/core';
import { UrlSegment } from '@angular/router';
import { User } from 'firebase';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-producto-card',
  templateUrl: './producto-card.component.html',
  styleUrls: ['./producto-card.component.scss']
})
export class ProductoCardComponent implements OnInit {

  @Input() producto: Producto;
  @Input() user: User = null;
  @Input() isAuthenticated: boolean = false;

  constructor(private productoService: ProductoService) { }

  ngOnInit(): void {
    console.log(this.producto)
  }

  deleteProducto(productoId: string): void {
    this.productoService.deleteProducto(productoId).then((res) => {}).catch((err) => console.log(err))
  }

}
