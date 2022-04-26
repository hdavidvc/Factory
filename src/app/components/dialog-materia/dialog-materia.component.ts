import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FactoryService } from '../../services/factory.service';

export interface DialogData {
  id_materia: string;
  materia: string;
  cantidad: number;
}

@Component({
  selector: 'app-dialog-materia',
  templateUrl: './dialog-materia.component.html',
  styleUrls: ['./dialog-materia.component.css']
})
export class DialogMateriaComponent implements OnInit {
  public  materias:Array<any>= [];

  constructor(public dialogRef: MatDialogRef<DialogMateriaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, private service: FactoryService) {

      this.service.getMaterias().subscribe(resp => {
        this.materias = resp;
        console.log(this.materias);
       
    })
   
  }

  ngOnInit(): void {
  }
  onNoClick(): void {
   
    this.dialogRef.close();

  }
  g(){
    let idData = parseInt(this.data.id_materia)
    this.data.materia = this.materias.find(el =>  el.id === idData).descripcion
    console.log(this.data);
  }
}
