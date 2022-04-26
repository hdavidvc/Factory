import { Component, OnInit } from '@angular/core';

export interface TablaElement {
  ID: number;
  Materia_prima: string;
  // Saldo: number;
  // Saldo_Int: number;
  // Saldo_Cap: number;
  // Mora: number;
  // Vence: string;
  // Total: number;
  // Estatus: string;
  // Elegir: string
}

const ELEMENT_DATA: TablaElement[] = [
  {ID: 1, Materia_prima: "3500.00"},
  {ID: 2, Materia_prima: "3500.00"},
  {ID: 3, Materia_prima: "3500.00"},
  {ID: 4, Materia_prima: "3500.00"},
  {ID: 5, Materia_prima: "3500.00"},
];


@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  displayedColumns = ['ID', 'Materia prima'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}
