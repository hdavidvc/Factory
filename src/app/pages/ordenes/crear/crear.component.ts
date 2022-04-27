import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogMateriaComponent } from 'src/app/components/dialog-materia/dialog-materia.component';
import { FactoryService } from 'src/app/services/factory.service';

export interface TablaElement {
  id_materia: number;
  materia: string;
  cantidad: number;

}

const ELEMENT_DATA: TablaElement[] = [

];

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {

  displayedColumns = ['ID', 'Materia prima', 'Cantidad'];
  dataSource:TablaElement[] = [];
  empleado:any = [];
  proveedor:any = [];
  
  constructor(public dialog: MatDialog, private service: FactoryService) { 

    // this.dataSource = JSON.parse(localStorage.getItem('materias') || " [{}]");
    // this.dataSource.shift();

    this.service.getEmpleados().subscribe(emp => {
      this.empleado = emp;
      console.log(this.empleado);
    });

    this.service.getProveedores().subscribe(emp => {
      this.proveedor = emp;
    });

  }

  ngOnInit(): void {
  }
  detalle =  {    
        id_materia: 0,
        cantidad: 0,
        id_orden: 0
  }
  orden = {
      id_proveedor: 0,
      id_empleado: 0,
      fecha: ""
  }
  
  guardar() {
    this.service.setOrden(this.orden).subscribe(resp => {
      console.log(resp.id);
      this.dataSource.forEach(ma => {
        this.detalle.id_materia = ma.id_materia;
        this.detalle.cantidad = ma.cantidad;
        this.detalle.id_orden = resp.id;
        this.service.setDetelles(this.detalle).subscribe(deta => {
              console.log(this.detalle);
              console.log(deta);
        })
      })
      
    })
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
      
      if(result) {
        this.dataSource.push( result);
        localStorage.setItem('materias',JSON.stringify(this.dataSource))
        this.dataSource = JSON.parse(localStorage.getItem('materias') || " [{}]");
        console.log(this.dataSource);
      }
      
    });
  }
}
