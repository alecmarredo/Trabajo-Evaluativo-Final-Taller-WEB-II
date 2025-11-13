import { Component } from '@angular/core';
import { Videojuegos } from '../../../../models/videojuegos';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-puzle',
  imports: [CommonModule],
  templateUrl: './puzle.html',
  styleUrl: './puzle.css',
})
export class Puzle {
  public infoVideojuegos: Videojuegos[];

  constructor() {
    this.infoVideojuegos = [
      {
        id: 1,
        titulo: "Portal 2",
        categoria: "Puzle",
        descripcion: "En Portal 2 usarás la pistola de portales para atravesar cámaras de pruebas ideadas por la IA GLaDOS. Ingenio, humor oscuro y mecánicas de teletransporte redefinen el género de puzzles en primera persona.",
        img: "https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_1240/b_white/f_auto/q_auto/ncom/software/switch/70010000050313/75484f73fedd25cb830c5d93fbb3fca643a5ec0b09df2815291ead880bc7d6b1",
        alt: "Portal 2",
        precio: 19.99,
        fecha_lanzamiento: new Date("4-19-2011"),
      },
      {
        id: 2,
        titulo: "The Talos Principle",
        categoria: "Puzle",
        descripcion: "The Talos Principle es un juego de puzles filosófico en primera persona: explora ruinas antiguas, resuelve acertijos que involucran rayos láser, bloques y tiempo, mientras reflexionas sobre la conciencia y lo que significa ser humano.",
        img: "https://tse3.mm.bing.net/th/id/OIP.Mplu8lEIwAbcezz_QJTyuAHaEK?cb=ucfimgc2&rs=1&pid=ImgDetMain&o=7&rm=3",
        alt: "The Talos Principle",
        precio: 29.99,
        fecha_lanzamiento: new Date("01-11-2014"),
      },
      {
        id: 3,
        titulo: "Baba Is You",
        categoria: "Puzle",
        descripcion: "Baba Is You es un juego ingenioso en el que las reglas mismas del nivel son bloques que puedes mover y cambiar: conviértete en roca, cambia la meta o el propio objetivo para resolver cada nivel.",
        img: "https://th.bing.com/th/id/R.9d34b8e71bcb126a711b064d243cf687?rik=IBKqlDP5n0Q9IA&pid=ImgRaw&r=0",
        alt: "Baba Is You",
        precio: 14.99,
        fecha_lanzamiento: new Date("3-13-2019"),
      },
      {
        id: 4,
        titulo: "Antichamber",
        categoria: "Puzle",
        descripcion: "Antichamber te sumerge en un espacio laberíntico imposible donde la geometría desafía la lógica: pasillos que cambian, objetos que se comportan sin seguir la física habitual y acertijos que rompen tus expectativas.",
        img: "https://tse2.mm.bing.net/th/id/OIP.nh4GjbthMHOCYOhICQBHFQHaEK?cb=ucfimgc2&rs=1&pid=ImgDetMain&o=7&rm=3",
        alt: "Antichamber",
        precio: 19.99,
        fecha_lanzamiento: new Date("1-31-2013"),
      },
      {
        id: 5,
        titulo: "The Witness",
        categoria: "Puzle",
        descripcion: "The Witness te lleva a una isla abierta llena de paneles de línea, símbolos y mecánicas que evolucionan a lo largo del juego. Explora libremente, observa el entorno, aprende las reglas y resuélvelas hasta comprender el todo.",
        img: "https://cdn.cloudflare.steamstatic.com/steam/apps/210970/capsule_616x353.jpg?t=1598383120",
        alt: "The Witness",
        precio: 39.99,
        fecha_lanzamiento: new Date("1-26-2016"),
      },
      {
        id: 6,
        titulo: "Human Fall Flat",
        categoria: "Puzle",
        descripcion: "Human Fall Flat es un juego de puzles físicos multijugador con un protagonista de plastilina que resuelve desafíos de equilibrio, plataformas y cooperación. Ideal para jugar con amigos y experimentar. ",
        img: "https://th.bing.com/th/id/R.ca15c17b4a43d761157982c90271a9c6?rik=4dFVCsemDeSG9A&pid=ImgRaw&r=0",
        alt: "Human Fall Flat",
        precio: 14.99,
        fecha_lanzamiento: new Date("7-22-2016"),
      },
      {
        id: 7,
        titulo: "Limbo",
        categoria: "Puzle",
        descripcion: "Limbo es un juego de plataformas y puzle atmosférico: salta, resuelve mecanismos y evita peligros en un mundo monocromo y sin apenas texto, con diseño artístico minimalista pero intenso.",
        img: "https://tse4.mm.bing.net/th/id/OIP.qZEMaOfVEFeuza5xTojtlwHaEK?cb=ucfimgc2&rs=1&pid=ImgDetMain&o=7&rm=3",
        alt: "Limbo",
        precio: 9.99,
        fecha_lanzamiento: new Date("7-21-2010"),
      },
      {
        id: 8,
        titulo: "Inside",
        categoria: "Puzle",
        descripcion: "Inside, de los creadores de Limbo, combina puzzles ambientales, plataformas y narrativa potente. Un niño en un mundo opresivo escapa y descubre secretos inquietantes mientras resuelve rompecabezas ingeniosos.",
        img: "https://cdn1.epicgames.com/offer/13bb5776b9e1424d84ce42d9ba61c0ca/EGS_INSIDE_Playdead_S1_2560x1440-879c694b1a404230016bb8dfc83fa750",
        alt: "Inside",
        precio: 19.99,
        fecha_lanzamiento: new Date("6-29-2016"),
      },
      {
        id: 9,
        titulo: "Stephen’s Sausage Roll",
        categoria: "Puzle",
        descripcion: "Stephen’s Sausage Roll es un puzle retador donde empujas salchichas sobre placas de parrilla, quemarlas incorrectamente es fallar. Minimalismo de reglas, máxima profundidad: considerado uno de los puzles más difíciles pero brillantes.",
        img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/353540/header.jpg?t=1589230122",
        alt: "Stephen’s Sausage Roll",
        precio: 24.99,
        fecha_lanzamiento: new Date("5-27-2021"),
      },
      {
        id: 10,
        titulo: "Q.U.B.E. 2",
        categoria: "Puzle",
        descripcion: "Q.U.B.E. 2 es un juego de rompecabezas en primera persona donde manipulas bloques, resortes y mecanismos en habitaciones de diseño limpio, inspirado por Portal, con estética moderna y retos bien calibrados.",
        img: "https://tse2.mm.bing.net/th/id/OIP.Gb4FNDkgChh7hEdGWIXDDgHaDb?cb=ucfimgc2&rs=1&pid=ImgDetMain&o=7&rm=3",
        alt: "Q.U.B.E. 2",
        precio: 19.99,
        fecha_lanzamiento: new Date("3-15-2018"),
      },
      {
        id: 11,
        titulo: "Slayaway Camp 2",
        categoria: "Puzle",
        descripcion: "Slayaway Camp 2 es un juego de puzles-movimiento ambientado en una estética de terror ochentero: mueve al asesino para resolver laberintos, evitar trampas y eliminar campistas. Una opción divertida que mezcla humor negro y rompecabezas.",
        img: "https://media.pocketgamer.com/artwork/na-37593-1750129952/slayaway-camp-2-ios-android-launch-cover.jpg",
        alt: "Slayaway Camp 2",
        precio: 12.79,
        fecha_lanzamiento: new Date("10-28-2022"),
      },
      {
        id: 12,
        titulo: "A Monster’s Expedition",
        categoria: "Puzle",
        descripcion: "A Monster’s Expedition es un juego tranquilo de exploración y puzles: rodar, empujar y mover tu esqueleto-científico vestido de traje por islas conectadas para descubrir secretos antiguos. Ideal para jugar sin presión. ",
        img: "https://tse3.mm.bing.net/th/id/OIP.Nt_-QUJPKC1_G4DNwKkMDgHaHa?cb=ucfimgc2&rs=1&pid=ImgDetMain&o=7&rm=3",
        alt: "A Monster’s Expedition",
        precio: 19.99,
        fecha_lanzamiento: new Date("10-27-2021"),
      },

    ]
  }
}
