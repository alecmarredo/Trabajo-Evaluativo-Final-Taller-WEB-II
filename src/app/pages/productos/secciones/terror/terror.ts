import { Component } from '@angular/core';
import { Videojuegos } from '../../../../models/videojuegos';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-terror',
  imports: [CommonModule],
  templateUrl: './terror.html',
  styleUrl: './terror.css',
})
export class Terror {
public infoVideojuegos: Videojuegos[];

constructor() {
  this.infoVideojuegos = [
    {
    id: 1,
    titulo: "Resident Evil 4 Remake",
    categoria: "Terror",
    descripcion: "Una reinvención moderna del clásico de 2005. Acompaña a Leon S. Kennedy en su misión para rescatar a la hija del presidente, enfrentando horrores en un pueblo europeo dominado por el miedo.",
    img: "https://cdn.akamai.steamstatic.com/steam/apps/2050650/header.jpg",
    alt: "Resident Evil 4 Remake",
    precio: 59.99,
    fecha_lanzamiento: new Date("3-24-2023"),
},
{
    id: 2,
    titulo: "Alan Wake 2",
    categoria: "Terror",
    descripcion: "Un thriller psicológico que combina misterio y horror. Alterna entre dos protagonistas atrapados en una pesadilla que distorsiona la realidad mientras luchan contra entidades de oscuridad.",
    img: "https://cdn.akamai.steamstatic.com/steam/apps/2252570/header.jpg",
    alt: "Alan Wake 2",
    precio: 49.99,
    fecha_lanzamiento: new Date("10-27-2023"),
},
{
    id: 3,
    titulo: "The Callisto Protocol",
    categoria: "Terror",
    descripcion: "Un survival horror espacial ambientado en una prisión en la luna de Júpiter. Lucha por sobrevivir entre mutaciones grotescas usando combate cuerpo a cuerpo y armas improvisadas.",
    img: "https://cdn.akamai.steamstatic.com/steam/apps/1544020/header.jpg",
    alt: "The Callisto Protocol",
    precio: 59.99,
    fecha_lanzamiento: new Date("12-2-2022"),
},
{
    id: 4,
    titulo: "Dead Space Remake",
    categoria: "Terror",
    descripcion: "La icónica experiencia de horror de ciencia ficción regresa. A bordo de la nave Ishimura, Isaac Clarke debe sobrevivir a una pesadilla llena de necromorfos y oscuridad.",
    img: "https://cdn.akamai.steamstatic.com/steam/apps/1693980/header.jpg",
    alt: "Dead Space Remake",
    precio: 59.99,
    fecha_lanzamiento: new Date("1-27-2023"),
},
{
    id: 5,
    titulo: "Amnesia: The Bunker",
    categoria: "Terror",
    descripcion: "Eres un soldado atrapado en un búnker de la Primera Guerra Mundial con una criatura que te acecha. Explora, improvisa y sobrevive con recursos limitados en completa oscuridad.",
    img: "https://cdn.akamai.steamstatic.com/steam/apps/1944430/header.jpg",
    alt: "Amnesia: The Bunker",
    precio: 24.99,
    fecha_lanzamiento: new Date("6-6-2023"),
},
{
    id: 6,
    titulo: "MADISON",
    categoria: "Terror",
    descripcion: "Usa una vieja cámara instantánea para conectar el mundo de los vivos y los muertos. Cada fotografía revela secretos y horrores ocultos en una atmósfera opresiva.",
    img: "https://cdn.akamai.steamstatic.com/steam/apps/1675450/header.jpg",
    alt: "MADiSON",
    precio: 34.99,
    fecha_lanzamiento: new Date("7-8-2022"),
},
{
    id: 7,
    titulo: "Tormented Souls",
    categoria: "Terror",
    descripcion: "Inspirado en los clásicos del survival horror, explora una mansión aterradora, resuelve acertijos y enfrenta criaturas deformes mientras buscas la verdad detrás de una desaparición.",
    img: "https://cdn.akamai.steamstatic.com/steam/apps/1367590/header.jpg",
    alt: "Tormented Souls",
    precio: 19.99,
    fecha_lanzamiento: new Date("8-27-2021"),
},
{
    id: 8,
    titulo: "The Evil Within 2",
    categoria: "Terror",
    descripcion: "Sebastián Castellanos regresa al infierno de STEM para salvar a su hija. Un survival horror psicológico lleno de pesadillas, criaturas retorcidas y decisiones desesperadas.",
    img: "https://cdn.akamai.steamstatic.com/steam/apps/601430/header.jpg",
    alt: "The Evil Within 2",
    precio: 39.99,
    fecha_lanzamiento: new Date("10-13-2017"),
},
{
    id: 9,
    titulo: "Signalis",
    categoria: "Terror",
    descripcion: "Una obra de terror psicológico ambientada en un futuro distópico. Explora una estación abandonada mientras descubres secretos de identidad, memoria y humanidad perdida.",
    img: "https://cdn.akamai.steamstatic.com/steam/apps/1262350/header.jpg",
    alt: "Signalis",
    precio: 19.99,
    fecha_lanzamiento: new Date("10-27-2022"),
},
{
    id: 10,
    titulo: "Visage",
    categoria: "Terror",
    descripcion: "Explora una casa maldita donde el terror se manifiesta en cada rincón. Mantén la cordura mientras revives eventos horripilantes y descubres la historia de los espíritus atrapados.",
    img: "https://cdn.akamai.steamstatic.com/steam/apps/594330/header.jpg",
    alt: "Visage",
    precio: 34.99,
    fecha_lanzamiento: new Date("10-30-2020"),
},
{
    id: 11,
    titulo: "Resident Evil Village",
    categoria: "Terror",
    descripcion: "Ethan Winters debe enfrentarse a horrores indescriptibles en una aldea perdida. Combina acción, supervivencia y pavor en una de las entregas más intensas de la saga.",
    img: "https://cdn.akamai.steamstatic.com/steam/apps/1196590/header.jpg",
    alt: "Resident Evil Village",
    precio: 39.99,
    fecha_lanzamiento: new Date("5-7-2021"),
},
{
    id: 12,
    titulo: "Outlast 2",
    categoria: "Terror",
    descripcion: "Armado solo con una cámara, explora un pueblo rural dominado por una secta fanática. Usa el sigilo y el ingenio para escapar de la locura que te acecha sin descanso.",
    img: "https://cdn.akamai.steamstatic.com/steam/apps/414700/header.jpg",
    alt: "Outlast 2",
    precio: 29.99,
    fecha_lanzamiento: new Date("4-25-2017"),
},

  ]
}
}
