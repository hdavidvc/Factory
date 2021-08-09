import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PrestamosService {

  constructor(private http: HttpClient) {}

  getPersona() {
    // return this.http.get('http://localhost:8080/api/direccion?desde=1');
    return this.http.get('http://localhost:8081/api/persona');
  }

  newPersona(per:any) {
    // return this.http.post('http://localhost:8080/api/direccion',dir);
    return this.http.post('http://localhost:8081/api/persona',per);

  }
  updateDireccion(dir:any) {
    return this.http.put('http://localhost:8080/api/direccion/610be907528cd6350c822d5e',dir);
  }
}
