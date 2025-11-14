import { ChangeDetectorRef, Component } from '@angular/core';
import { Mantenimiento } from '../../services/mantenimiento';
import { firstValueFrom } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {

  servicios: any[] = [];
  constructor(
    private apiservicio: Mantenimiento,
    private detectarCambios: ChangeDetectorRef
  ) { }

  async ngOnInit() {
    const datos = await firstValueFrom(this.apiservicio.obtenerServicios());
    this.servicios = datos.data;
    this.detectarCambios.detectChanges();
  }
}
