import { Component, OnInit } from '@angular/core';

export interface TablaElement {
  ID: number;
  Monto: number;
  Fecha: string;
  Hora: string;
  Cliente: string;
  Usuario: string;
  Motivo: string;
}
var today = new Date();

var time: string = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds() || '';
const ELEMENT_DATA: TablaElement[] = [
  {ID: 1, Monto: 6000.00, Fecha: '4/8/2021', Hora: time, Cliente: 'Samuel Perez', Usuario: 'hdavidvc' , Motivo: 'Error digitacion'},
  {ID: 2, Monto: 6000.00, Fecha: '4/8/2021', Hora: time, Cliente: 'Samuel Perez',  Usuario: 'lesamjames' , Motivo: 'Error digitacion'},
  {ID: 3, Monto: 6000.00, Fecha: '4/8/2021', Hora: time, Cliente: 'Samuel Perez', Usuario: 'hdavidvc' , Motivo: 'Cliente desaparecido'},
  {ID: 4, Monto: 6000.00, Fecha: '4/8/2021', Hora: time, Cliente: 'Samuel Perez', Usuario: 'lesamjames' , Motivo: 'Cliente desaparecido'},
  {ID: 5, Monto: 6000.00, Fecha: '4/8/2021', Hora: time, Cliente: 'Samuel Perez', Usuario: 'hdavidvc' , Motivo: 'Cliente desaparecido'},
  {ID: 6, Monto: 6000.00, Fecha: '4/8/2021', Hora: time, Cliente: 'Samuel Perez', Usuario: 'lesamjames' , Motivo: 'Cliente desaparecido'},
  {ID: 7, Monto: 6000.00, Fecha: '4/8/2021', Hora: time, Cliente: 'Samuel Perez', Usuario: 'hdavidvc' , Motivo: 'Cliente desaparecido'},
  {ID: 8, Monto: 6000.00, Fecha: '4/8/2021', Hora: time, Cliente: 'Samuel Perez', Usuario: 'lesamjames' , Motivo: 'Cliente desaparecido'},
  {ID: 9, Monto: 6000.00, Fecha: '4/8/2021', Hora: time, Cliente: 'Samuel Perez', Usuario: 'hdavidvc' , Motivo: 'Cliente desaparecido'},
];

@Component({
  selector: 'app-cancelados',
  templateUrl: './cancelados.component.html',
  styleUrls: ['./cancelados.component.css']
})
export class CanceladosComponent implements OnInit {
  public inicio: any;
  lado = {
    numero: 0,
  };
  displayedColumns = ['ID', 'Monto', 'Fecha', 'Hora','Cliente', 'Usuario', 'Motivo'];
  dataSource = ELEMENT_DATA;

  constructor() {
    this.inicio = '2021-04-06';
   }

  ngOnInit(): void {
  }
  cambiar(event: any) {
    console.log(this.inicio);
  }

}
