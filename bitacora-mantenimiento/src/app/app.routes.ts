import { Routes } from '@angular/router';
import { Dashboard } from './components/dashboard/dashboard';
import { AltaServicio } from './components/alta-servicio/alta-servicio';
import { BajaServicio } from './components/baja-servicio/baja-servicio';
import { ConfirmarServicio } from './components/confirmar-servicio/confirmar-servicio';
import { TerminarServicio } from './components/terminar-servicio/terminar-servicio';


export const routes: Routes = [
    { path : '', component : Dashboard },
    { path : 'alta-servicio', component : AltaServicio},
    { path : 'baja-servicio', component : BajaServicio},
    { path : 'confirmar-servicio', component : ConfirmarServicio},
    { path : 'terminar-servicio', component : TerminarServicio}
];
