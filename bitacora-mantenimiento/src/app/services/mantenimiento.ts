import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Mantenimiento {

  private apiUrl = 'https://apiservice-aox9.onrender.com/api/servicios';

  constructor(private http: HttpClient) { }

  //1. Obtener todos los servicios
  obtenerServicios(): Observable<any> {
    return this.http.get('${this.apiUrl}');
  }
  
}
