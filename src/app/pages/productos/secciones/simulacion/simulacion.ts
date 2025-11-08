import { Component } from '@angular/core';
import { Videojuegos } from '../../../../models/videojuegos';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-simulacion',
  imports: [CommonModule],
  templateUrl: './simulacion.html',
  styleUrl: './simulacion.css',
})
export class Simulacion {
public infoVideojuegos: Videojuegos[];

constructor() {
  this.infoVideojuegos = [
    {
    id: 1,
    titulo: "Microsoft Flight Simulator 2024",
    categoria: "Simulación",
    descripcion: "Experimenta el vuelo con detalle extremo: aeroplanos reales, condiciones meteorológicas auténticas y todo el mundo como pista. Una simulación de vuelo para los que buscan precisión.",
    img: "https://upload.wikimedia.org/wikipedia/en/9/9c/Microsoft_Flight_Simulator_2024_cover.jpg",
    alt: "Microsoft Flight Simulator 2024",
    precio: 59.99,
    fecha_lanzamiento: new Date("11-19-2024"),
},
{
    id: 2,
    titulo: "PowerWash Simulator 2",
    categoria: "Simulación",
    descripcion: "Conviértete en un profesional de la limpieza a presión: lava fachadas, patios y maquinaria mientras mejoras tu equipo y desbloqueas trabajos cada vez más exigentes.",
    img: "https://upload.wikimedia.org/wikipedia/en/a/a8/PowerWash_Simulator_2_cover.jpg",
    alt: "PowerWash Simulator 2",
    precio: 34.99,
    fecha_lanzamiento: new Date("10-23-2025"),
},
{
    id: 3,
    titulo: "Cities: Skylines II",
    categoria: "Simulación",
    descripcion: "Diseña y gestiona tu propia metrópolis: desde la planificación urbana hasta el transporte, los servicios y la economía. Una simulación profunda para urbanistas virtuales.",
    img: "https://upload.wikimedia.org/wikipedia/en/6/6d/Cities_Skylines_II_cover.jpg",
    alt: "Cities: Skylines II",
    precio: 59.99,
    fecha_lanzamiento: new Date("10-24-2023"),
},
{
    id: 4,
    titulo: "Aragami 2",
    categoria: "Simulación",
    descripcion: "Eres un maestro de las sombras en una simulación de infiltración y táctica: aunque mezcla géneros, ofrece una experiencia simulada de sigilo realista y táctica.",
    img: "https://cdn.akamai.steamstatic.com/steam/apps/1158370/header.jpg",
    alt: "Aragami 2",
    precio: 39.99,
    fecha_lanzamiento: new Date("9-17-2021"),
},
{
    id: 5,
    titulo: "Styx: Master of Shadows",
    categoria: "Simulación",
    descripcion: "Controlas a un goblin en un entorno hostil en este sandbox de sigilo-acción que simula la infiltración como nunca antes: habilidades, escondites y ambición.",
    img: "https://upload.wikimedia.org/wikipedia/en/f/fd/Styx_Master_of_Shadows_cover.jpg",
    alt: "Styx: Master of Shadows",
    precio: 39.99,
    fecha_lanzamiento: new Date("10-07-2014"),
},
{
    id: 6,
    titulo: "Sniper Elite 5",
    categoria: "Simulación",
    descripcion: "Simula la experiencia de ser un francotirador de élite en la Segunda Guerra Mundial: planificación, ocultación, disparos precisos y misiones tras las líneas enemigas.",
    img: "https://cdn.akamai.steamstatic.com/steam/apps/1029690/header.jpg",
    alt: "Sniper Elite 5",
    precio: 54.99,
    fecha_lanzamiento: new Date("5-26-2022"),
},
{
    id: 7,
    titulo: "Ghost of Tsushima DIRECTOR’S CUT",
    categoria: "Simulación",
    descripcion: "Aunque es más acción-aventura, también simula con realismo la vida de un samurái en la provincia de Tsushima: dominio de la espada, tácticas de guerrilla y honor samurái.",
    img: "https://cdn.akamai.steamstatic.com/steam/apps/2215430/header.jpg",
    alt: "Ghost of Tsushima DIRECTOR’S CUT",
    precio: 59.99,
    fecha_lanzamiento: new Date("5-16-2024"),
},
{
    id: 8,
    titulo: "Mark of the Ninja",
    categoria: "Simulación",
    descripcion: "Simula la vida de un ninja moderno: sigilo, movimientos ágiles, invisibilidad momentánea y tomar decisiones inteligentes para sobrevivir sin alertar al enemigo.",
    img: "https://upload.wikimedia.org/wikipedia/en/7/7a/Mark_of_the_Ninja_cover.jpg",
    alt: "Mark of the Ninja",
    precio: 14.99,
    fecha_lanzamiento: new Date("9-17-2012"),
},
{
    id: 9,
    titulo: "A Plague Tale: Requiem",
    categoria: "Simulación",
    descripcion: "En el siglo XIV azotado por peste y guerra, esta simulación de supervivencia te pone en los zapatos de Amicia y Hugo mientras lidian con el horror y la esperanza.",
    img: "https://upload.wikimedia.org/wikipedia/en/9/9f/A_Plague_Tale_Requiem_cover_art.jpg",
    alt: "A Plague Tale: Requiem",
    precio: 49.99,
    fecha_lanzamiento: new Date("10-18-2022"),
},
{
    id: 10,
    titulo: "Invisible, Inc.",
    categoria: "Simulación",
    descripcion: "Simula operaciones encubiertas de espionaje: dirige agentes, infiltra corporaciones, evita cámaras y elimina objetivos sin ser detectado en una simulación táctica intensa.",
    img: "https://upload.wikimedia.org/wikipedia/en/3/33/Invisible_Inc_cover.jpg",
    alt: "Invisible, Inc.",
    precio: 19.99,
    fecha_lanzamiento: new Date("5-12-2015"),
},
{
    id: 11,
    titulo: "Thief: The Dark Project",
    categoria: "Simulación",
    descripcion: "Simula ser Garrett, un maestro ladrón que se mueve entre las sombras, roba sin ser detectado y vive una aventura de engaños y sigilo en una ciudad gótica opresiva.",
    img: "https://upload.wikimedia.org/wikipedia/en/7/77/Thief_The_Dark_Project_Coverart.jpg",
    alt: "Thief: The Dark Project",
    precio: 19.99,
    fecha_lanzamiento: new Date("11-30-1998"),
},
{
    id: 12,
    titulo: "Assassin’s Creed Odyssey",
    categoria: "Simulación",
    descripcion: "Explora la Antigua Grecia en una aventura épica donde el sigilo y la astucia son tan importantes como el combate. Elige tu camino como mercenario y forja tu leyenda.",
    img: "https://upload.wikimedia.org/wikipedia/en/8/8b/Assassin%27s_Creed_Odyssey_cover.jpg",
    alt: "Assassin’s Creed Odyssey",
    precio: 59.99,
    fecha_lanzamiento: new Date("10-5-2018"),
},

  ]
}
}
