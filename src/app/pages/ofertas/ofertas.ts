import { Component } from '@angular/core';
import { Videojuegos } from '../../models/videojuegos';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ofertas',
  imports: [CommonModule],
  templateUrl: './ofertas.html',
  styleUrl: './ofertas.css',
})
export class Ofertas {
public infoVideojuegos: Videojuegos[];

constructor() {
  this.infoVideojuegos = [
    {
      id: 1,
      titulo: "Kingdom Come: Deliverance II",
      categoria: "Mundo Abierto",
      descripcion: "Un emocionante RPG de acción con mucha narrativa y un exuberante mundo abierto situado en la Europa medieval del siglo XV.",
      img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1771300/0101ee56ada8a294071a8dbb36db44070cd6b50b/header_alt_assets_4.jpg?t=1761570094",
      alt: "Kingdom Come: Delivernace II",
      precio: 44.99,
      enOferta: true,
      precioOferta: 29.99,
      fecha_lanzamiento: new Date("4-2-2025"),
    },

    {
    id: 2,
    titulo: "Battlefield 6",
    categoria: "Shooter",
    descripcion: "La experiencia bélica definitiva. En una guerra de tanques, cazas y gigantescos arsenales de combate, el arma más mortífera es tu patrulla.",
    img: "https://gamingbolt.com/wp-content/uploads/2025/07/Battlefield-6.jpg",
    alt: "Battlefield 6",
    precio: 59.99,
    enOferta: true,
    precioOferta: 39.99,
    fecha_lanzamiento: new Date("2025-08-15"),
  },

  {
    id: 3,
    titulo: "Mafia: El Viejo Continente",
    categoria: "Mundo Abierto",
    descripcion: "Descubre los orígenes del crimen organizado en Mafia: El Viejo Continente, una cruda historia de mafiosos ambientada en el brutal submundo de la Sicilia de principios del siglo XX. Lucha por sobrevivir con Enzo Favara y demuestra tu valía a la familia en esta aventura de acción en tercera persona.",
    img: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1941540/d06980bb8f41737ca68da8eed40079347db09c84/header.jpg?t=1756416460",
    alt: "Mafia: El Viejo Continente",
    precio: 49.99,
    enOferta: true,
    precioOferta: 29.99,
    fecha_lanzamiento: new Date("2025-08-7"),
  },

  {
    id: 4,
    titulo: "EA SPORTS FC™ 25",
    categoria: "Deportes",
    descripcion: "EA SPORTS FC™ 25 te ofrece más formas de ganar por el club. Forma equipo con tus colegas en tus modos favoritos con el nuevo Rush de 5 contra 5 y lleva a tu club a la victoria gracias a un control táctico más realista que nunca con FC IQ.",
    img: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2669320/ec3fb7747fd8080ef53d7686e0d98c5abe1f51f1/header.jpg?t=1752681627",
    alt: "EA SPORTS FC™ 25",
    precio: 69.99,
    enOferta: true,
    precioOferta: 39.99,
    fecha_lanzamiento: new Date("2025-09-27"),
  },

  ];
}

}

