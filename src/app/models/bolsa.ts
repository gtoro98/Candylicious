import { ProductoDetallesComponent } from '../pages/producto-detalles/producto-detalles.component';
import { Producto } from './producto';

export interface Bolsa {
    clienteId: string,
    productos: {
        producto: Producto,
        cantidad: Number,
    }
}
