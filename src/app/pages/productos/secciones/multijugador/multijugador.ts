import { Component } from '@angular/core';
import { Videojuegos } from '../../../../models/videojuegos';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-multijugador',
  imports: [CommonModule],
  templateUrl: './multijugador.html',
  styleUrl: './multijugador.css',
})
export class Multijugador {
  public infoVideojuegos: Videojuegos[];

  constructor() {
    this.infoVideojuegos = [
      {
        id: 1,
        titulo: "HELLDIVERS™ 2",
        categoria: "Multijugador",
        descripcion: "En HELLDIVERS™ 2 formas equipo con hasta cuatro jugadores para realizar misiones cooperativas a gran escala por la galaxia. El fuego amigo es constante, la cooperación obligatoria y la diversión explosiva.",
        img: "https://store.steampowered.com/app/553850/header.jpg",
        alt: "HELLDIVERS™ 2",
        precio: 39.99,
        fecha_lanzamiento: new Date("2-8-2024"),
      },
      {
        id: 2,
        titulo: "Rocket League",
        categoria: "Multijugador",
        descripcion: "Rocket League combina coches acrobáticos y fútbol en partidas online llenas de intensidad. Rápido de aprender, difícil de dominar, ideal para jugar con amigos o competir en línea.",
        img: "https://store.steampowered.com/app/252950/header.jpg",
        alt: "Rocket League",
        precio: 19.99,
        fecha_lanzamiento: new Date("7-7-2015"),
      },
      {
        id: 3,
        titulo: "Deep Rock Galactic",
        categoria: "Multijugador",
        descripcion: "Deep Rock Galactic te pone en la piel de un enano espacial que, junto a otros jugadores, explora minas alienígenas, enfrenta hordas y extrae recursos. Co-op puro para disfrutar con amigos.",
        img: "https://store.steampowered.com/app/548430/header.jpg",
        alt: "Deep Rock Galactic",
        precio: 29.99,
        fecha_lanzamiento: new Date("5-13-2020"),
      },
      {
        id: 4,
        titulo: "For Honor",
        categoria: "Multijugador",
        descripcion: "For Honor es un juego de combate cuerpo a cuerpo online donde caballeros, vikingos y samuráis se enfrentan en duelos y modos multijugador por equipos. Estrategia, habilidad y ritmo intenso.",
        img: "https://store.steampowered.com/app/304390/header.jpg",
        alt: "For Honor",
        precio: 39.99,
        fecha_lanzamiento: new Date("2-14-2017"),
      },
      {
        id: 5,
        titulo: "Squad",
        categoria: "Multijugador",
        descripcion: "Squad es un shooter táctico moderno donde grandes equipos cooperan, comunican y coordinan estrategias para vencer. Ideal para quienes buscan multijugador serio y realista.",
        img: "https://store.steampowered.com/app/393380/header.jpg",
        alt: "Squad",
        precio: 39.99,
        fecha_lanzamiento: new Date("9-23-2020"),
      },
      {
        id: 6,
        titulo: "The Forest",
        categoria: "Multijugador",
        descripcion: "The Forest es un juego de supervivencia donde puedes jugar en modo cooperativo: después de un accidente aéreo, exploras, construyes refugio, enfrentas caníbales y sobrevives con amigos.",
        img: "https://store.steampowered.com/app/242760/header.jpg",
        alt: "The Forest",
        precio: 14.99,
        fecha_lanzamiento: new Date("4-30-2018"),
      },
      {
        id: 7,
        titulo: "Payday 2",
        categoria: "Multijugador",
        descripcion: "En Payday 2, tú y tu equipo planean robos, ejecutan atracos, coordinan roles y afrontan la respuesta policial. Juego cooperativo multijugador centrado en la experiencia en equipo.",
        img: "https://store.steampowered.com/app/218620/header.jpg",
        alt: "Payday 2",
        precio: 9.99,
        fecha_lanzamiento: new Date("8-13-2013"),
      },
      {
        id: 8,
        titulo: "Sea of Thieves",
        categoria: "Multijugador",
        descripcion: "Sea of Thieves te convierte en pirata en un mundo compartido: navega, busca tesoros, combate otros jugadores y vive aventuras con amigos en alta mar. Cooperativo y competitivo a la vez.",
        img: "https://store.steampowered.com/app/1172620/header.jpg",
        alt: "Sea of Thieves",
        precio: 39.99,
        fecha_lanzamiento: new Date("6-3-2020"),
      },
      {
        id: 9,
        titulo: "Left 4 Dead 2",
        categoria: "Multijugador",
        descripcion: "Left 4 Dead 2 es un clásico shooter cooperativo donde hasta cuatro jugadores se enfrentan a hordas de zombis, con modos versus y campañas. Diversión rápida y en equipo.",
        img: "https://store.steampowered.com/app/550/header.jpg",
        alt: "Left 4 Dead 2",
        precio: 19.99,
        fecha_lanzamiento: new Date("11-17-2009"),
      },
      {
        id: 10,
        titulo: "Rust",
        categoria: "Multijugador",
        descripcion: "Rust es un juego de supervivencia multijugador online donde construyes, luchas, formas alianzas o traicionas. Muy popular entre jugadores que buscan interacción social intensa.",
        img: "https://store.steampowered.com/app/252490/header.jpg",
        alt: "Rust",
        precio: 39.99,
        fecha_lanzamiento: new Date("12-11-2013"),
      },
      {
        id: 11,
        titulo: "Borderlands 3",
        categoria: "Multijugador",
        descripcion: "Borderlands 3 ofrece campaña cooperativa online, múltiples jugadores, acción frenética y armas locas. Ideal para jugar con amigos y combinar disparos y humor en el mundo abierto.",
        img: "https://store.steampowered.com/app/943640/header.jpg",
        alt: "Borderlands 3",
        precio: 59.99,
        fecha_lanzamiento: new Date("9-13-2019"),
      },
      {
        id: 12,
        titulo: "Monster Hunter: World",
        categoria: "Multijugador",
        descripcion: "Monster Hunter: World es un juego cooperativo de acción donde cazas monstruos enormes, mejoras equipo y colaboras con otros cazadores en línea para desafíos épicos.",
        img: "https://store.steampowered.com/app/582010/header.jpg",
        alt: "Monster Hunter: World",
        precio: 39.99,
        fecha_lanzamiento: new Date("8-9-2018"),
      },


    ]

  }
}
