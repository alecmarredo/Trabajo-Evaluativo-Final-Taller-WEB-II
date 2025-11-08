import { Component } from '@angular/core';
import { Videojuegos } from '../../../../models/videojuegos';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sigilo',
  imports: [CommonModule],
  templateUrl: './sigilo.html',
  styleUrl: './sigilo.css',
})
export class Sigilo {
public infoVideojuegos: Videojuegos[];

constructor() {
  this.infoVideojuegos = [
    {
    id: 1,
    titulo: "A Plague Tale: Requiem",
    categoria: "Sigilo",
    descripcion: "En una Francia del siglo XIV azotada por la peste, acompaña a Amicia y su hermano Hugo mientras se esconden de soldados, inquisidores y hordas de ratas usando el sigilo como su única defensa.",
    img: "https://cdn.akamai.steamstatic.com/steam/apps/1182900/header.jpg",
    alt: "A Plague Tale: Requiem",
    precio: 49.99,
    fecha_lanzamiento: new Date("10-18-2022"),
},
{
    id: 2,
    titulo: "Dishonored 2",
    categoria: "Sigilo",
    descripcion: "Juega como Emily Kaldwin o Corvo Attano en un mundo de intriga y venganza. Usa poderes sobrenaturales y el sigilo para eliminar a tus enemigos o evitar ser detectado por completo.",
    img: "https://cdn.akamai.steamstatic.com/steam/apps/403640/header.jpg",
    alt: "Dishonored 2",
    precio: 39.99,
    fecha_lanzamiento: new Date("11-11-2016"),
},
{
    id: 3,
    titulo: "Hitman World of Assassination",
    categoria: "Sigilo",
    descripcion: "Conviértete en el Agente 47 y elimina tus objetivos con precisión y creatividad. Planea, improvisa y ejecuta misiones de infiltración por todo el mundo sin ser visto.",
    img: "https://cdn.akamai.steamstatic.com/steam/apps/1659040/header.jpg",
    alt: "Hitman World of Assassination",
    precio: 69.99,
    fecha_lanzamiento: new Date("1-26-2023"),
},
{
    id: 4,
    titulo: "Metal Gear Solid V: The Phantom Pain",
    categoria: "Sigilo",
    descripcion: "Lidera a Big Boss en un vasto mundo abierto lleno de bases enemigas, sistemas de sigilo dinámicos y una historia de traición y venganza ambientada en la Guerra Fría.",
    img: "https://cdn.akamai.steamstatic.com/steam/apps/287700/header.jpg",
    alt: "Metal Gear Solid V: The Phantom Pain",
    precio: 29.99,
    fecha_lanzamiento: new Date("9-1-2015"),
},
{
    id: 5,
    titulo: "Sniper Elite 5",
    categoria: "Sigilo",
    descripcion: "Conviértete en Karl Fairburne, un francotirador de élite que opera tras las líneas enemigas. Usa el sigilo, el camuflaje y la precisión para desmantelar el régimen nazi.",
    img: "https://cdn.akamai.steamstatic.com/steam/apps/1029690/header.jpg",
    alt: "Sniper Elite 5",
    precio: 54.99,
    fecha_lanzamiento: new Date("5-26-2022"),
},
{
    id: 6,
    titulo: "Aragami 2",
    categoria: "Sigilo",
    descripcion: "Eres un asesino que controla las sombras. Infiltrate, salva a tu clan y derrota a tus enemigos en un mundo oscuro y bellamente diseñado que premia la discreción.",
    img: "https://cdn.akamai.steamstatic.com/steam/apps/1158370/header.jpg",
    alt: "Aragami 2",
    precio: 39.99,
    fecha_lanzamiento: new Date("9-17-2021"),
},
{
    id: 7,
    titulo: "Assassin’s Creed Mirage",
    categoria: "Sigilo",
    descripcion: "Vuelve a las raíces del sigilo con Basim en las calles de Bagdad. Escala, asesina y desaparece entre las sombras como un verdadero maestro de la Hermandad.",
    img: "https://cdn.akamai.steamstatic.com/steam/apps/2933620/header.jpg",
    alt: "Assassin’s Creed Mirage",
    precio: 49.99,
    fecha_lanzamiento: new Date("10-5-2023"),
},
{
    id: 8,
    titulo: "Thief",
    categoria: "Sigilo",
    descripcion: "Eres Garrett, un maestro ladrón que acecha entre las sombras. Roba a los ricos, manipula el entorno y desaparece antes de que te vean en una ciudad gótica opresiva.",
    img: "https://cdn.akamai.steamstatic.com/steam/apps/239160/header.jpg",
    alt: "Thief",
    precio: 29.99,
    fecha_lanzamiento: new Date("2-25-2014"),
},
{
    id: 9,
    titulo: "Ghost of Tsushima DIRECTOR’S CUT",
    categoria: "Sigilo",
    descripcion: "Sigue la historia de Jin Sakai, un samurái que adopta tácticas de sigilo para liberar Tsushima de los invasores mongoles. Combina honor y sombras en un combate espectacular.",
    img: "https://cdn.akamai.steamstatic.com/steam/apps/2215430/header.jpg",
    alt: "Ghost of Tsushima DIRECTOR’S CUT",
    precio: 59.99,
    fecha_lanzamiento: new Date("5-16-2024"),
},
{
    id: 10,
    titulo: "Assassin’s Creed Odyssey",
    categoria: "Sigilo",
    descripcion: "Explora la Antigua Grecia en una aventura épica donde el sigilo y la astucia son tan importantes como el combate. Elige tu camino como mercenario y forja tu leyenda.",
    img: "https://cdn.akamai.steamstatic.com/steam/apps/812140/header.jpg",
    alt: "Assassin’s Creed Odyssey",
    precio: 59.99,
    fecha_lanzamiento: new Date("10-5-2018"),
},
{
    id: 11,
    titulo: "Desperados III",
    categoria: "Sigilo",
    descripcion: "Un juego de táctica y sigilo en el Viejo Oeste. Controla a un grupo de forajidos con habilidades únicas y usa el entorno para eliminar enemigos sin ser descubierto.",
    img: "https://cdn.akamai.steamstatic.com/steam/apps/610370/header.jpg",
    alt: "Desperados III",
    precio: 49.99,
    fecha_lanzamiento: new Date("6-16-2020"),
},
{
    id: 12,
    titulo: "Hitman 2",
    categoria: "Sigilo",
    descripcion: "Viaja por el mundo como el Agente 47 y usa el sigilo, los disfraces y tu ingenio para ejecutar los asesinatos más creativos sin dejar rastro alguno.",
    img: "https://cdn.akamai.steamstatic.com/steam/apps/863550/header.jpg",
    alt: "Hitman 2",
    precio: 59.99,
    fecha_lanzamiento: new Date("11-13-2018"),
},

  ]
}
}
