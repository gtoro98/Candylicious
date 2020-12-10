import { Bolsa } from './bolsa';

export interface Carrito {
    userId: string;
    bolsas: Bolsa[]
    montoTotal: number,
}
