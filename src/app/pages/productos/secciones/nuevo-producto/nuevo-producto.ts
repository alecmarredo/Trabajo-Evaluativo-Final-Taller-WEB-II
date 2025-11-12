import { Component } from '@angular/core';
import { Videojuegos } from '../../../../models/videojuegos';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common'

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
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './nuevo-producto.html',
  styleUrl: './nuevo-producto.css',
})

export class NuevoProducto {
  nuevoProducto = new FormGroup({
    titulo: new FormControl('', Validators.required),
    categoria: new FormControl('', Validators.required),
    descripcion: new FormControl('', Validators.required),
    img: new FormControl('', Validators.required),
    alt: new FormControl('', Validators.required),
    precio: new FormControl(null, Validators.required),
    enOferta: new FormControl(false),
    precioOferta: new FormControl(null),
    fecha_lanzamiento: new FormControl(null, Validators.required),
  })

  /* Coleccionar prodcutos de tipo TARJETA (respeta la estructura de la interfaz)
    Funciona  como arreglo ("[]"), se inicializa vacío
  */

  coleccionProductos: Videojuegos[] = [];


  /* Para manejar informacion sensible */
  private contadorId = 1;



  crearTarjeta() {
    if (this.nuevoProducto.valid) {
      const nuevaTarjeta: Videojuegos = {
        id: this.contadorId++,
        titulo: this.nuevoProducto.value.titulo!,
        categoria: this.nuevoProducto.value.categoria!,
        descripcion: this.nuevoProducto.value.descripcion!,
        img: this.nuevoProducto.value.img!,
        alt: this.nuevoProducto.value.alt!,
        precio: this.nuevoProducto.value.precio!,
        enOferta: this.nuevoProducto.value.enOferta!,
        precioOferta: this.nuevoProducto.value.precioOferta!,
        fecha_lanzamiento: this.nuevoProducto.value.fecha_lanzamiento!,
      }

      this.coleccionProductos.push(nuevaTarjeta)

      console.log("Nueva Tarjeta Agregada:", nuevaTarjeta)
      console.log("Estado de la colección actual: ",this.coleccionProductos)

      alert("¡Se creo su nueva tarjeta con exito! \n "+ nuevaTarjeta.titulo)

      this.nuevoProducto.reset();
    }

    
  }
}
