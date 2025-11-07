import { Component } from '@angular/core';
import { Videojuegos } from '../../../../models/videojuegos';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-estrategia',
  imports: [CommonModule],
  templateUrl: './estrategia.html',
  styleUrl: './estrategia.css',
})

export class Estrategia {
public infoVideojuegos: Videojuegos[];

constructor() {
this.infoVideojuegos = [
    {
    id: 1,
    titulo: "Crusader Kings III",
    categoria: "Estrategia",
    descripcion: "Ama, lucha, planea y reclama la grandeza. Determina el legado de tu casa nobiliaria en la gran estrategia en expansión de Crusader Kings III. La muerte solo es el comienzo mientras lideras el linaje de tu dinastía en esta completa simulación realista de la Edad Media.",
    img: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1158310/cd1f9447a79cb6f09253145f1ebc6eb9ec08bd2e/header_alt_assets_11_spanish.jpg?t=1762165597",
    alt: "Crusader Kings III",
    precio: 44.99,
    fecha_lanzamiento: new Date("9-1-2024"),
    },

    {
    id: 2,
    titulo: "Hearts of Iron IV",
    categoria: "Estrategia",
    descripcion: "¡Tenemos la victoria al alcance de la mano! Tu capacidad para liderar tu nación es tu arma principal. En el juego de estrategia Hearts of Iron IV podrás ponerte el mando de cualquier nación de la II Guerra Mundial, el conflicto más fascinante de la historia mundial.",
    img: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/394360/67bbd0057627fc2244793bcdd09260c2539499cf/header.jpg?t=1762197878",
    alt: "Hearts of Iron IV",
    precio: 29.99,
    fecha_lanzamiento: new Date("6-6-2016"),
    },

    {
    id: 3,
    titulo: "Sid Meier’s Civilization® VI",
    categoria: "Estrategia",
    descripcion: "Expande tu imperio, haz avanzar tu cultura y enfréntate a los mejores líderes de la historia. ¿Podrá tu civilización superar la prueba del tiempo?",
    img: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/289070/header.jpg?t=1740607040",
    alt: "Sid Meier’s Civilization® VI",
    precio: 79.99,
    fecha_lanzamiento: new Date("10-21-2016"),
    },

    {
    id: 4,
    titulo: "Age of Empires IV: Anniversary Edition",
    categoria: "Estrategia",
    descripcion: "Para celebrar su primer año cautivando a millones de jugadores en todo el mundo, la galardonada y exitosa franquicia de estrategia continúa con Age of Empires IV: Edición Aniversario, sumergiéndote en las épicas batallas históricas que cambiaron el mundo.",
    img: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1466860/header.jpg?t=1762295217",
    alt: "Age of Empires IV: Anniversary Edition",
    precio: 19.99,
    fecha_lanzamiento: new Date("10-28-2021"),
    },


  ]

}
}

