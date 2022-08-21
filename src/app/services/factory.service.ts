import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Cliente } from '../interfaces/cliente';

@Injectable({
  providedIn: 'root'
})
export class FactoryService {

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
  newproveedores(proveedores: any) {
    return this.http.post<any>('/api/proveedores',proveedores);
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
//Empleado
setEmpleado(empleado: any) {
  return this.http.post<any>('http://localhost:8050/api/empleado/',empleado);

}
getEmpleados() {
  return this.http.get<any>('http://localhost:8050/api/empleado/');
}

getEmpleado(id:number) {
  console.log(`http://localhost:8050/api/usuarios/${{id}}`);
  return this.http.get<any>(`http://localhost:8050/api/usuarios/${id}`);
}

//Proveedor
setProveedor(provedor: any) {
  console.log(provedor);
  return this.http.post<any>('http://localhost:8050/api/proveedor/',provedor)
}
getProveedores() {
  return this.http.get<any>('http://localhost:8050/api/proveedor/');
}
getProveedor(id:number) {
  return this.http.get(`http://localhost:8050/api/proveedor/${id}`);
}

//Almacen
setAlmacen(almacen: any) {
  console.log(almacen);
  return this.http.post<any>('http://localhost:8050/api/almacen/',almacen)
}
updateAlmacen(almacen: any) {
  console.log(almacen);
  return this.http.put<any>(`http://localhost:8050/api/almacen/${almacen.id}`,almacen);
}
updateEstanteria(estanteria: any) {
  console.log(estanteria);
  return this.http.put<any>(`http://localhost:8050/api/estanteria/${estanteria.id}`,estanteria);
}

getAlmacenes() {
  return this.http.get<any>(`http://localhost:8050/api/almacen`);
}
getAlmacen(almacen: any) {
  return this.http.get<any>(`http://localhost:8050/api/almacen/${almacen}`);
}
//Estanteria
setEstanteria(estante: any) {
  console.log(estante);
  return this.http.post<any>('http://localhost:8050/api/estanteria/',estante)
}

getEstanteria() {
  return this.http.get<any>(`http://localhost:8050/api/estanteria`);
}
getEstanteriaBy(id:number) {
  return this.http.get<any>(`http://localhost:8050/api/estanteria/${id}`);
}

  //Ubicacion
  setUbicacion(ubicacion: any) {
    return this.http.post<any>('http://localhost:8050/api/ubicacion/',ubicacion)
  }
  getUbicacion(idMa:any) {
    return this.http.get<any>(`http://localhost:8050/api/ubicacion/${idMa}`);
  }

  getUbicaciones() {
    return this.http.get<any>(`http://localhost:8050/api/ubicacion/`);
  }

  //Materia
  setMateria(materia: any) {
    return this.http.post<any>('http://localhost:8050/api/materiaprima/',materia)
  }
  getMaterias() {
    return this.http.get<any>(`http://localhost:8050/api/materiaprima/`);
  }
  getMateria(id: any) {
    return this.http.get<any>(`http://localhost:8050/api/materiaprima/${id}`);
  }

  //ORDEN
  setOrden(orden: any) {
    return this.http.post<any>('http://localhost:8050/api/orden/',orden)
  }
  getOrden() {
    return this.http.get<any>(`http://localhost:8050/api/orden/`);
  }
  getOrdenR() {
    return this.http.get<any>(`http://localhost:8050/api/orden/recibidas/`);
  }
  updateOrden(newO:any) {
    // const {estado} = newO;
    console.log(newO);
    return this.http.put<any>(`http://localhost:8050/api/orden/${newO.id}`,newO);
  }

  //DETALLE
  setDetelles(detalle: any) {
    return this.http.post<any>('http://localhost:8050/api/delletaorden/',detalle)
  }
  getDetelle(id:any) {
    return this.http.get<any>(`http://localhost:8050/api/delletaorden/${id}`);
  }
}