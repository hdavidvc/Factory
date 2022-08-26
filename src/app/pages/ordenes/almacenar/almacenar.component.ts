import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
import { DialogAlmacenarComponent } from 'src/app/components/dialog-almacenar/dialog-almacenar.component';
import { DialogEstadoComponent } from 'src/app/components/dialog-estado/dialog-estado.component';
import { FactoryService } from 'src/app/services/factory.service';
import Swal from 'sweetalert2';
export interface TablaElement {
  id: number;
  proveedor: string;
  fecha: string;
  estado: string
  // Accion: string;

}

let ELEMENT_DATA: TablaElement[] = [

];



@Component({
  selector: 'app-almacenar',
  templateUrl: './almacenar.component.html',
  styleUrls: ['./almacenar.component.css']
})
export class AlmacenarComponent implements OnInit {

  displayedColumns = ['ID', 'Proveedor', 'Fecha', 'Estado', 'Accion'];

  
  dataSource = ELEMENT_DATA;
   
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
  
  ObtenerOrdenes() {
    let provicional:any
    let proA:any = []
    this.service.getOrdenR().subscribe( orden => {
      console.log(orden);
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
    const dialogRef = this.dialog.open(DialogAlmacenarComponent, {
      width: '700px',
      data: {id: this.idOr}
    });

    dialogRef.afterClosed().subscribe(async result => {  
      console.log(result);   


      result.almacen.forEach((element:any,i:any) => {
        console.log(element);
        this.service.getAlmacen(parseInt(element)).subscribe( el => {
          console.log(el);
          if(el[i].disponible<result.detalle[i].cantidad) {
            Swal.fire('No hay espacio', '', 'success')
          } else {

            this.service.updateOrden(result).subscribe(async resp=> {
              ELEMENT_DATA = await this.ObtenerOrdenes();
             setTimeout(() => {
              this.dataSource = ELEMENT_DATA      
              this.progress = false;
            }, 200);  
            Swal.fire('Orden actualizada', '', 'success')
            // Swal.fire({
            //   title: 'Almacenada',
            //   showDenyButton: true,
            //   confirmButtonText: 'Si',
            //   denyButtonText: `No`,
            //   text: 'Queda espacio?',
            //   icon: 'question',
            // }).then((resultA) => {
            //   /* Read more about isConfirmed, isDenied below */
            //   if (resultA.isConfirmed) {
            //     Swal.fire('Orden actualizada', '', 'success')
            //     // this.route.navigateByUrl('/ordenes/almacenar')
            //   } else if (resultA.isDenied) {            
               
            //       console.log(result);
            //       const dialogRef = this.dialog.open(DialogEstadoComponent, {
            //         width: '700px',
            //         data: {id: result}
            //       });
              
            //       dialogRef.afterClosed().subscribe(async resultC => {     
            //         console.log(resultC);
            //         console.log(resultC.id);
            //         console.log( resultC.id.almacen);
            //         resultC.id.almacen.forEach((element:any) => {
            //           console.log(element);
            //           this.service.updateAlmacen2(element).subscribe(e => {});
                        
            //         });
            //         let temp = {id:resultC.id.id}
                                   
                               
            //       });
            //   }
            //   })
            })
          }
        })
        
          
      });


     
      


      })
       
      // console.log(result);
      
    };
  }
