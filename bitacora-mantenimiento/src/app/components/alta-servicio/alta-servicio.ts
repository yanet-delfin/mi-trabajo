import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Mantenimiento } from '../../services/mantenimiento';
import { first, firstValueFrom } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alta-servicio',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './alta-servicio.html',
  styleUrl: './alta-servicio.css',
})
export class AltaServicio {

  mensaje: boolean = false;
  errorMessage: boolean = true;
  successMessage: boolean = true;
  mensajeDeError = 'ejemplo mensaje de error';
  mensajeDeExito = 'ejemplo mensaje de exito';

  //objeto para bindear datos del formulario
  servicio = {
    equipo: "",
    descripcion: "",
    prioridad: "",
    ubicacion: ""
  }
  constructor(
    private service: Mantenimiento,
    private navegar: Router
  ) {}

  async guardarDatos() {
    try {
      await firstValueFrom(this.service.agregarServicio(this.servicio))
      this.mensaje=true;
      this.errorMessage=false;
      this.mensajeDeExito="Servicio guardado";
      this.successMessage=true;
      this.servicio = {
    equipo: "",
    descripcion: "",
    prioridad: "",
    ubicacion: ""
  }
    this.navegar.navigate(['']);
    } catch (error) {
      this.mensaje=true;
      this.errorMessage=true;
      this.mensajeDeError="Error";
      this.successMessage=false;

    }
  }
  cancelar() {
    this.servicio = {
    equipo: "",
    descripcion: "",
    prioridad: "",
    ubicacion: ""
  }
  this.mensaje=false;
  }

}
