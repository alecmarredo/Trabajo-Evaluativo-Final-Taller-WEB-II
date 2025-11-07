import { Component } from '@angular/core';
import { Videojuegos } from '../../../../models/videojuegos';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-casual',
  imports: [CommonModule],
  templateUrl: './casual.html',
  styleUrl: './casual.css',
})
export class Casual {
public infoVideojuegos: Videojuegos[];

constructor() {
  this.infoVideojuegos = [
    {
    id: 1,
    titulo: "RV There Yet?",
    categoria: "Casual",
    descripcion: "Una aventura cooperativa que consiste en conducir una autocaravana de vuelta a casa.",
    img: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3949040/cae24b4ed7f4531be51f0d63f785b7d253f92dc3/header.jpg?t=1761681404",
    alt: "RV There Yet?",
    precio: 4.99,
    fecha_lanzamiento: new Date("10-21-2025"),
    },

    {
    id: 2,
    titulo: "Bloons TD 6",
    categoria: "Casual",
    descripcion: "El exitoso juego de defensa de torres",
    img: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/960090/header.jpg?t=1761619015",
    alt: "Bloons TD 6",
    precio: 7.79,
    fecha_lanzamiento: new Date("10-17-2018"),
    },

    {
    id: 3,
    titulo: "Balatro",
    categoria: "Carreras",
    descripcion: "El roguelike de póker. Balatro es un hipnótico y genial constructor de mazos donde podrás jugar manos ilegales de póker, descubrir comodines que alterarán tus partidas y activar combos impresionantes que dispararán tu adrenalina.",
    img: "https://tse4.mm.bing.net/th/id/OIP.kR0OemhrtQm7amxNSG7aBwHaEK?w=1024&h=576&rs=1&pid=ImgDetMain&o=7&rm=3",
    alt: "Balagod",
    precio: 7.99,
    fecha_lanzamiento: new Date("2-20-2024"),
    },

    {
    id: 4,
    titulo: "Stardew Valley",
    categoria: "Casual",
    descripcion: "Acabas de heredar la vieja parcela agrícola de tu abuelo de Stardew Valley. Decides partir hacia una nueva vida con unas herramientas usadas y algunas monedas. ¿Te ves capaz de vivir de la tierra y convertir estos campos descuidados en un hogar próspero?",
    img: "https://th.bing.com/th/id/R.97e349756e6b53e968ae22da42f386de?rik=0b%2bdh3ba7HxJgg&pid=ImgRaw&r=0",
    alt: "Stardew Valley",
    precio: 4.99,
    fecha_lanzamiento: new Date("2-26-2016"),
    },


  ]
}
}
