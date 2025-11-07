import { Component } from '@angular/core';
import { Videojuegos } from '../../../../models/videojuegos';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-fantasia',
  imports: [CommonModule],
  templateUrl: './fantasia.html',
  styleUrl: './fantasia.css',
})

export class Fantasia {
public infoVideojuegos: Videojuegos[];

constructor() {
this.infoVideojuegos = [
    {
    id: 1,
    titulo: "The Elder Scrolls V: Skyrim Special Edition",
    categoria: "Fantasía",
    descripcion: "The Elder Scrolls V: Skyrim Special Edition, ganador de más de 200 premios al “Juego del año”, da vida a la fantasía épica con un nivel de detalle asombroso. La Special Edition incluye el juego aclamado por la crítica y complementos con nuevas funcionalidades.",
    img: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/489830/header.jpg?t=1753715778",
    alt: "The Elder Scrolls V: Skyrim Special Edition",
    precio: 23.99,
    fecha_lanzamiento: new Date("10-27-2016"),
    },

    {
    id: 2,
    titulo: "The Elder Scrolls® Online",
    categoria: "Fantasía",
    descripcion: "Toda leyenda comienza por alguna parte, y, en el caso de The Elder Scrolls Online, lo hace por ti. Únete a millones de jugadores en un RPG de fantasía online ambientado en el gigantesco y vibrante mundo de The Elder Scrolls.",
    img: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/306130/0d72f13b2d3f75385a0c83e2551ba97e1059c6fe/header.jpg?t=1758307361",
    alt: "The Elder Scrolls® Online",
    precio: 11.99,
    fecha_lanzamiento: new Date("4-4-2014"),
    },

    {
    id: 3,
    titulo: "Hogwarts Legacy",
    categoria: "Fantasía",
    descripcion: "Hogwarts Legacy es un RPG inmersivo de acción en mundo abierto. Ahora puedes tomar el control de la acción y ser el centro de tu propia aventura en el mundo mágico.",
    img: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/990080/a3cdc6f40d97df8ac993679c2dd1edeb5222421e/header.jpg?t=1753912780",
    alt: "Hogwarts Legacy",
    precio: 30.99,
    fecha_lanzamiento: new Date("2-23-2023"),
    },

    {
    id: 4,
    titulo: "Baldur's Gate 3",
    categoria: "Fantasía",
    descripcion: "Reúne a tu grupo y vuelve a los Reinos Olvidados en un relato de compañerismo y traición, sacrificio y supervivencia, además de la atracción de un poder absoluto",
    img: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1086940/48a2fcbda8565bb45025e98fd8ebde8a7203f6a0/header.jpg?t=1759825106",
    alt: "Baldur's Gate 3",
    precio: 34.99,
    fecha_lanzamiento: new Date("8-3-2023"),
    },

    {
    id: 5,
    titulo: "Black Myth: Wukong",
    categoria: "Fantasía",
    descripcion: "Black Myth: Wukong es un RPG de acción inspirado en la mitología china. Encarnarás al Predestinado, que ha de embarcarse en un viaje repleto de peligros y maravillas para descubrir la verdad oculta acerca de una gloriosa leyenda del pasado.",
    img: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2358720/header.jpg?t=1760601605",
    alt: "Black Myth: Wukong",
    precio: 59.99,
    fecha_lanzamiento: new Date("8-19-2024"),
    },

    {
    id: 6,
    titulo: "Elden Ring",
    categoria: "Fantasía",
    descripcion: "EL NUEVO JUEGO DE ROL Y ACCIÓN DE AMBIENTACIÓN FANTÁSTICA. Álzate, Sinluz, y que la gracia te guíe para abrazar el poder del Círculo de Elden y encumbrarte como señor del Círculo en las Tierras Intermedias.",
    img: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1245620/header.jpg?t=1748630546",
    alt: "Elden Ring",
    precio: 47.99,
    fecha_lanzamiento: new Date("2-24-2024"),
    },

    {
    id: 7,
    titulo: "Valheim",
    categoria: "Fantasía",
    descripcion: "Un brutal juego de supervivencia y exploración multijugador, ambientado en un purgatorio generado de forma procedural e inspirado en la cultura vikinga. ¡Lucha, construye y conquista tu viaje en una saga digna de la bendición de Odin!",
    img: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/892970/de0bdcf6c008c508a79d8e75eb91fc67f4bebd5d/header.jpg?t=1757486247",
    alt: "Valheim",
    precio: 13.19,
    fecha_lanzamiento: new Date("2-2-2021"),
    },

    {
    id: 8,
    titulo: "Tavern Keeper",
    categoria: "Fantasía",
    descripcion: "De los creadores de Game Dev Tycoon llega Tavern Keeper 🍻, un simulador de gestión cuqui y caótico, ¡con un sandbox de decoración muy versátil y un mágico libro de cuentos con historias que rolear!",
    img: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/436780/622d3c33fd94631d86894a8e2dd15071c02779d0/header.jpg?t=1762343337",
    alt: "Tavern Keeper",
    precio: 11.19,
    fecha_lanzamiento: new Date("9-3-2025"),
    },

    {
    id: 9,
    titulo: "Hades II",
    categoria: "Fantasía",
    descripcion: "Usa las artes oscuras para abrirte paso más allá del inframundo y enfréntate al Titán del Tiempo en esta cautivadora continuación del galardonado juego de mazmorras de tipo rogue-like.",
    img: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1145350/91ac334a2c137d08968ccc0bc474a02579602100/header.jpg?t=1759973532",
    alt: "Hades II",
    precio: 14.99,
    fecha_lanzamiento: new Date("9-25-2025"),
    },

    {
    id: 10,
    titulo: "Mortal Kombat: Legacy Kollection",
    categoria: "Fantasía",
    descripcion: "¡Entra en la arena y elige a tu luchador! Vive los orígenes legendarios de la franquicia con los arcades clásicos con los que todo comenzó, junto a una cuidada selección de las versiones domésticas más queridas y los lanzamientos raros favoritos de los fans: una celebración de su legado innovador.",
    img: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3454980/24fece3b770962ade1a94dfb3f134befe97469b9/header.jpg?t=1761854834",
    alt: "Mortal Kombat: Legacy Kollection",
    precio: 22.99,
    fecha_lanzamiento: new Date("10-30-2025"),
    },

    {
    id: 11,
    titulo: "Enshrouded",
    categoria: "Fantasía",
    descripcion: "Sois Flameborn, la última esperanza de una raza moribunda. Sobrevivid a una niebla corruptora y devolved la belleza a vuestro reino. Aniquilad a temibles enemigos en un mundo inabarcable, levantad edificaciones y abríos paso en este RPG de acción y supervivencia cooperativo para hasta 16 jugadores.",
    img: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1203620/e67cd0b0a988dd61beaf0c9f0782ba0dcc23e0fa/header.jpg?t=1761294141",
    alt: "Enshrouded",
    precio: 14.99,
    fecha_lanzamiento: new Date("1-24-2024"),
    },

    {
    id: 12,
    titulo: "Diablo® IV",
    categoria: "Fantasía",
    descripcion: "Únete a la lucha por Santuario en Diablo® IV, la aventura de rol y acción definitiva. Vive la campaña alabada por la crítica y nuevo contenido de temporada.",
    img: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2344520/80f21a42e378b93e8fbb68ee43103be8ab84891b/header.jpg?t=1758649357",
    alt: "Diablo® IV",
    precio: 49.99,
    fecha_lanzamiento: new Date("10-17-2023"),
    },
  ]

}
}

