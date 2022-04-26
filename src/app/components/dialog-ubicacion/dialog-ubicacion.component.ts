import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FactoryService } from '../../services/factory.service';

export interface DialogData {
  estanteria: string;
  nivel: string;
  id_almacen: string;
}

@Component({
  selector: 'app-dialog-ubicacion',
  templateUrl: './dialog-ubicacion.component.html',
  styleUrls: ['./dialog-ubicacion.component.css']
})
export class DialogUbicacionComponent implements OnInit {
  
  public  almacenes:Array<any>= [];
  public  estanterias:Array<any>= [];

  constructor(public dialogRef: MatDialogRef<DialogUbicacionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, private service: FactoryService) {

      this.service.getAlmacenes().subscribe(resp => {
      this.almacenes = resp;
    })

   
  }

  ngOnInit(): void {
  }
  onNoClick(): void {
    this.dialogRef.close();

  }

  Bestante(event:any) {
    let idE = parseInt(event);
    this.service.getEstanteriaBy(idE).subscribe((resp:any) => {
      this.estanterias = resp;
   })
  }

}
