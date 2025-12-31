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

  diasSemana = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'];

  constructor( private escuelaService: EscuelaService ) { }

  async ngOnInit() {
    this.cargarCatalogos();
  }

  async cargarCatalogos() {
    const catalogos = await this.escuelaService.cargarCatalogos();
    this.maestros = catalogos.maestros;
    this.materias = catalogos.materias;
  }

  toggleDia(dia: string, checked: boolean) {
    if (checked) {
      this.clase.dias.push(dia);
    } else {
      this.clase.dias = this.clase.dias.filter(d => d !== dia);
    }
  }

  async guardarClase() {
    await this.escuelaService.crearClase(this.clase);
    alert('Clase creada con éxito 🚀');
  }
}