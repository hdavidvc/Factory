import { Component, OnInit } from '@angular/core';



const ELEMENT_DATA: any = [
  {Fecha: '9/8/2021', Anular: ''},
  {Fecha: '9/8/2021', Anular: ''},
  {Fecha: '9/8/2021', Anular: ''},
  {Fecha: '9/8/2021', Anular: ''},
  {Fecha: '9/8/2021', Anular: ''},
  {Fecha: '9/8/2021', Anular: ''},
  {Fecha: '9/8/2021', Anular: ''},
  {Fecha: '9/8/2021', Anular: ''},
  {Fecha: '9/8/2021', Anular: ''},
  {Fecha: '9/8/2021', Anular: ''},
];

@Component({
  selector: 'app-festivos',
  templateUrl: './festivos.component.html',
  styleUrls: ['./festivos.component.css']
})
export class FestivosComponent implements OnInit {

  displayedColumns = ['Fecha', 'Anular'];
  // footerColumns = ['Anular', 'Interes',  'Balance'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
