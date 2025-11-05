import { Component } from '@angular/core';
import { Videojuegos } from '../../../../models/videojuegos';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carreras',
  imports: [CommonModule],
  templateUrl: './carreras.html',
  styleUrl: './carreras.css',
})

export class Carreras {
public infoVideojuegos: Videojuegos[];

constructor() {
  this.infoVideojuegos = [
    {
    id: 1,
    titulo: "F1® 25",
    categoria: "Carreras",
    descripcion: "Deja tu huella en el mundo del automovilismo en F1® 25, el videojuego oficial del 2025 FIA Formula One World Championship™, con mejoras en el modo Mi Equipo, el emocionante tercer capítulo de Braking Point ¡y mucho más!",
    img: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3059520/37f833ca5bd3d5c3eec2b411131f3e00f580bbe7/header.jpg?t=1760633810",
    alt: "F1® 25",
    precio: 59.99,
    fecha_lanzamiento: new Date("5-30-2016"),
    },

    {
    id: 2,
    titulo: "Forza Horizon 5",
    categoria: "Carreras",
    descripcion: "Explora los coloridos paisajes del mundo abierto de México con una acción de conducción ilimitada y divertida en los mejores coches del mundo.",
    img: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1551360/header.jpg?t=1746471508",
    alt: "Forza Horizon 5",
    precio: 32.99,
    fecha_lanzamiento: new Date("11-9-2021"),
    },

    {
    id: 3,
    titulo: "EA SPORTS™ WRC",
    categoria: "Carreras",
    descripcion: "Disfruta de la emoción de la temporada 2024 de rally con nuevas ubicaciones, momentos, etapas, vehículos de máximo rendimiento, nuevos diseños y tripulaciones con licencia. ¡Abróchate el cinturón y embárcate en este rally!",
    img: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1849250/header.jpg?t=1748913259",
    alt: "EA SPORTS™ WRC",
    precio: 32.99,
    fecha_lanzamiento: new Date("11-2-2023"),
    },

    {
    id: 4,
    titulo: "iRacing",
    categoria: "Carreras",
    descripcion: "Somos el juego de carreras de deportes de motor más importante del mundo. Una membresía de iRacing proporciona acceso a la forma más nueva de deporte motor: las carreras por internet. Las carreras por internet son una manera divertida, fácil y económica para que tanto los fanáticos de las carreras como los jugadores disfruten de la emoción de la pista desde la comodidad de su hogar.",
    img: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/266410/header.jpg?t=1751293140",
    alt: "iRacing",
    precio: 34.99,
    fecha_lanzamiento: new Date("1-12-2015"),
    },


  ]
}
}

