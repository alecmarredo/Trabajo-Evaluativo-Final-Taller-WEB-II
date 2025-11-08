import { Component } from '@angular/core';
import { Videojuegos } from '../../../../models/videojuegos';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-shooters',
  imports: [CommonModule],
  templateUrl: './shooters.html',
  styleUrl: './shooters.css',
})
export class Shooters {
public infoVideojuegos: Videojuegos[];

constructor() {
  this.infoVideojuegos = [
    {
    id: 1,
    titulo: "Ready or Not",
    categoria: "Shooter",
    descripcion: "Toma el mando de un escuadrón SWAT en una ciudad sumida en el caos: cada misión es una incursión de alto riesgo, negociaciones, entradas tácticas, toma de rehenes y decisiones al límite.",
    img: "https://store.steampowered.com/app/1144200/Ready_or_Not/header.jpg",
    alt: "Ready or Not",
    precio: 49.99,
    fecha_lanzamiento: new Date("12-13-2023")
  },
  {
    id: 2,
    titulo: "PAYDAY 3",
    categoria: "Shooter",
    descripcion: "Regresa el grupo de asaltantes más famoso en un shooter cooperativo: planifica robos gigantescos, entra en acción con tu equipo y enfrenta respuestas letales de la policía.",
    img: "https://store.steampowered.com/app/1272080/PAYDAY_3/header.jpg",
    alt: "PAYDAY 3",
    precio: 29.99,
    fecha_lanzamiento: new Date("9-21-2023")
  },
  {
    id: 3,
    titulo: "WRATH: Aeon of Ruin",
    categoria: "Shooter",
    descripcion: "Un homenaje al shooter clásico de los ’90: explora ruinas antiguas, dispara a hordas de criaturas caídas y descubre secretos oscuros en un mundo moribundo.",
    img: "https://store.steampowered.com/app/1000410/WRATH_Aeon_of_Ruin/header.jpg",
    alt: "WRATH: Aeon of Ruin",
    precio: 29.99,
    fecha_lanzamiento: new Date("2-27-2024")
  },
  {
    id: 4,
    titulo: "Call of Duty: Black Ops II",
    categoria: "Shooter",
    descripcion: "Sumérgete en una campaña explosiva ambientada en el futuro cercano, con intensos tiroteos, armas futuristas y una experiencia multijugador que marcó época.",
    img: "https://steamcdn-a.akamaihd.net/steam/apps/209000/header.jpg",
    alt: "Call of Duty: Black Ops II",
    precio: 59.99,
    fecha_lanzamiento: new Date("11-12-2012")
  },
  {
    id: 5,
    titulo: "Sniper Elite V2 Remastered",
    categoria: "Shooter",
    descripcion: "Conviértete en francotirador en la Segunda Guerra Mundial: dispara a los enemigos desde lejos, planea tus emboscadas y aprovecha la anatomía balística para acabar con precisión.",
    img: "https://store.steampowered.com/app/810620/Sniper_Elite_V2_Remastered/header.jpg",
    alt: "Sniper Elite V2 Remastered",
    precio: 34.99,
    fecha_lanzamiento: new Date("5-14-2019")
  },
  {
    id: 6,
    titulo: "XIII Remake",
    categoria: "Shooter",
    descripcion: "Un shooter estilizado con estética de cómic a la primera persona: descubre la conspiración detrás del asesinato del presidente, con acción trepidante y gráficos cel-shaded.",
    img: "https://store.steampowered.com/app/1163760/XIII_Remake/header.jpg",
    alt: "XIII Remake",
    precio: 19.99,
    fecha_lanzamiento: new Date("11-10-2020")
  },
  {
    id: 7,
    titulo: "Back 4 Blood",
    categoria: "Shooter",
    descripcion: "Un shooter cooperativo contra zombis donde los jugadores forman equipo para sobrevivir oleadas implacables, mejorar armas y cumplir objetivos en escenarios extremos.",
    img: "https://store.steampowered.com/app/2086500/Back_4_Blood/header.jpg",
    alt: "Back 4 Blood",
    precio: 59.99,
    fecha_lanzamiento: new Date("10-12-2021")
  },
  {
    id: 8,
    titulo: "Chorus",
    categoria: "Shooter",
    descripcion: "Aunque destaca por su vuelo en el espacio, este juego mezcla acción de disparos aéreos y combate en naves con elementos shooter intensos mientras enfrentas una secta interplanetaria.",
    img: "https://store.steampowered.com/app/959840/Chorus/header.jpg",
    alt: "Chorus",
    precio: 24.99,
    fecha_lanzamiento: new Date("12-03-2021")
  },
  {
    id: 9,
    titulo: "Hell Let Loose",
    categoria: "Shooter",
    descripcion: "Un shooter táctico a gran escala ambientado en la Segunda Guerra Mundial: coordina con cientos de jugadores, ocupa posiciones estratégicas y cambia el curso de la batalla.",
    img: "https://store.steampowered.com/app/686810/Hell_Let_Loose/header.jpg",
    alt: "Hell Let Loose",
    precio: 39.99,
    fecha_lanzamiento: new Date("6-06-2019")
  },
  {
    id: 10,
    titulo: "The Legend of Cyber Cowboy",
    categoria: "Shooter",
    descripcion: "Un shooter VR sin igual donde eres un pistolero futurista: combos de disparos, estilo arcade y mucha adrenalina mientras te enfrentas a hordas de enemigos robóticos.",
    img: "https://store.steampowered.com/app/1806370/The_Legend_of_Cyber_Cowboy/header.jpg",
    alt: "The Legend of Cyber Cowboy",
    precio: 17.99,
    fecha_lanzamiento: new Date("4-11-2023")
  },
  {
    id: 11,
    titulo: "DEATH STRANDING Director’s Cut",
    categoria: "Shooter",
    descripcion: "Aunque mezcla géneros, su apartado shooter resalta en algunas misiones de acción intensa y combate armado: vive una experiencia única en un mundo post-apocalíptico.",
    img: "https://store.steampowered.com/app/1877730/DEATH_STRANDING_Directors_Cut/header.jpg",
    alt: "DEATH STRANDING Director’s Cut",
    precio: 39.99,
    fecha_lanzamiento: new Date("9-24-2021")
  },
  {
    id: 12,
    titulo: "Strike Force 3",
    categoria: "Shooter",
    descripcion: "Un shooter moderno de acción rápida: misiones de infiltración, tiroteos intensos y una ambientación contemporánea para quienes buscan acción directa sin pausa.",
    img: "https://store.steampowered.com/app/2261290/Strike_Force_3/header.jpg",
    alt: "Strike Force 3",
    precio: 6.99,
    fecha_lanzamiento: new Date("9-28-2023")
  }
  ]
}
}
