import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FactoryService } from 'src/app/services/factory.service';

export interface DialogData {
  id: any,
  estado: string
}

@Component({
  selector: 'app-dialog-estado',
  templateUrl: './dialog-estado.component.html',
  styleUrls: ['./dialog-estado.component.css']
})
export class DialogEstadoComponent implements OnInit {

  almacenes: any[] = [];
  constructor(
    public dialogRef: MatDialogRef<DialogEstadoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, private service: FactoryService) { }

  ngOnInit(): void {
    // console.log(this.data.id.almacen);
    this.data.id.almacen.forEach((element:any,i:any) => {      
      this.data.id.almacen[i] = parseInt(element);
      // console.log( typeof(this.data.id.almacen[i]));
      this.service.getAlmacen(this.data.id.almacen[i]).subscribe(response => {
        if(!this.almacenes.includes(response[0])){
          console.log(this.almacenes);
          console.log(response[0]);
          this.almacenes.push(response[0]);
          // console.log(response[0].id);
          // console.log(response);
        }
      })
      
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
