import { Routes } from '@angular/router';
import { Productos } from './pages/productos/productos';
import { Inicio } from './pages/inicio/inicio';
import { Sobre } from './pages/sobre/sobre';
import { Ofertas } from './pages/ofertas/ofertas';
import { Contacto } from './pages/contacto/contacto';

export const routes: Routes = [
    {path:"", component: Inicio},
    {path: "Productos", component: Productos},
    {path: "Sobre", component: Sobre},
    {path: "Ofertas", component: Ofertas},
    {path: "Contacto", component: Contacto}
];
