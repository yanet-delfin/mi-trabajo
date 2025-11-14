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

  //2. Agregar/Registrar servicio
  agregarServicio(datos: any): Observable<any> {
    return this.http.post('${this.apiUrl}', datos);
  }

  //3. Dar de baja
  darDeBaja(id: string, motivoBaja: string): Observable<any> {
    return this.http.patch('${this.apuUrl}/${id}/baja',{ motivoBaja });
  }
  
  //4. Confirmar servicio
  confirmarServicio(id: string, datos: any): Observable<any> {
    return this.http.patch('${this.apiUrl}/${id}/confirmar', datos);
  }

  //5. Finalizar servicio
  finalizarServicio(id: string, datos: any): Observable<any> {
    return this.http.patch('${this.apiUrl}/${id}/terminar', datos);
  }
}
