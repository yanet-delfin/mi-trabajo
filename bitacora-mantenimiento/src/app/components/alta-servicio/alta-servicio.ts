import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import { Mantenimiento } from '../../services/mantenimiento';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-alta-servicio',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './alta-servicio.html',
  styleUrl: './alta-servicio.css',
})
export class AltaServicio {
  servicios: any[] = [];
  constructor(
    private apiservicio: Mantenimiento,
    private detectarCambios: ChangeDetectorRef
  ) {}
}
