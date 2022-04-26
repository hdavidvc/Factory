import { Component, OnInit } from '@angular/core';

export interface TablaElement {
  ID: number;
  Materia_prima: string;
  Cantidad: number;
  // Saldo_Int: number;
  // Saldo_Cap: number;
  // Mora: number;
  // Vence: string;
  // Total: number;
  // Estatus: string;
  // Elegir: string
}



let ELEMENT_DATA: TablaElement[] =  [];
@Component({
  selector: 'app-producir',
  templateUrl: './producir.component.html',
  styleUrls: ['./producir.component.css']
})

export class ProducirComponent implements OnInit {
  
   displayedColumns = ['ID', 'Materia prima', 'Cantidad'];
   dataSource:TablaElement[] = [];

  constructor() { 
    
    console.log(localStorage.getItem('materia'));
    this.dataSource = JSON.parse(localStorage.getItem('materia') || " [{}]");
  }

  ngOnInit(): void {
  }
  cargar() {
   
    let carga = {ID:6,Materia_prima: "david", Cantidad: 50}    
    this.dataSource.push(carga);
    localStorage.setItem('materia',JSON.stringify(this.dataSource))
    this.dataSource = JSON.parse(localStorage.getItem('materia') || " [{}]");
    console.log(this.dataSource);

  }
}
 