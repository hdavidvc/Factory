import { Component, OnInit } from '@angular/core';

export interface TablaElement {
  ID: number;
  Descripcion: string;
  Editar: string;
}

const ELEMENT_DATA: TablaElement[] = [
  {ID: 1, Descripcion: 'Energia electrica', Editar: ''},
  {ID: 2, Descripcion: 'Gasolina', Editar: ''},
  {ID: 3, Descripcion: 'Agua', Editar: ''},
  {ID: 4, Descripcion: 'Legal', Editar: ''},

];

@Component({
  selector: 'app-tipos-gastos',
  templateUrl: './tipos-gastos.component.html',
  styleUrls: ['./tipos-gastos.component.css']
})
export class TiposGastosComponent implements OnInit {
  displayedColumns = ['ID', 'Descripcion', 'Editar'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
