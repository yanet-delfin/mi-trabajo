import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class EscuelaService {

  private apiUrl = 'https://apipaselistas.onrender.com/api';
  constructor(private http: HttpClient ) {}

  obtenerClases(): Observable<any>{ 
 return this.http.get (`${this.apiUrl}/clases`); 
  } 
  
  obtenerMaestros(): Observable<any> {
  return this.http.get(`${this.apiUrl}/maestros`);
}

obtenerMaterias(): Observable<any> {
  return this.http.get(`${this.apiUrl}/materias`);
}
  
  // --- SETTERS (Formularios) --- 
  registrarMaestro(maestro: any): Observable<any>{ 
 return this.http.post(`${this.apiUrl}/maestros`, maestro); 
  } 
  
 registrarMateria(materia: any): Observable<any>{ 
 return this.http.post(`${this.apiUrl}/materias`, materia); 
  } 
  
  registrarAlumno(alumno: any): Observable<any>{ 
 return this.http.post(`${this.apiUrl}/alumnos`, alumno); 
  } 
  
crearClase(clase: any): Observable<any>{ 
 return this.http.post(`${this.apiUrl}/clases`, clase); 
  } 


registrarAsistencia(payload: any): Observable<any> { 
 // Payload esperado por API: { claseId: 1, fecha: '2023-10-20', presentes: [1, 2] } 
 return this.http.post(`${this.apiUrl}/asistencias`, payload); 
  }
  
}
