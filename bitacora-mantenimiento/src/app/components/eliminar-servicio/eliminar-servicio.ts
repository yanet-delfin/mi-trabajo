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

  moduloBaja: boolean = false;
  equipo: string= '';
  descripcion: string= '';

  servicios : any [] = [];
  ID: string = '';
  motivoBaja: string = '';

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

  bajaServicio(id:string, equipo:string, descripcion:string) {
    alert('Servicio con ID ${id} dado de baja.');
    this.ID= id;
    this.equipo= equipo;
    this.descripcion= descripcion;
  }
  alerta(mensaje:string, equipo:string) {
    alert(mensaje + equipo);
  }

  async baja() {
    try {
      await firstValueFrom(this.service.darDeBaja(this.ID,this.motivoBaja))
      alert('se dio de baja');
    } catch (error) {
      
    }
  }

  async cancelar() {
    try {
      this.moduloBaja
    } catch (error) {
      
    }
  }
}
