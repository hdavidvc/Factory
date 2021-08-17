import { Component, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  ciudad: string;
  municipio: string;
  barrio: string;
  calle: string;
  casa: string;
}

@Component({
  selector: 'app-dialog-direccion',
  templateUrl: './dialog-direccion.component.html',
  styleUrls: ['./dialog-direccion.component.css']
})
export class DialogDireccionComponent  {

  constructor(
    public dialogRef: MatDialogRef<DialogDireccionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
