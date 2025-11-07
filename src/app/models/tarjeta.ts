export interface Tarjeta {
    id: string;
    titulo: string;
    descripcion: string;
    precio: number;
    enOferta: boolean,
    precioOferta: number;
    img?: string;
    alt?: string;
} 