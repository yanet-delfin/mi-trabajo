import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EscuelaService } from '../../services/escuela-service';

@Component({
  selector: 'app-registrar-alumno-component',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './registrar-alumno-component.html',
  styleUrl: './registrar-alumno-component.css',
})
export class RegistrarAlumnoComponent {

  alumno = {
    nombre: '',
    matricula: '',
  };

  mensaje = '';

  constructor(private escuelaService: EscuelaService) { }

  async guardarAlumno() {
    if (!this.alumno.nombre || !this.alumno.matricula) {
      this.mensaje = 'Por favor, complete todos los campos.';
      return;
    }
    try {
      await this.escuelaService.registrarAlumno(this.alumno);
      this.mensaje = 'Alumno registrado exitosamente.';
      this.alumno = { nombre: '', matricula: '' }; // Reset form
    } catch (error) {
      this.mensaje = 'Error al registrar el alumno. Intente nuevamente.';
    }
  }

}
