import { Component, OnInit } from '@angular/core';
import { FactoryService } from '../../../services/factory.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogDireccionComponent } from 'src/app/components/dialog-direccion/dialog-direccion.component';
// import { router } from '@angular/router';
import { map } from 'rxjs/operators';

export interface TablaElement {
  descripcion: string;
  estado: string;
  id_almacen: string;

}

const ELEMENT_DATA: TablaElement[] = [
  
];

@Component({
  selector: 'app-estanteria',
  templateUrl: './estanteria.component.html',
  styleUrls: ['./estanteria.component.css']
})
export class EstanteriaComponent implements OnInit {

  displayedColumns = ['Descripcion', 'Estado', 'Almacen'];
  dataSource:TablaElement[] = [];

  public  almacenes:Array<any>= [];

  constructor(private service: FactoryService, public dialog: MatDialog) { 
    this.service.getAlmacenes().subscribe(resp => {
      this.almacenes = resp;
    })
    this.obtenerEstanterias();
  }

  ngOnInit(): void {
  }
    
  estanteria: any = {
    "descripcion": "",
    "estado": "",
    "id_almacen": 0
}
   async guardar() {
      this.dataSource.push(this.estanteria);
      this.estanteria.id_almacen = parseInt(this.estanteria.id_almacen.toString());      
      
      this.service.setEstanteria(this.estanteria).subscribe(resp=> {          
        console.log(resp);
      });  

      this.obtenerEstanterias();
      console.log(this.dataSource);
    }
    obtenerEstanterias():any {
      this.service.getEstanteria().subscribe((resp:any) => {
        resp.forEach((element:any, i:number) => {

          const find = this.almacenes.find(al => element.id_almacen === al.id);
          resp[i].id_almacen = find.descripcion;
        });
        this.dataSource = resp;
      })
    }


}
