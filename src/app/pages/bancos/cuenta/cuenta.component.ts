import { Component, OnInit } from '@angular/core';

export interface TablaElement {
  ID: number;
  Banco: string;
  No_cuenta: number;
  Nombre: string;
  Acciones: string;
}

const ELEMENT_DATA: TablaElement[] = [
  {ID: 1, Banco: 'Banco popular', No_cuenta: 14570433457, Nombre: 'cuenta de ahorros', Acciones: ''},
  {ID: 2, Banco: 'Banco reservas', No_cuenta: 14570433457, Nombre: 'cuenta de ahorros', Acciones: ''},
  {ID: 3, Banco: 'Banco scotiabank', No_cuenta: 14570433457, Nombre: 'cuenta de ahorros', Acciones: ''},
  {ID: 4, Banco: 'Banco ademi', No_cuenta: 14570433457, Nombre: 'cuenta de ahorros', Acciones: ''},

];

@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.component.html',
  styleUrls: ['./cuenta.component.css']
})
export class CuentaComponent implements OnInit {
  displayedColumns = ['ID', 'Banco', 'No_cuenta','Nombre','Acciones'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
