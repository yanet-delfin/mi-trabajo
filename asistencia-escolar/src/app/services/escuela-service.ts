import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs/internal/lastValueFrom';

@Injectable({
  providedIn: 'root',
})
export class EscuelaService {

  private apiUrl = 'https://apipaselistas.onrender.com/api';
  constructor(private http: HttpClient ) {}

  async obtenerClases(): Promise<any>{ 
 return await lastValueFrom(this.http.get<any[]>(`${this.apiUrl}/clases`));
  } 
  
  async registrarMaestro(maestro: any): Promise<any> {
    return await lastValueFrom(
      this.http.post(`${this.apiUrl}/maestros`, maestro)
    );
  }

async registrarMateria(materia: any): Promise<any> {
    return await lastValueFrom(
      this.http.post(`${this.apiUrl}/materias`, materia)
    );
  }
  
  async cargarCatalogos(): Promise<any> {
    const maestros = await lastValueFrom(
      this.http.get<any[]>(`${this.apiUrl}/maestros`)
    );

    const materias = await lastValueFrom(
      this.http.get<any[]>(`${this.apiUrl}/materias`)
    );

    return { maestros, materias };
  }
  
  async registrarAlumno(alumno: any): Promise<any> {
    return await lastValueFrom(
      this.http.post(`${this.apiUrl}/alumnos`, alumno)
    );
  }
  
    async crearClase(clase: any): Promise<any> {
      return await lastValueFrom(this.http.post(`${this.apiUrl}/clases`, clase));
    }

async registrarAsistencia(payload: any): Promise<any> {
    return await lastValueFrom(
      this.http.post(`${this.apiUrl}/asistencias`, payload)
    );
  }
  
}
