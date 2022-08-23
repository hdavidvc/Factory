import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
import { DialogRecibirComponent } from 'src/app/components/dialog-recibir/dialog-recibir.component';
import { FactoryService } from '../../../services/factory.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

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
  
  constructor(private service:FactoryService, public dialog: MatDialog, private route: Router) {
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
    this.service.getOrdenP().subscribe( orden => {

      
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
      if(result.estado == 'Recibida') {

        Swal.fire({
          title: 'Recibida',
          showDenyButton: true,
          confirmButtonText: 'Si',
          denyButtonText: `No`,
          text: 'Quieres almacenarla?',
          icon: 'question',
        }).then((result) => {
          /* Read more about isConfirmed, isDenied below */
          if (result.isConfirmed) {
            // Swal.fire('Saved!', '', 'success')

            this.route.navigateByUrl('/ordenes/almacenar')
          } else if (result.isDenied) {
            Swal.fire('Orden actualizada', '', 'success')
          }
        })
      
      } else {
        Swal.fire('Orden actualizada', '', 'success')
      }
      this.service.updateOrden(result).subscribe(resp=> {
        console.log(resp);
      })
       ELEMENT_DATA = await this.ObtenerOrdenes();
       setTimeout(() => {
        this.dataSource = ELEMENT_DATA      
        this.progress = false;
        console.log(this.dataSource);
      }, 200);  

     
      ELEMENT_DATA = this.ObtenerOrdenes();
    });
  }
}
