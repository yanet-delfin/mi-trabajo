import { ChangeDetectorRef, Component } from '@angular/core';
import { EscuelaService } from '../../services/escuela-service';
import { Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-dashboard-component',
  imports: [],
  templateUrl: './dashboard-component.html',
  styleUrl: './dashboard-component.css',
})
export class DashboardComponent {

  clases: any[] = [];
  constructor(private apipaselistas: EscuelaService, private detectarCambios: ChangeDetectorRef, private navegar: Router) { }

  async ngOnInit() {
    const datos = await firstValueFrom(this.apipaselistas.obtenerClases());
    this.clases = datos.data;
    this.detectarCambios.detectChanges();
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
