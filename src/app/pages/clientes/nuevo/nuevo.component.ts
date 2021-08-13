import { Component, OnInit } from '@angular/core';
import {ClienteElement } from 'src/app/interfaces/cliente';
import { PrestamosService } from '../../../services/prestamos.service';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent implements OnInit {

  public criterio:string ='';

  cliente: ClienteElement = {
    "_id": "61148b577d4ea92288912b14",
    "lugar_trabajo": "Google.com",
    "direccion_trabajo": "Calle 21, casa 7, Cristo Rey",
    "telefono_trabajo": 8097808081,
    "cargo": "Web Developer",
    "sueldo": 30000,
    "otros_cargos": 5000,
    "correo": "davidrd372@gmail.com",
    "id_persona": {
    "_id": "611169f4195da1264474197e",
    "apellido": "Cabrera",
    "cedula": 3115319034,
    "estado_civil": "soltero",
    "nombre": "David",
    "telefono": 8097808081,
    "__v": 0
    },
    "__v": 0
    };
  constructor(private service: PrestamosService) { }

  ngOnInit(): void {
  }
  guardar() {
    console.log('Pulsado');
  this.service.newCliente(this.cliente).subscribe(resp => {
    console.log(resp);
  })
  }

  consultar(nombre:string) {
    this.service.getCliente(nombre).subscribe(resp => {
      this.cliente = resp;
      console.log(this.cliente );
    })
  }

}
