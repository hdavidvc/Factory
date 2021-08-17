import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogDireccionComponent } from 'src/app/components/dialog-direccion/dialog-direccion.component';
import { PrestamosService } from 'src/app/services/prestamos.service';
@Component({
  selector: 'app-garante',
  templateUrl: './garante.component.html',
  styleUrls: ['./garante.component.css']
})
export class GaranteComponent implements OnInit {
  ciudad: string = '';
  municipio: string = '';
  barrio: string = '';
  calle: string = '';
  casa: string = '';

  garante = {
    "lugar_trabajo": "",
    "direccion_trabajo": "",
    "telefono_trabajo": 809,
    "cargo": "",
    "sueldo": 0,
    "otros_ingresos": 0,
    "persona": 0
  };
  persona = {
  "nombre": "",
  "apellido": "",
  "cedula": 0,
  "telefono": 809,
  "id_direccion": 0,
  "estado_civil": ""   
  }
  direccion = {
    'ciudad': 'Bonao',
    'municipio': 'Bonao',
    'barrio': 'Isabela',
    'calle': 50,
    'casa': 5
  }
  direccionFull: string = '';
  constructor(private service: PrestamosService, public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogDireccionComponent, {
      width: '250px',
      data: {ciudad: this.ciudad, municipio: this.municipio, barrio: this.barrio, calle: this.calle, casa: this.casa}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.direccion = result;
      this.direccionFull = 'Casa '+this.direccion.casa + ', Calle ' + this.direccion.calle + ', ' + this.direccion.barrio + ', ' + this.direccion.municipio + ', ' + this.direccion.ciudad;
      // console.log(this.direccion);
    });
  }

  async guardar() {
    console.log('Pulsado');
  
    this.service.newDireccion(this.direccion).subscribe( resp => {
        this.persona.id_direccion = resp.id;
        console.log(resp.id);
  
        this.service.newPersona(this.persona).subscribe(resp => {
          this.garante.persona = resp.id;
            
          this.service.newgarante(this.garante).subscribe( resp => {
            console.log(resp);
  
            this.persona  = {
              "nombre": "",
              "apellido": "",
              "cedula": 0,
              "telefono": 809,
              "id_direccion": 0,
              "estado_civil": ""   
              }
              this.direccionFull = '';
              this.garante = {
                "lugar_trabajo": "",
                "direccion_trabajo": "",
                "telefono_trabajo": 809,
                "cargo": "",
                "sueldo": 0,
                "otros_ingresos": 0,
                "persona": 0,   
              };
          })
          
        })
    })
    
    }
  
}
