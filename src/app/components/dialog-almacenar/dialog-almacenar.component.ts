import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FactoryService } from 'src/app/services/factory.service';

export interface DialogData {
  id: number,
  estado: string
}

@Component({
  selector: 'app-dialog-almacenar',
  templateUrl: './dialog-almacenar.component.html',
  styleUrls: ['./dialog-almacenar.component.css']
})
export class DialogAlmacenarComponent implements OnInit {

  dataSource:any = [
    {},{}
  ];
  ubicaciones:any = [];
  displayedColumns = ['ID', 'Materia prima', 'Cantidad', 'Ubicacion'];
  
  constructor(public dialogRef: MatDialogRef<DialogAlmacenarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, private service: FactoryService) {

      this.service.getDetelle(data.id).subscribe( detalle => {
        console.log(detalle);
        this.dataSource = detalle;
        this.getUbicaciones();
        console.log(this.ubicaciones);
      })
     }

  ngOnInit(): void {
  }
  onNoClick(): void {
   
    this.dialogRef.close();

  }
  almacenar() {
    
  }

  getUbicaciones() {
    this.dataSource.forEach((element:any,i:number) => {
      this.service.getUbicacion(element.id).subscribe(resp => {
        this.ubicaciones.push({id:resp[i].id,descripcion:resp[i].descripcion})
      })
    });
    
  }
}
