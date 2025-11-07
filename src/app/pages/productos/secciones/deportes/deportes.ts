import { Component } from '@angular/core';
import { Videojuegos } from '../../../../models/videojuegos';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-deportes',
  imports: [CommonModule],
  templateUrl: './deportes.html',
  styleUrl: './deportes.css',
})

export class Deportes {
public infoVideojuegos: Videojuegos[];

constructor() {
this.infoVideojuegos = [
    {
    id: 1,
    titulo: "EA SPORTS FC™ 26",
    categoria: "Deportes",
    descripcion: "El Club es tuyo en EA SPORTS FC™ 26. Juega a tu manera con una experiencia de juego renovada impulsada por los comentarios de la comunidad, Desafíos en vivo de Mánager que traen historias frescas a la nueva temporada y Arquetipos inspirados en los Grandes del deporte.",
    img: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3405690/2d96aa1b06e453cd62dae9029d412f19e61932c3/header.jpg?t=1761904811",
    alt: "EA SPORTS FC™ 26",
    precio: 69.99,
    fecha_lanzamiento: new Date("9-25-2025"),
    },

    {
    id: 2,
    titulo: "Football Manager 26",
    categoria: "Deportes",
    descripcion: "Toma las riendas del banquillo y vive el futuro de la gestión futbolística.",
    img: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3551340/7d28b9aa8dcfcd96593d112736f58b4b1d3cc7a4/header.jpg?t=1762339168",
    alt: "Football Manager 26",
    precio: 49.99,
    fecha_lanzamiento: new Date("11-4-2025"),
    },

    {
    id: 3,
    titulo: "NBA 2K26",
    categoria: "Deportes",
    descripcion: "El derecho a presumir está en juego en Mi CARRERA, MyTEAM, Mi NBA, La W y Jugar ya. Exhibe tu colección de movimientos con hiperrealismo, gracias a la tecnología ProPLAY™, y desafía a tus amigos, o rivales, en los modos competitivos de NBA 2K26, y leave no doubt: tú eres el rey.",
    img: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3472040/c3c09a28c455c275d05e6b8c763ff78626f7cdaf/header_alt_assets_0.jpg?t=1761580807",
    alt: "NBA 2K26",
    precio: 79.99,
    fecha_lanzamiento: new Date("9-5-2025"),
    },

    {
    id: 4,
    titulo: "WWE 2K25",
    categoria: "Deportes",
    descripcion: "Celebra The Bloodline en Showcase. Compite online en Mi GM. ¡El juego ampliado incluye lucha intergénero, lucha en cadena, saltos de barrera, el regreso de las Promociones y mucho más!",
    img: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2878960/header.jpg?t=1761227335",
    alt: "WWE 2K25",
    precio: 59.99,
    fecha_lanzamiento: new Date("3-13-2025"),
    },


  ]

}
}

