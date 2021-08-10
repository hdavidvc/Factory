import { Component, OnInit } from '@angular/core';

export interface TablaElement {
  Numero: number;
  Cliente: string;
  Monto: number;
  FechaInicio: string;
  Cuotaspendiente: number;
  Balancependiente: number;
  Mora: number;
}

const ELEMENT_DATA: TablaElement[] = [
  {Numero: 1, Cliente: 'David', Monto: 100000.00, FechaInicio: '4/8/2021', Cuotaspendiente: 0.00, Balancependiente: 9900.00, Mora: 0},
  {Numero: 2, Cliente: 'Hector', Monto: 100000.00, FechaInicio: '4/8/2021', Cuotaspendiente: 0.00, Balancependiente: 8800.00, Mora: 0},
  {Numero: 3, Cliente: 'David', Monto: 100000.00, FechaInicio: '4/8/2021', Cuotaspendiente: 0.00, Balancependiente: 7700.00, Mora: 0},
  {Numero: 4, Cliente: 'David', Monto: 100000.00, FechaInicio: '4/8/2021', Cuotaspendiente: 0.00, Balancependiente: 6600.00, Mora: 0},
  {Numero: 5, Cliente: 'David', Monto: 100000.00, FechaInicio: '4/8/2021', Cuotaspendiente: 0.00, Balancependiente: 5500.00, Mora: 0},
  {Numero: 6, Cliente: 'David', Monto: 100000.00, FechaInicio: '4/8/2021', Cuotaspendiente: 0.00, Balancependiente: 4400.00, Mora: 0},
  {Numero: 7, Cliente: 'David', Monto: 100000.00, FechaInicio: '4/8/2021', Cuotaspendiente: 0.00, Balancependiente: 3300.00, Mora: 0},
  {Numero: 8, Cliente: 'David', Monto: 100000.00, FechaInicio: '4/8/2021', Cuotaspendiente: 0.00, Balancependiente: 2200.00, Mora: 0},
  {Numero: 9, Cliente: 'David', Monto: 100000.00, FechaInicio: '4/8/2021', Cuotaspendiente: 0.00, Balancependiente: 1100.00, Mora: 0},
  {Numero: 10, Cliente: 'David', Monto: 100000.00, FechaInicio: '4/8/2021', Cuotaspendiente: 0.00, Balancependiente: 0.00, Mora: 0},
];

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit {

  displayedColumns = ['Numero', 'Cliente', 'Monto', 'Fecha inicio', 'Cuotas pendiente', 'Balance pendiente', 'Mora'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
