import { Component, OnInit } from '@angular/core';
import { PrestamosService } from '../../../services/prestamos.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogDireccionComponent } from 'src/app/components/dialog-direccion/dialog-direccion.component';
// import { router } from '@angular/router';

@Component({
  selector: 'app-ejecutivo',
  templateUrl: './ejecutivo.component.html',
  styleUrls: ['./ejecutivo.component.css']
})
export class EjecutivoComponent implements OnInit {

  constructor(private service: PrestamosService, public dialog: MatDialog) { }

  ngOnInit(): void {
  }
    direccionFull: string = '';
  persona = {
  "nombre": "",
  "apellido": "",
  "cedula": 0,
  "telefono": 809,
  "id_direccion": 0,
  "estado_civil": ""   
  }
  usuario = {
    'usuario': '',
    'contrasena': '',
    'persona': 0,
    'tipo_persona': 'ejecutivo'
  }
   direccion = {
    'ciudad': 'Bonao',
    'municipio': 'Bonao',
    'barrio': 'Isabela',
    'calle': 50,
    'casa': 5
  }
 async guardar() {

  console.log('Pulsado');

  this.service.newDireccion(this.direccion).subscribe( resp => {
      this.persona.id_direccion = resp.id;
      console.log(resp.id);

      this.service.newPersona(this.persona).subscribe(resp => {
        this.usuario.persona = resp.id;
          this.persona  = {
            "nombre": "",
            "apellido": "",
            "cedula": 0,
            "telefono": 809,
            "id_direccion": 0,
            "estado_civil": ""   
            }
            this.direccionFull = '';
  //       this.service.newUsuario(this.usuario).subscribe( resp => {
  //         console.log(resp);

  //         this.persona  = {
  //           "nombre": "",
  //           "apellido": "",
  //           "cedula": 0,
  //           "telefono": 809,
  //           "id_direccion": 0,
  //           "estado_civil": ""   
  //           }
  //           this.direccionFull = '';
  // //            this.usuario = {
  // //   'usuario': '',
  // //   'contrasena': '',
  // //   'persona': 0,
  // //   'tipo_persona': ''
  // // }
  //       })
        
      })
  })
  

  
  }


  ciudad: string = '';
  municipio: string = '';
  barrio: string = '';
  calle: string = '';
  casa: string = '';

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

}
