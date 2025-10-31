import { Component } from '@angular/core';
import { Videojuegos } from '../../models/videojuegos';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-productos',
  imports: [CommonModule],
  templateUrl: './productos.html',
  styleUrl: './productos.css',
})
export class Productos {
public infoVideojuegos: Videojuegos[];

constructor() {
  this.infoVideojuegos = [
    {
    id: 1,
    titulo: "Kingdom Come: Deliverance II",
    categoria: "Mundo Abierto",
    descripcion: "Un emocionante RPG de acción con mucha narrativa y un exuberante mundo abierto situado en la Europa medieval del siglo XV. No te pierdas la aventura medieval definitiva donde vivirás un viaje de proporciones épicas de la mano del joven Henry.",
    img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1771300/0101ee56ada8a294071a8dbb36db44070cd6b50b/header_alt_assets_4.jpg?t=1761570094",
    alt: "Kingdom Come: Delivernace II",
    precio: 44.99,
    fecha_lanzamiento: new Date("4-2-2025"),
    },

    {
    id: 2,
    titulo: "Red Dead Redemption 2",
    categoria: "Mundo Abierto",
    descripcion: "Arthur Morgan y la banda de Van der Linde se ven obligados a huir. Con agentes federales y cazarrecompensas pisándoles los talones, la banda deberá atracar, robar y luchar para sobrevivir en su camino por el escabroso territorio.",
    img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1174180/header.jpg?t=1759502961",
    alt: "Red Dead Redemption 2",
    precio: 99.99,
    fecha_lanzamiento: new Date("12-5-2019"),
    },

    {
    id: 3,
    titulo: "Grand Theft Auto V Enhanced",
    categoria: "Mundo Abierto",
    descripcion: "Disfruta de los superventas del entretenimiento Grand Theft Auto V y Grand Theft Auto Online, ahora mejorados para una nueva generación, con impresionantes gráficos, carga más rápida, audio 3D y mucho más, además de contenido exclusivo para los jugadores de GTA Online.",
    img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3240220/header.jpg?t=1753974947",
    alt: "Grand Theft Auto V Enhanced",
    precio: 44.99,
    fecha_lanzamiento: new Date("14-4-2015"),
    },

    {
    id: 4,
    titulo: "No Man's Sky",
    categoria: "Mundo Abierto",
    descripcion: "No Man's Sky es un juego de ciencia ficción sobre exploración y supervivencia en un universo infinito generado de forma procedimental.",
    img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/275850/9ecc87d1062c690c96adeebd33ed761c1bda842f/header_alt_assets_25.jpg?t=1761138171",
    alt: "No Man´s Sky",
    precio: 26.99,
    fecha_lanzamiento: new Date("8-12-2016"),
    },

  ]
}
}
