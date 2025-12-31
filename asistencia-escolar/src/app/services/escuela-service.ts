import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs/internal/lastValueFrom';
import { Observable } from 'rxjs/internal/Observable';

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
  
  registrarAlumno(alumno: any): Observable<any>{ 
 return this.http.post(`${this.apiUrl}/alumnos`, alumno); 
  } 
  
    async crearClase(clase: any): Promise<any> {
      return await lastValueFrom(this.http.post(`${this.apiUrl}/clases`, clase));
    }

registrarAsistencia(payload: any): Observable<any> { 
 // Payload esperado por API: { claseId: 1, fecha: '2023-10-20', presentes: [1, 2] } 
 return this.http.post(`${this.apiUrl}/asistencias`, payload); 
  }
  
}
