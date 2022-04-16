import { Component, OnInit } from '@angular/core';

export interface TablaElement {
  No: number;
  Cuota: number;
  Saldo: number;
  Saldo_Int: number;
  Saldo_Cap: number;
  Mora: number;
  Vence: string;
  Total: number;
  Estatus: string;
  Elegir: string
}

const ELEMENT_DATA: TablaElement[] = [
  {No: 1, Cuota: 3500.00, Saldo: 3500.00, Saldo_Int: 807.00, Saldo_Cap: 2693.00, Mora: 9900.00, Vence: '4/8/2021', Total: 3500.00, Estatus: 'Atrasada', Elegir: ''},
  {No: 2, Cuota: 3500.00, Saldo: 3500.00, Saldo_Int: 807.00, Saldo_Cap: 2693.00, Mora: 8800.00, Vence: '4/8/2021', Total: 3500.00, Estatus: 'Atrasada', Elegir: ''},
  {No: 3, Cuota: 3500.00, Saldo: 3500.00, Saldo_Int: 807.00, Saldo_Cap: 2693.00, Mora: 7700.00, Vence: '4/8/2021', Total: 3500.00, Estatus: 'Atrasada', Elegir: ''},
  {No: 4, Cuota: 3500.00, Saldo: 3500.00, Saldo_Int: 807.00, Saldo_Cap: 2693.00, Mora: 6600.00, Vence: '4/8/2021', Total: 3500.00, Estatus: 'Atrasada', Elegir: ''},
  {No: 5, Cuota: 3500.00, Saldo: 3500.00, Saldo_Int: 807.00, Saldo_Cap: 2693.00, Mora: 5500.00, Vence: '4/8/2021', Total: 3500.00, Estatus: 'Atrasada', Elegir: ''},
  {No: 6, Cuota: 3500.00, Saldo: 3500.00, Saldo_Int: 807.00, Saldo_Cap: 2693.00, Mora: 4400.00, Vence: '4/8/2021', Total: 3500.00, Estatus: 'Atrasada', Elegir: ''},
  {No: 7, Cuota: 3500.00, Saldo: 3500.00, Saldo_Int: 807.00, Saldo_Cap: 2693.00, Mora: 3300.00, Vence: '4/8/2021', Total: 3500.00, Estatus: 'Atrasada', Elegir: ''},
  {No: 8, Cuota: 3500.00, Saldo: 3500.00, Saldo_Int: 807.00, Saldo_Cap: 2693.00, Mora: 2200.00, Vence: '4/8/2021', Total: 3500.00, Estatus: 'Atrasada', Elegir: ''},
  {No: 9, Cuota: 3500.00, Saldo: 3500.00, Saldo_Int: 807.00, Saldo_Cap: 2693.00, Mora: 1100.00, Vence: '4/8/2021', Total: 3500.00, Estatus: 'Atrasada', Elegir: ''},
];


@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  displayedColumns = ['No', 'Cuota', 'Saldo', 'Saldo_Int', 'Saldo_Cap', 'Mora', 'Vence', 'Total', 'Estatus', 'Elegir'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}
