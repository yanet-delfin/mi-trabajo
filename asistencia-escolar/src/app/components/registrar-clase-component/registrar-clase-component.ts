import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EscuelaService } from '../../services/escuela-service';

@Component({
  selector: 'app-registrar-clase-component',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './registrar-clase-component.html',
  styleUrl: './registrar-clase-component.css',
})
export class RegistrarClaseComponent {

  maestros: any[] = [];
  materias: any[] = [];
  
  clase = {
    maestroId: null,
    materiaId: null,
    dias: [] as string[],
    semestre: '',
    grupo: '',
  };

  constructor( private escuelaService: EscuelaService ) { }

  async ngOnInit() {
    const catalogos = await this.escuelaService.cargarCatalogos();
    this.maestros = catalogos.maestros;
    this.materias = catalogos.materias;
  }

  toggleDia(dia: string) {
    if (this.clase.dias.includes(dia)) {
      this.clase.dias = this.clase.dias.filter(d => d !== dia);
    } else {
      this.clase.dias.push(dia);
    }
  }
  async guardarClase() {

  if (
    !this.clase.maestroId ||
    !this.clase.materiaId ||
    !this.clase.semestre ||
    !this.clase.grupo ||
    this.clase.dias.length === 0
  ) {
    alert('Completa todos los campos');
    return;
  }

  console.log('Clase a guardar:', this.clase);

  await this.escuelaService.crearClase(this.clase);

  alert('Clase creada con éxito');

  this.clase = {
    maestroId: null,
    materiaId: null,
    dias: [],
    semestre: '',
    grupo: '',
  };
}
}