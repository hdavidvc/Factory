import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Cliente } from '../interfaces/cliente';

@Injectable({
  providedIn: 'root'
})
export class PrestamosService {

  constructor(private http: HttpClient) {}

  getPersona() {
    // return this.http.get('http://localhost:8080/api/direccion?desde=1');
    return this.http.get<any>('/api/persona');
  }

  newPersona(user:any) {
    // return this.http.post('http://localhost:8080/api/direccion',dir);
    return this.http.post<any>('/api/persona',user);

  }
  newUser(per:any) {
    console.log(per);
    // return this.http.post('http://localhost:8080/api/direccion',dir);
    return this.http.post('/api/usuario',per);

  }
  getUser() {
    // return this.http.get('http://localhost:8080/api/direccion?desde=1');
    return this.http.get<any>('/api/usuario');
  }
  newUsuario(ejecutivo:any) {
return this.http.post<any>('/api/usuario',ejecutivo);
  }
  newCliente(cli:any) {
    console.log(cli);
    // return this.http.post('http://localhost:8080/api/direccion',dir);
    return this.http.post<any>('/api/cliente',cli);
  }
  getCliente() {
    return this.http.get<any>(`/api/cliente`);
  }
  newDireccion(dir:any) {
    // return this.http.post('http://localhost:8080/api/direccion',dir);
    return this.http.post<any>('/api/direccion',dir);

  }
  updateDireccion(dir:any) {
    return this.http.put('http://localhost:8080/api/direccion/610be907528cd6350c822d5e',dir);
  }
  // getCliente(nombre:string) {
  //   return this.http.get<Cliente>(`http://localhost:8081/api/buscar/cliente/${nombre}`).pipe(
  //     map( resp => resp.clientes[0])
  //   );
  // }
  newgarante(garante: any) {
    return this.http.post<any>('/api/garante',garante);
  }
  getGarante() {
    return this.http.get<any>('/api/garante');
  }
getEjecutivo(tipo: any) {
  console.log(tipo);
  return this.http.get<any>(`/api/usuario?tipo_usuario=${tipo}`);
}

newPrestamos(prestamo: any) {
  console.log(prestamo);
  return this.http.post<any>('/api/prestamo',prestamo);
  // return this.http.get('/api/prestamo');
}

getRuta() {
  return this.http.get<any>('/api/ruta');
}
}