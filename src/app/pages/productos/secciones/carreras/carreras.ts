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

    {
  id: 5,
  titulo: "MotoGP™25",
  categoria: "Carreras",
  descripcion: "¡Arranca los motores para la temporada 2025! Disfruta de MotoGP™ con un diseño de sonido muy cuidado y desafíos increíbles. Practica nuevas disciplinas Race Off y elige entre la experiencia Arcade o Pro para diversión o realismo. " ,
  img: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3077390/header.jpg?t=1753692631",
  alt: "MotoGP™25",
  precio: 59.99,
  fecha_lanzamiento: new Date("4-30-2025"),
},
{
  id: 6,
  titulo: "Need for Speed™ Most Wanted",
  categoria: "Carreras",
  descripcion: "La acción en mundo abierto de Need for Speed™ Most Wanted te da la libertad de conducir a tu manera. Salta, toma atajos, cambia de coche, ocúltate o dirígete a terrenos que aprovechen las virtudes de tu vehículo. " ,
  img: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1262560/header.jpg?t=1605151411",
  alt: "Need for Speed™ Most Wanted",
  precio: 19.99,
  fecha_lanzamiento: new Date("10-31-2012"),
},
{
  id: 7,
  titulo: "Assetto Corsa",
  categoria: "Carreras",
  descripcion: "Simulador de próxima generación de conducción  Assetto Corsa cuenta con motor gráfico DirectX 11, múltiples modos de carrera, fin de semana completo y gran realismo en la física del vehículo. " ,
  img: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/244210/header.jpg?t=1754985171",
  alt: "Assetto Corsa",
  precio: 29.99,
  fecha_lanzamiento: new Date("12-19-2014"),
},
{
  id: 8,
  titulo: "The Crew Motorfest",
  categoria: "Carreras",
  descripcion: "Sumérgete en un vibrante mundo abierto y disfruta de un programa dinámico de actividades con 600+ vehículos y más contenido mensual. " ,
  img: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2698940/cb36f7ee99fe8c842cc869dedebb294fc2407ace/header_alt_assets_0.jpg?t=1762361454",
  alt: "The Crew Motorfest",
  precio: 69.99,
  fecha_lanzamiento: new Date("4-18-2024"),
},
{
  id: 9,
  titulo: "Assetto Corsa Competizione",
  categoria: "Carreras",
  descripcion: "El juego oficial del GT World Challenge, con simulación realista, físicas detalladas, soporte VR y coches licenciados de alto nivel. " ,
  img: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/805550/header.jpg?t=1740392896",
  alt: "Assetto Corsa Competizione",
  precio: 39.99,
  fecha_lanzamiento: new Date("5-29-2019"),
},
{
  id: 10,
  titulo: "Forza Motorsport",
  categoria: "Carreras",
  descripcion: "Supera a tus rivales en el modo Carrera. Compite por el mundo en el multijugador. Compite con más de 500 coches en 27 circuitos famosos. ¡Ahora, con el emocionante Nürburgring Nordschleife! " ,
  img: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2440510/header.jpg?t=1747073895",
  alt: "Forza Motorsport",
  precio: 35.23,
  fecha_lanzamiento: new Date("10-10-2023"),
},
{
  id: 11,
  titulo: "DiRT Rally 2.0",
  categoria: "Carreras",
  descripcion: "Prepárate para el rally definitivo: terrenos variados, coches de élite y condiciones extremas en un desafío de conducción serio para los amantes del automovilismo. " ,
  img: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/690790/header.jpg?t=1730918452",
  alt: "DiRT Rally 2.0",
  precio: 19.99,
  fecha_lanzamiento: new Date("2-26-2019"),
},
{
  id: 12,
  titulo: "Assetto Corsa EVO",
  categoria: "Carreras",
  descripcion: "Assetto Corsa EVO redefine el realismo y las características de una de las sagas más populares de simulación de conducción, con nuevos vehículos y pistas históricas. " ,
  img: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3058630/header.jpg?t=1761237680",
  alt: "Assetto Corsa EVO",
  precio: 49.99,
  fecha_lanzamiento: new Date("1-16-2025"),
}



  ]
}
}

