import { Component } from '@angular/core';
import { Videojuegos } from '../../../../models/videojuegos';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mundo-abierto',
  imports: [CommonModule],
  templateUrl: './mundo-abierto.html',
  styleUrl: './mundo-abierto.css',
})
export class MundoAbierto {
  public infoVideojuegos: Videojuegos[];

  constructor() {
    this.infoVideojuegos = [
      {
        id: 1,
        titulo: "The Witcher 3: Wild Hunt",
        categoria: "Mundo Abierto",
        descripcion: "En The Witcher 3: Wild Hunt tomas el papel de Geralt de Rivia, cazador de monstruos, y atraviesas un vasto mundo abierto lleno de bestias, intrigas, decisiones morales difíciles y paisajes magníficos que explorar sin prisa.",
        img: "https://th.bing.com/th/id/R.7f028b59767e2b71a4f7e223a8eca462?rik=I7YtM7mRLKM4KA&pid=ImgRaw&r=0",
        alt: "The Witcher 3: Wild Hunt",
        precio: 39.99,
        fecha_lanzamiento: new Date("5-18-2015"),
      },
      {
        id: 2,
        titulo: "Cyberpunk 2077",
        categoria: "Mundo Abierto",
        descripcion: "Cyberpunk 2077 te sumerge en Night City, una megalópolis abierta repleta de vida, misiones, personalización de personaje y libertad para explorar, luchar y moldear tu historia en un mundo distópico de futuro cercano.",
        img: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1091500/e9047d8ec47ae3d94bb8b464fb0fc9e9972b4ac7/header.jpg?t=1756209867",
        alt: "Cyberpunk 2077",
        precio: 59.99,
        fecha_lanzamiento: new Date("12-09-2020"),
      },
      {
        id: 3,
        titulo: "Grand Theft Auto V",
        categoria: "Mundo Abierto",
        descripcion: "Grand Theft Auto V ofrece un enorme mapa que incluye Los Santos y sus alrededores, múltiples protagonistas entre los que cambiar, misiones principales, actividades secundarias y total libertad para robar coches, volar, explorar y vivir tu versión del crimen urbano.",
        img: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3240220/header.jpg?t=1753974947",
        alt: "Grand Theft Auto V",
        precio: 29.99,
        fecha_lanzamiento: new Date("4-14-2015"),
      },
      {
        id: 4,
        titulo: "Red Dead Redemption 2",
        categoria: "Mundo Abierto",
        descripcion: "Red Dead Redemption 2 traslada la experiencia al Viejo Oeste en un mundo abierto vivo: cabalga entre montañas y llanuras, interactúa con fauna, realiza misiones, campamento y vive una epopeya de forajidos.",
        img: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1174180/header.jpg?t=1759502961",
        alt: "Red Dead Redemption 2",
        precio: 59.99,
        fecha_lanzamiento: new Date("11-05-2019"),
      },
      {
        id: 5,
        titulo: "Horizon Zero Dawn Complete Edition",
        categoria: "Mundo Abierto",
        descripcion: "Horizon Zero Dawn Complete Edition combina exploración, mundo post-apocalíptico, máquinas animales gigantes y narrativa en un vasto mundo abierto que invita a recorrerlo y descubrir sus secretos.",
        img: "https://tse4.mm.bing.net/th/id/OIP.vTEr4FxJzzOQl3d8STy4mQHaEK?cb=ucfimgc2&rs=1&pid=ImgDetMain&o=7&rm=3",
        alt: "Horizon Zero Dawn Complete Edition",
        precio: 49.99,
        fecha_lanzamiento: new Date("8-7-2020"),
      },
      {
        id: 6,
        titulo: "Far Cry 6",
        categoria: "Mundo Abierto",
        descripcion: "Far Cry 6 te lleva a Yara, una isla caribeña ficticia bajo régimen dictatorial, donde la exploración del mundo abierto, los combos de armas, vehículos y misiones variadas crean una experiencia abierta e intensa.",
        img: "https://th.bing.com/th/id/R.827a9d1823ad230a0ea5a2efc7936370?rik=s11nz6ZAY1DwKw&pid=ImgRaw&r=0",
        alt: "Far Cry 6",
        precio: 59.99,
        fecha_lanzamiento: new Date("10-7-2021"),
      },
      {
        id: 7,
        titulo: "Assassin’s Creed Valhalla",
        categoria: "Mundo Abierto",
        descripcion: "Assassin’s Creed Valhalla te permite vivir como vikingo en un mundo abierto que incluye Inglaterra, Noruega y otros territorios, con incursiones, exploración, construcción de asentamiento y libertad para decidir el camino de tu clan.",
        img: "https://th.bing.com/th/id/R.485fe17203671386c71bde8110886c7d?rik=BkLwy0LCUO0hLg&pid=ImgRaw&r=0",
        alt: "Assassin’s Creed Valhalla",
        precio: 59.99,
        fecha_lanzamiento: new Date("11-10-2020"),
      },
      {
        id: 8,
        titulo: "Ghost of Tsushima Director’s Cut",
        categoria: "Mundo Abierto",
        descripcion: "Ghost of Tsushima Director’s Cut ofrece un mundo abierto ambientado en el Japón feudal, belleza paisajística, combate samurái estilizado y libertad para recorrer la isla de Tsushima a caballo o deslizarse entre bambús.",
        img: "https://th.bing.com/th/id/R.0a9da3a20c30b604add51947a772c00f?rik=sTXR85ldX7peqQ&pid=ImgRaw&r=0",
        alt: "Ghost of Tsushima Director’s Cut",
        precio: 49.99,
        fecha_lanzamiento: new Date("7-17-2023"),
      },
      {
        id: 9,
        titulo: "Days Gone",
        categoria: "Mundo Abierto",
        descripcion: "Days Gone es un juego de mundo abierto post-apocalíptico donde sobrevives con tu moto, exploras un mundo arrasado por hordas de infectados, completas misiones, y enfrentas tanto humanos como criaturas.",
        img: "https://th.bing.com/th/id/R.d0dd715338f4f916b0ad0ec2bc439a33?rik=MSy6IOpEwv1G%2fA&riu=http%3a%2f%2fblizzstoreperu.com%2fcdn%2fshop%2fproducts%2fdays-gone-1000x1000.jpg%3fv%3d1630904771&ehk=FqT%2bQOQOs4I30%2bofMrTLJaL52hkMENAdVS6V%2fuUwbYY%3d&risl=&pid=ImgRaw&r=0",
        alt: "Days Gone",
        precio: 29.99,
        fecha_lanzamiento: new Date("4-18-2023"),
      },
      {
        id: 10,
        titulo: "The Elder Scrolls V: Skyrim Special Edition",
        categoria: "Mundo Abierto",
        descripcion: "The Elder Scrolls V: Skyrim Special Edition te permite recorrer libremente la enorme región de Skyrim, participar en aventuras, forjar armas, explorar cuevas y criaturas, ser mago, ladrón, guerrero o todo junto.",
        img: "https://th.bing.com/th/id/OIP.3PfCg59KE7DZIajxRsjJIgHaEK?o=7&cb=ucfimgc2rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
        alt: "The Elder Scrolls V: Skyrim Special Edition",
        precio: 39.99,
        fecha_lanzamiento: new Date("10-27-2016"),
      },
      {
        id: 11,
        titulo: "Just Cause 4: Reloaded",
        categoria: "Mundo Abierto",
        descripcion: "Just Cause 4 Reloaded lleva la serie a un mundo abierto grande con disrupción climática, caos, vehículos, paracaídas y un sinfín de posibilidades de destrucción y exploración libre sin ataduras.",
        img: "https://image.api.playstation.com/vulcan/img/cfn/11307jgamRT2Qu2NDMKh50hCl1zQM740IxpZSaRBAus0FBJ4medj17Iakid0pgX1fGrEY8nwVZTeOpQbgSOEy1y74XY3iuGk.png",
        alt: "Just Cause 4: Reloaded",
        precio: 19.99,
        fecha_lanzamiento: new Date("12-4-2018"),
      },
      {
        id: 12,
        titulo: "Watch Dogs Legion",
        categoria: "Mundo Abierto",
        descripcion: "Watch Dogs Legion te coloca en un Londres futurista abierto para explorar, reclutar ciudadanos, hackear el sistema, hacer misiones y moverte libremente por la ciudad en modo mundo abierto con variedad de opciones.",
        img: "https://th.bing.com/th/id/R.6564aab7daeb17650e7fc190714bba76?rik=a1YonAvf2FjMLw&pid=ImgRaw&r=0",
        alt: "Watch Dogs Legion",
        precio: 49.99,
        fecha_lanzamiento: new Date("10-29-2020"),
      },

    ]
  }
}
