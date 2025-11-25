import { ChangeDetectorRef, Component } from '@angular/core';
import { Mantenimiento } from '../../services/mantenimiento';
import { firstValueFrom } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-eliminar-servicio',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './eliminar-servicio.html',
  styleUrl: './eliminar-servicio.css',
})
export class EliminarServicio {

  servicios : any [] = [];
  ID: string = '';

  constructor(
    private service: Mantenimiento,
    private recargarDatos: ChangeDetectorRef
  ) {}

  async ngOnInit() {
    try {
      const datos = await firstValueFrom(this.service.obtenerServicios());
      this.servicios = datos.data.filter((servicio: any) => servicio.estado == 'Pendiente');
      this.recargarDatos.detectChanges();
    } catch (error) {
      console.error('Error al obtener servicios:', error);
    }
  }

  bajaServicio(id:string) {
    alert('Servicio con ID ${id} dado de baja.');
    this.ID
  }
  alerta(mensaje:string, equipo:string) {
    alert(mensaje + equipo);
  }
}
