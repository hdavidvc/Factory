import { Component, OnInit } from '@angular/core';

export interface TablaElement {
  ID: number;
  Descripcion: string;
  Acciones: string;
}

const ELEMENT_DATA: TablaElement[] = [
  {ID: 1, Descripcion: 'Banco popular', Acciones: ''},
  {ID: 2, Descripcion: 'Banco reservas', Acciones: ''},
  {ID: 3, Descripcion: 'Banco scotiabank', Acciones: ''},
  {ID: 4, Descripcion: 'Banco ademi', Acciones: ''},

];

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  displayedColumns = ['ID', 'Descripcion', 'Acciones'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
