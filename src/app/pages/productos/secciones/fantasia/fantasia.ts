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
  ]

}
}

