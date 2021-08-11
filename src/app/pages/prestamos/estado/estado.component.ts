import { Component, OnInit } from '@angular/core';

export interface TablaElement {
  ID: number;
  Monto: number;
  Cuotas: number;
  Monto_cuotas: number;
  Fecha_inicio: string;
  Tipo_saldo: string;
  Estatus: string;
}

const ELEMENT_DATA: TablaElement[] = [
  {ID: 1, Monto: 6000.00, Cuotas: 10, Monto_cuotas: 6000.00, Fecha_inicio: '4/8/2021', Tipo_saldo: 'Semanal' , Estatus: 'Atrasado'},
  {ID: 2, Monto: 6000.00, Cuotas: 10, Monto_cuotas: 6000.00,Fecha_inicio: '4/8/2021',  Tipo_saldo: 'Mensual' , Estatus: 'Atrasado'},
  {ID: 3, Monto: 6000.00, Cuotas: 10, Monto_cuotas: 6000.00, Fecha_inicio: '4/8/2021', Tipo_saldo: 'Semanal' , Estatus: 'Saldado'},
  {ID: 4, Monto: 6000.00, Cuotas: 10, Monto_cuotas: 6000.00, Fecha_inicio: '4/8/2021', Tipo_saldo: 'Mensual' , Estatus: 'Saldado'},
  {ID: 5, Monto: 6000.00, Cuotas: 10, Monto_cuotas: 6000.00, Fecha_inicio: '4/8/2021', Tipo_saldo: 'Semanal' , Estatus: 'Saldado'},
  {ID: 6, Monto: 6000.00, Cuotas: 10, Monto_cuotas: 6000.00, Fecha_inicio: '4/8/2021', Tipo_saldo: 'Mensual' , Estatus: 'Saldado'},
  {ID: 7, Monto: 6000.00, Cuotas: 10, Monto_cuotas: 6000.00, Fecha_inicio: '4/8/2021', Tipo_saldo: 'Semanal' , Estatus: 'Saldado'},
  {ID: 8, Monto: 6000.00, Cuotas: 10, Monto_cuotas: 6000.00, Fecha_inicio: '4/8/2021', Tipo_saldo: 'Mensual' , Estatus: 'Saldado'},
  {ID: 9, Monto: 6000.00, Cuotas: 10, Monto_cuotas: 6000.00, Fecha_inicio: '4/8/2021', Tipo_saldo: 'Semanal' , Estatus: 'Saldado'},
  {ID: 10, Monto: 6000.00, Cuotas: 10, Monto_cuotas: 6000.00,Fecha_inicio: '4/8/2021', Tipo_saldo: 'Mensual' , Estatus: 'Saldado'},
];

@Component({
  selector: 'app-estado',
  templateUrl: './estado.component.html',
  styleUrls: ['./estado.component.css']
})
export class EstadoComponent implements OnInit {

  displayedColumns = ['ID', 'Monto', 'Cuotas', 'Monto_cuotas','Fecha_inicio', 'Tipo_saldo', 'Estatus'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}
