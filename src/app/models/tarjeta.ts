export interface Tarjeta {
    id: string | number;
    titulo: string;
    descripcion: string;
    precio: number;
    enOferta: boolean,
    precioOferta: number;
    categoria: string;
    img?: string;
    alt?: string;
} 