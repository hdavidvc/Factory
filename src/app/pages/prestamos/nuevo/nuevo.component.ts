import { Component, OnInit } from '@angular/core';

export interface TablaElement {
  Numero: number;
  Cuota: number;
  Capital: number;
  Interes: number;
  Seguro: number;
  Balance: number;
  Vence: string;
}

const ELEMENT_DATA: TablaElement[] = [
  {Numero: 1, Cuota: 1100.00, Capital: 100000.00, Interes: 100.00, Seguro: 0.00, Balance: 9900.00, Vence: '4/8/2021'},
  {Numero: 2, Cuota: 1100.00, Capital: 100000.00, Interes: 100.00, Seguro: 0.00, Balance: 8800.00, Vence: '4/8/2021'},
  {Numero: 3, Cuota: 1100.00, Capital: 100000.00, Interes: 100.00, Seguro: 0.00, Balance: 7700.00, Vence: '4/8/2021'},
  {Numero: 4, Cuota: 1100.00, Capital: 100000.00, Interes: 100.00, Seguro: 0.00, Balance: 6600.00, Vence: '4/8/2021'},
  {Numero: 5, Cuota: 1100.00, Capital: 100000.00, Interes: 100.00, Seguro: 0.00, Balance: 5500.00, Vence: '4/8/2021'},
  {Numero: 6, Cuota: 1100.00, Capital: 100000.00, Interes: 100.00, Seguro: 0.00, Balance: 4400.00, Vence: '4/8/2021'},
  {Numero: 7, Cuota: 1100.00, Capital: 100000.00, Interes: 100.00, Seguro: 0.00, Balance: 3300.00, Vence: '4/8/2021'},
  {Numero: 8, Cuota: 1100.00, Capital: 100000.00, Interes: 100.00, Seguro: 0.00, Balance: 2200.00, Vence: '4/8/2021'},
  {Numero: 9, Cuota: 1100.00, Capital: 100000.00, Interes: 100.00, Seguro: 0.00, Balance: 1100.00, Vence: '4/8/2021'},
  {Numero: 10, Cuota: 1100.00, Capital:100000.00, Interes: 100.00, Seguro: 0.00, Balance: 0.00, Vence: '4/8/2021'},
];

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class PrestamoNuevoComponent implements OnInit {
  
  displayedColumns = ['Numero', 'Cuota', 'Capital', 'Interes', 'Seguro', 'Balance', 'Vence'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
