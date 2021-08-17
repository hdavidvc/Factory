import { Component, OnInit } from '@angular/core';

export interface TablaElement {
  ID: number;
  Monto: number;
  Fecha: string;
  Hora: string;
  Usuario: string;
  Banco: string;
  No: number;
  
}

const ELEMENT_DATA: TablaElement[] = [
  {ID: 1000, Monto: 500, Fecha: '6/4/2021', Hora: '04:37:20', Usuario: 'hdavidvc', Banco: 'Banco popular', No : 42345678},
  {ID: 2000, Monto: 500, Fecha: '6/4/2021', Hora: '04:37:20', Usuario: 'hdavidvc', Banco: 'Banco popular', No : 42345678},
  {ID: 3000, Monto: 500, Fecha: '6/4/2021', Hora: '04:37:20', Usuario: 'hdavidvc', Banco: 'Banco popular', No : 42345678},
  {ID: 4000, Monto: 500, Fecha: '6/4/2021', Hora: '04:37:20', Usuario: 'hdavidvc', Banco: 'Banco popular', No : 42345678},
  {ID: 5000, Monto: 500, Fecha: '6/4/2021', Hora: '04:37:20', Usuario: 'hdavidvc', Banco: 'Banco popular', No : 42345678},
  {ID: 6000, Monto: 500, Fecha: '6/4/2021', Hora: '04:37:20', Usuario: 'hdavidvc', Banco: 'Banco popular', No : 42345678},
  {ID: 7000, Monto: 500, Fecha: '6/4/2021', Hora: '04:37:20', Usuario: 'hdavidvc', Banco: 'Banco popular', No : 42345678},
  {ID: 8000, Monto: 500, Fecha: '6/4/2021', Hora: '04:37:20', Usuario: 'hdavidvc', Banco: 'Banco popular', No : 42345678},
  {ID: 9000, Monto: 500, Fecha: '6/4/2021', Hora: '04:37:20', Usuario: 'hdavidvc', Banco: 'Banco popular', No : 42345678},
];

@Component({
  selector: 'app-consulta-deposito',
  templateUrl: './consulta-deposito.component.html',
  styleUrls: ['./consulta-deposito.component.css']
})
export class ConsultaDepositoComponent implements OnInit {

  displayedColumns = ['ID', 'Monto', 'Fecha', 'Usuario', 'Banco'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
