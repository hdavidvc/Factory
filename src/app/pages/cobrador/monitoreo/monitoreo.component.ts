import { Component, OnInit } from '@angular/core';

export interface TablaElement {
  Monto_cobrar: number;
  Monto_cobrado: number;
  Monto_depositado: number;
  Cliente_visitar: number;
  Cliente_visitados: number;
}

const ELEMENT_DATA: TablaElement[] = [
  {Monto_cobrar: 1000, Monto_cobrado: 500, Monto_depositado: 500, Cliente_visitar: 5, Cliente_visitados: 4},
  {Monto_cobrar: 2000, Monto_cobrado: 500, Monto_depositado: 500, Cliente_visitar: 5, Cliente_visitados: 4},
  {Monto_cobrar: 3000, Monto_cobrado: 500, Monto_depositado: 500, Cliente_visitar: 5, Cliente_visitados: 4},
  {Monto_cobrar: 4000, Monto_cobrado: 500, Monto_depositado: 500, Cliente_visitar: 5, Cliente_visitados: 4},
  {Monto_cobrar: 5000, Monto_cobrado: 500, Monto_depositado: 500, Cliente_visitar: 5, Cliente_visitados: 4},
  {Monto_cobrar: 6000, Monto_cobrado: 500, Monto_depositado: 500, Cliente_visitar: 5, Cliente_visitados: 4},
  {Monto_cobrar: 7000, Monto_cobrado: 500, Monto_depositado: 500, Cliente_visitar: 5, Cliente_visitados: 4},
  {Monto_cobrar: 8000, Monto_cobrado: 500, Monto_depositado: 500, Cliente_visitar: 5, Cliente_visitados: 4},
  {Monto_cobrar: 9000, Monto_cobrado: 500, Monto_depositado: 500, Cliente_visitar: 5, Cliente_visitados: 4},
];

@Component({
  selector: 'app-monitoreo',
  templateUrl: './monitoreo.component.html',
  styleUrls: ['./monitoreo.component.css']
})
export class MonitoreoComponent implements OnInit {

  displayedColumns = ['Monto_cobrar', 'Monto_cobrado', 'Monto_depositado', 'Cliente_visitar', 'Cliente_visitados'];
  dataSource = ELEMENT_DATA;

  private mostrar = false;
  public option: any = 'Nombre';
  constructor() { }

  ngOnInit(): void {
  }
  cambiar(event: any) {
    console.log(event);
    this.option = event;
  }
}
