import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogMateriaComponent } from 'src/app/components/dialog-materia/dialog-materia.component';
import { FactoryService } from 'src/app/services/factory.service';

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
  
];


@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  

  displayedColumns = ['ID', 'Materia prima','Cantidad'];
  dataSource = ELEMENT_DATA;
  constructor(public dialog: MatDialog, private service: FactoryService) { }

  ngOnInit(): void {
  }
  id_materia:number = 0;
  materia:string = '';
  cantidad: number = 0
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogMateriaComponent, {
      width: '250px',
      data: {id_materia: this.id_materia, materia: this.materia, cantidad: this.cantidad}
    });

    dialogRef.afterClosed().subscribe(result => {     
      console.log(result);
      if(result) {
        this.dataSource.push( result);
        localStorage.setItem('materias',JSON.stringify(this.dataSource))
        this.dataSource = JSON.parse(localStorage.getItem('materias') || " [{}]");
        console.log(this.dataSource);
      }
      
    });
  }

}
