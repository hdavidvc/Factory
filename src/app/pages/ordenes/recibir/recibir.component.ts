import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
import { DialogRecibirComponent } from 'src/app/components/dialog-recibir/dialog-recibir.component';
import { FactoryService } from '../../../services/factory.service';

export interface TablaElement {
  id: number;
  proveedor: string;
  fecha: string;
  estado: string
  // Accion: string;

}

let ELEMENT_DATA: TablaElement[] = [];


@Component({
  selector: 'app-recibir',
  templateUrl: './recibir.component.html',
  styleUrls: ['./recibir.component.css']
})
export class RecibirComponent implements OnInit {

  displayedColumns = ['ID', 'Proveedor', 'Fecha', 'Estado', 'Accion'];
  
  dataSource:TablaElement[] = [];
  
  constructor(private service:FactoryService, public dialog: MatDialog) {
    ELEMENT_DATA = this.ObtenerOrdenes();
   }

   progress: boolean = true;
  ngOnInit(): void {
    
    setTimeout(() => {
      this.dataSource = ELEMENT_DATA      
      this.progress = false;
    }, 300);
  }
  
  guardar() {

  }

  ObtenerOrdenes() {
    let provicional:any
    let proA:any = []
    this.service.getOrden().subscribe( orden => {
      // console.log(orden);
      orden.forEach((element:any,i:number) => {
        const {id,id_proveedor,fecha,estado} = element;
        // console.log(orden);
        this.service.getProveedor(id_proveedor).subscribe ( (prove:any) => {
        let proveedor = prove[0].nombre;
          // console.log(prove);
          provicional = {id,proveedor,fecha,estado}
          proA.push(provicional);          
        })
      });
      
    })

    return proA;
  }
  idOr:number = 0;
   openDialog(event:any): void {
    this.idOr = event;
    const dialogRef = this.dialog.open(DialogRecibirComponent, {
      width: '700px',
      data: {id: this.idOr}
    });

    dialogRef.afterClosed().subscribe(async result => {     
      this.service.updateOrden(result).subscribe(resp=> {
      })
       ELEMENT_DATA = await this.ObtenerOrdenes();
       setTimeout(() => {
        this.dataSource = ELEMENT_DATA      
        this.progress = false;
      }, 200);  
    });
  }
}
