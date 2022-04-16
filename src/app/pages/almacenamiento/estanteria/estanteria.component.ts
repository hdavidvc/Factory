import { Component, OnInit } from '@angular/core';
import { FactoryService } from '../../../services/factory.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogDireccionComponent } from 'src/app/components/dialog-direccion/dialog-direccion.component';
// import { router } from '@angular/router';

export interface TablaElement {
  Descripcion: string;
  Estado: string;
  Almacen: string;

}

const ELEMENT_DATA: TablaElement[] = [
  {Descripcion: "Estanteria 1", Estado: "Disponible",Almacen: "almacen 1"},
  {Descripcion: "Estanteria 2", Estado: "Ocupado",Almacen: "almacen 2"},
  {Descripcion: "Estanteria 3", Estado: "Disponible",Almacen: "almacen 3"},
  {Descripcion: "Estanteria 4", Estado: "Ocupado",Almacen: "almacen 4"},
  {Descripcion: "Estanteria 5", Estado: "Disponible",Almacen: "almacen 5"},
  {Descripcion: "Estanteria 6", Estado: "Ocupado",Almacen: "almacen 6"},
  {Descripcion: "Estanteria 7", Estado: "Disponible",Almacen: "almacen 7"},
  {Descripcion: "Estanteria 8", Estado: "Ocupado",Almacen: "almacen 8"},
  {Descripcion: "Estanteria 9", Estado: "Disponible",Almacen: "almacen 9"},
];

@Component({
  selector: 'app-estanteria',
  templateUrl: './estanteria.component.html',
  styleUrls: ['./estanteria.component.css']
})
export class EstanteriaComponent implements OnInit {

  displayedColumns = ['Descripcion', 'Estado', 'Almacen'];
  dataSource = ELEMENT_DATA;

  constructor(private service: FactoryService, public dialog: MatDialog) { }

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
    'tipo_persona': 'estanteria'
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
