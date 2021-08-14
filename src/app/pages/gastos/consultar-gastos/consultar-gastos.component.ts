import { Component, OnInit } from '@angular/core';

export interface TablaElement {
  ID: number;
  Monto: number;
  Nota: string;
  Fecha: string;
  Gasto: string;
}

const ELEMENT_DATA: TablaElement[] = [
  {ID: 1, Monto: 4690.00 , Nota: 'Gasolina', Fecha: '6/4/2021', Gasto: 'Gasolina'},
  {ID: 2, Monto: 4690.00 , Nota: 'Alquiler', Fecha: '6/4/2021', Gasto: 'Alquiler'},
  {ID: 3, Monto: 4690.00 , Nota: 'Alquiler', Fecha: '6/4/2021', Gasto: 'Alquiler'},
  {ID: 4, Monto: 4690.00 , Nota: 'Gasolina', Fecha: '6/4/2021', Gasto: 'Gasolina'},

];

@Component({
  selector: 'app-consultar-gastos',
  templateUrl: './consultar-gastos.component.html',
  styleUrls: ['./consultar-gastos.component.css']
})
export class ConsultarGastosComponent implements OnInit {
  displayedColumns = ['ID', 'Monto', 'Nota','Fecha','Gasto'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
