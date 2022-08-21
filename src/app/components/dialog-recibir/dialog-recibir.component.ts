import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FactoryService } from '../../services/factory.service';

export interface DialogData {
  id: number,
  estado: string
}

@Component({
  selector: 'app-dialog-recibir',
  templateUrl: './dialog-recibir.component.html',
  styleUrls: ['./dialog-recibir.component.css']
})
export class DialogRecibirComponent implements OnInit {
  
  dataSource = [
    {},{}
  ];
  displayedColumns = ['ID', 'Materia prima', 'Cantidad'];
  constructor(public dialogRef: MatDialogRef<DialogRecibirComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, private service: FactoryService) { 

      this.service.getDetelle(data.id).subscribe( detalle => {
        this.dataSource = detalle;
      })
    }

  ngOnInit(): void {
  }
  onNoClick(): void {
   
    this.dialogRef.close();

    

  }

}
