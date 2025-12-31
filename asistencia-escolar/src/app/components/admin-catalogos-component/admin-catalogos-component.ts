import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EscuelaService } from '../../services/escuela-service';

@Component({
  selector: 'app-admin-catalogos-component',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './admin-catalogos-component.html',
  styleUrl: './admin-catalogos-component.css',
})
export class AdminCatalogosComponent {

  maestro = {
    nombre: '',
    especialidad: ''
  };

  materia = {
    nombre: ''
  };

  constructor(private escuelaService: EscuelaService) {}

  async guardarMaestro() {
    if (!this.maestro.nombre || !this.maestro.especialidad) {
      alert ('Completa todos los campos del maestro');
      return;
  }

  await this.escuelaService.registrarMaestro(this.maestro);
  this.maestro = { nombre: '', especialidad: '' };
  alert('Maestro registrado con éxito');
  }

  async guardarMateria() {
    if (!this.materia.nombre) {
      alert ('El nombre de la materia es obligatorio');
      return;
  }
  await this.escuelaService.registrarMateria(this.materia);
  this.materia = { nombre: '' };
  alert('Materia registrada con éxito');
}
}
