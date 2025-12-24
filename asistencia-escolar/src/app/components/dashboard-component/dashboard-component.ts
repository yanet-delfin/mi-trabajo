import { ChangeDetectorRef, Component } from '@angular/core';
import { EscuelaService } from '../../services/escuela-service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard-component',
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './dashboard-component.html',
  styleUrl: './dashboard-component.css',
})
export class DashboardComponent {

  clases: any[] = [];
  claseSeleccionada: any = null;
  modalAbierto = false;
  constructor(private apipaselistas: EscuelaService, private detectarCambios: ChangeDetectorRef, private navegar: Router, private escuelaService: EscuelaService) { }

  async ngOnInit() {
    await this.cargarClases();
    this.detectarCambios.detectChanges();
  }

  async cargarClases() {
    this.clases = await this.escuelaService.obtenerClases();
  }

  abrirPaseLista(clase: any) {
    this.claseSeleccionada = clase;
    this.modalAbierto = true;
  }

  cerrarPaseLista() {
    this.modalAbierto = false;
    this.claseSeleccionada = null;
  }

  async guardarAsistencia() {
    const presents = this.claseSeleccionada.alumnos
      .filter((alumno: any) => alumno.presente)
      .map((alumno: any) => alumno.id);

    const payload = {
      claseId: this.claseSeleccionada.id,
      fecha: new Date().toISOString().split('T')[0],
      presentes: presents
    }; 

    await this.escuelaService.registrarAsistencia(payload);
    this.cerrarPaseLista();
  }

  RegistrarClase() {
    this.navegar.navigate(['craer-clase']);
  }

  RegistroAlumnos() {
    this.navegar.navigate(['registro-alumnos']);
  }

  Configuracion() {
    this.navegar.navigate(['configuracion']);
  }
}
