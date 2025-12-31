import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard-component/dashboard-component';
import { RegistrarClaseComponent } from './components/registrar-clase-component/registrar-clase-component';
import { RegistrarAlumnoComponent } from './components/registrar-alumno-component/registrar-alumno-component';
import { AdminCatalogosComponent } from './components/admin-catalogos-component/admin-catalogos-component';

export const routes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'crear-clase', component: RegistrarClaseComponent },
    { path: 'registro-alumnos', component: RegistrarAlumnoComponent },
    { path: 'configuracion', component: AdminCatalogosComponent },
    { path: '**', redirectTo: 'dashboard' }
];
