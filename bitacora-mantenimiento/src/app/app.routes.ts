import { Routes } from '@angular/router';
import { Dashboard } from './components/dashboard/dashboard';
import { AltaServicio } from './components/alta-servicio/alta-servicio';
import { BajaServicio } from './components/baja-servicio/baja-servicio';
import { ConfirmarServicio } from './components/confirmar-servicio/confirmar-servicio';
import { TerminarServicio } from './components/terminar-servicio/terminar-servicio';
import { EliminarServicio } from './components/eliminar-servicio/eliminar-servicio';


export const routes: Routes = [
    { path : '', component : Dashboard },
    { path : 'alta-servicio', component : AltaServicio},
    { path : 'baja-servicio', component : BajaServicio},
    { path : 'confirmar-servicio', component : ConfirmarServicio},
    { path : 'terminar-servicio', component : TerminarServicio},
    { path : 'eliminar-servicio', component : EliminarServicio}
];
