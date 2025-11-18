import { Component } from '@angular/core';
import { Videojuegos } from '../../../../models/videojuegos';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nuevo-producto',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './nuevo-producto.html',
  styleUrl: './nuevo-producto.css',
})
export class NuevoProducto {

  // Formulario reactivo
  nuevoProducto = new FormGroup({
    titulo: new FormControl('', Validators.required),
    categoria: new FormControl('', Validators.required),
    descripcion: new FormControl('', Validators.required),
    img: new FormControl('', Validators.required),
    alt: new FormControl('', Validators.required),
    precio: new FormControl<number | null>(null, Validators.required),
    enOferta: new FormControl<boolean>(false),
    precioOferta: new FormControl<number | null>(null),
    fecha_lanzamiento: new FormControl<Date | null>(null, Validators.required),
  });

  // Colección de productos nuevos
  coleccionProductos: Videojuegos[] = [];

  // Para ir asignando IDs únicos
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
      };

      //aumento la cantidad de artículos de la galería
      this.coleccionProductos.push(nuevaTarjeta);

      console.log('Nueva Tarjeta Agregada:', nuevaTarjeta);
      console.log('Estado de la colección actual:', this.coleccionProductos);

      alert('¡Se creó su nueva tarjeta con éxito!\n' + nuevaTarjeta.titulo);

      this.nuevoProducto.reset({
        enOferta: false,
      });
    }
  }
}
