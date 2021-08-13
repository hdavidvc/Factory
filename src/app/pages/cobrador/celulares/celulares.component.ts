import { Component, OnInit } from '@angular/core';

export interface TablaElement {
  ID: number;
  Codigo: number;
  Descripcion: String;
  Activo: string;
  Activar: string;
  Anular: string;
  Eliminar: string;
}

const ELEMENT_DATA: TablaElement[] = [
  {ID: 1, Codigo: 1357908642, Descripcion: 'Celular de XX', Activo: 'False', Activar: '', Anular: '' , Eliminar: ''},
  {ID: 2, Codigo: 1357908642, Descripcion: 'Celular de XX', Activo: 'True', Activar: '', Anular: '' , Eliminar: ''},
  {ID: 3, Codigo: 1357908642, Descripcion: 'Celular de XX', Activo: 'False', Activar: '', Anular: '' , Eliminar: ''},
  {ID: 4, Codigo: 1357908642, Descripcion: 'Celular de XX', Activo: 'True', Activar: '', Anular: '' , Eliminar: ''},
  {ID: 5, Codigo: 1357908642, Descripcion: 'Celular de XX', Activo: 'False', Activar: '', Anular: '' , Eliminar: ''},
  {ID: 6, Codigo: 1357908642, Descripcion: 'Celular de XX', Activo: 'True', Activar: '', Anular: '' , Eliminar: ''},
  {ID: 7, Codigo: 1357908642, Descripcion: 'Celular de XX', Activo: 'False', Activar: '', Anular: '' , Eliminar: ''},
  {ID: 8, Codigo: 1357908642, Descripcion: 'Celular de XX', Activo: 'True', Activar: '', Anular: '' , Eliminar: ''},
  {ID: 9, Codigo: 1357908642, Descripcion: 'Celular de XX', Activo: 'False', Activar: '', Anular: '' , Eliminar: ''},
];

@Component({
  selector: 'app-celulares',
  templateUrl: './celulares.component.html',
  styleUrls: ['./celulares.component.css']
})
export class CelularesComponent implements OnInit {
  displayedColumns = ['ID', 'Codigo', 'Descripcion', 'Activo','Activar', 'Anular', 'Eliminar'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
