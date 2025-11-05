import { Routes } from '@angular/router';
import { Productos } from './pages/productos/productos';
import { Inicio } from './pages/inicio/inicio';
import { Sobre } from './pages/sobre/sobre';
import { Ofertas } from './pages/ofertas/ofertas';
import { Contacto } from './pages/contacto/contacto';
import { Carreras } from './pages/productos/secciones/carreras/carreras';
import { Casual } from './pages/productos/secciones/casual/casual';
import { Deportes } from './pages/productos/secciones/deportes/deportes';
import { Estrategia } from './pages/productos/secciones/estrategia/estrategia';
import { Fantasia } from './pages/productos/secciones/fantasia/fantasia';
import { Indie } from './pages/productos/secciones/indie/indie';
import { Multijugador } from './pages/productos/secciones/multijugador/multijugador';
import { MundoAbierto } from './pages/productos/secciones/mundo-abierto/mundo-abierto';
import { Puzle } from './pages/productos/secciones/puzle/puzle';
import { RealidadVirtual } from './pages/productos/secciones/realidad-virtual/realidad-virtual';
import { Rpg } from './pages/productos/secciones/rpg/rpg';
import { Sandbox } from './pages/productos/secciones/sandbox/sandbox';
import { Shooters } from './pages/productos/secciones/shooters/shooters';
import { Sigilo } from './pages/productos/secciones/sigilo/sigilo';
import { Simulacion } from './pages/productos/secciones/simulacion/simulacion';
import { Terror } from './pages/productos/secciones/terror/terror';
import { NuevoProducto } from './pages/productos/secciones/nuevo-producto/nuevo-producto';

export const routes: Routes = [
    {path:"", component: Inicio},
    {path: "Productos", component: Productos},
    {path: "Sobre", component: Sobre},
    {path: "Ofertas", component: Ofertas},
    {path: "Contacto", component: Contacto},
    {path: "Carreras", component: Carreras},
    {path: "Casual", component: Casual},
    {path: "Deportes", component: Deportes},
    {path: "Estrategia", component: Estrategia},
    {path: "Fantasia", component: Fantasia},
    {path: "Indie", component: Indie},
    {path: "Multijugador", component: Multijugador},
    {path: "MundoAbierto", component: MundoAbierto},
    {path: "Puzle", component: Puzle},
    {path: "RealidadVirtual", component: RealidadVirtual},
    {path: "Rpg", component: Rpg},
    {path: "Sandbox", component: Sandbox},
    {path: "Shooters", component: Shooters},
    {path: "Sigilo", component: Sigilo},
    {path: "Simulacion", component: Simulacion},
    {path: "Terror", component: Terror},
    {path: "NuevoProducto", component: NuevoProducto}
];
