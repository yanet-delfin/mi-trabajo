import { ChangeDetectorRef, Component } from '@angular/core';
import { EscuelaService } from '../../services/escuela-service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard-component',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  templateUrl: './dashboard-component.html',
  styleUrl: './dashboard-component.css',
})
export class DashboardComponent {

  clases: any[] = [];
  claseSeleccionada: any = null;
  mostrarLista = false;
  constructor(private escuelaService: EscuelaService, private detectarCambios: ChangeDetectorRef, private navegar: Router) { }

  async ngOnInit() {
    this.cargarClases();
    this.detectarCambios.detectChanges();
  }

  async cargarClases() {
    this.clases = await this.escuelaService.obtenerClases();
  }

  abrirLista(clase: any) {
    this.claseSeleccionada = clase;
    this.mostrarLista = true;
  }
  cerrarLista() {
    this.mostrarLista = false;
    this.claseSeleccionada = null;
  }

  RegistrarClase() {
    this.navegar.navigate(['crear-clase']);
  }

  RegistroAlumnos() {
    this.navegar.navigate(['registro-alumnos']);
  }

  Configuracion() {
    this.navegar.navigate(['configuracion']);
  }
}
