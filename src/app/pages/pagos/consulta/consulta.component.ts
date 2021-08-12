import { Component, OnInit } from '@angular/core';

export interface TablaElement {
  Cliente: string;
  Recibo: number;
  Prestamo: number;
  Monto: number;
  Fecha: string;
  Usuario: string;
}

const ELEMENT_DATA: TablaElement[] = [
  {Cliente: 'David', Recibo: 1,  Prestamo: 2, Monto: 100000.00, Fecha: '4/6/2021', Usuario: 'David'},
  {Cliente: 'Hector',Recibo: 2,  Prestamo: 2, Monto: 100000.00, Fecha: '4/6/2021', Usuario: 'Hector'},
  {Cliente: 'David', Recibo: 3,  Prestamo: 2, Monto: 100000.00, Fecha: '4/6/2021', Usuario: 'David'},
  {Cliente: 'David', Recibo: 4,  Prestamo: 2, Monto: 100000.00, Fecha: '4/6/2021', Usuario: 'David'},
  {Cliente: 'David', Recibo: 5,  Prestamo: 2, Monto: 100000.00, Fecha: '4/6/2021', Usuario: 'David'},
  {Cliente: 'David', Recibo: 6,  Prestamo: 2, Monto: 100000.00, Fecha: '4/6/2021', Usuario: 'David'},
  {Cliente: 'David', Recibo: 7,  Prestamo: 2, Monto: 100000.00, Fecha: '4/6/2021', Usuario: 'David'},
  {Cliente: 'David', Recibo: 8,  Prestamo: 2, Monto: 100000.00, Fecha: '4/6/2021', Usuario: 'David'},
  {Cliente: 'David', Recibo: 9,  Prestamo: 2, Monto: 100000.00, Fecha: '4/6/2021', Usuario: 'David'},
];

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaCobroComponent implements OnInit {

  displayedColumns = ['Cliente', 'Recibo', 'Prestamo', 'Monto', 'Fecha', 'Usuario'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
