import { Component } from '@angular/core';
import { Videojuegos } from '../../../../models/videojuegos';
import { FormGroup,FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Tarjeta } from '../../../../models/tarjeta';

/*
  FormaGroups: es una directiva de formularios que agrupa una serie de datos

  FormControl: Utilizada en conjunto con FormGroup para tomar el valor de una 
  propiedad individual en un formulario

  ReactiveFormsModule: Activa el uso de formularios recativos --> Se ejecutan mediante una 
  accion y se relaciona HTML (Interfaz gráfica) con TS (Lógica)

  Validatos: Pide o requiere que un valor exista o sea validado como necesario
*/

@Component({
  selector: 'app-nuevo-producto',
  imports: [ReactiveFormsModule],
  templateUrl: './nuevo-producto.html',
  styleUrl: './nuevo-producto.css',
})
export class NuevoProducto {
  nuevoProducto = new FormGroup ({
    id: new FormControl(null,Validators.required),
    titulo: new FormControl('',Validators.required),
    categoria: new FormControl('',Validators.required),
    descripcion: new FormControl('',Validators.required),
    img: new FormControl('',Validators.required),
    alt: new FormControl('',Validators.required),
    precio: new FormControl(null,Validators.required),
    enOferta: new FormControl(''),
    precioOferta: new FormControl(''),
    fecha_lanzamiento: new FormControl(null,Validators.required),
  })

  /* Coleccionar prodcutos de tipo TARJETA (respeta la estructura de la interfaz)
    Funciona  como arreglo ("[]"), se inicializa vacío
  */

  coleccionProductos: Tarjeta[] = [];


  /* Para manejar informacion sensible */
  private contadorId = 1;

  crearTarjeta() {}
}
