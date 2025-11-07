export interface Videojuegos {
    id: number;
    titulo: string;
    categoria: string;
    descripcion: string;
    img: string;
    alt: string;
    precio: number;
    enOferta?: boolean;
    precioOferta?: number;
    fecha_lanzamiento: Date;
}
