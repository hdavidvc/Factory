import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogDireccionComponent } from 'src/app/components/dialog-direccion/dialog-direccion.component';
import { FactoryService } from 'src/app/services/factory.service';
@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css']
})
export class ProveedoresComponent implements OnInit {
  ciudad: string = '';
  municipio: string = '';
  barrio: string = '';
  calle: string = '';
  casa: string = '';
  direccionFull: string = '';

  proveedores  = {
    "nombre": "",
    "apellido": "",
    "direccion": this.direccionFull,
    "documento": "",
    "telefono": "",
    "correo": ""
}
  direccion = {
    'ciudad': '',
    'municipio': '',
    'barrio': '',
    'calle': 0,
    'casa': 0
  }
  constructor(private service: FactoryService, public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogDireccionComponent, {
      width: '250px',
      data: {ciudad: this.ciudad, municipio: this.municipio, barrio: this.barrio, calle: this.calle, casa: this.casa}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.direccion = result;
      this.proveedores.direccion = 'Casa '+this.direccion.casa + ', Calle ' + this.direccion.calle + ', ' + this.direccion.barrio + ', ' + this.direccion.municipio + ', ' + this.direccion.ciudad;
      // console.log(this.direccion);
    });
  }

  async guardar() {
    console.log('Pulsado');

      this.service.setProveedor(this.proveedores).subscribe( resp => {
        console.log(resp);
      })
  
    // this.service.newDireccion(this.direccion).subscribe( resp => {
    //     this.persona.id_direccion = resp.id;
    //     console.log(resp.id);
  
    //     this.service.newPersona(this.persona).subscribe(resp => {
    //       this.proveedores.persona = resp.id;
            
    //       this.service.newproveedores(this.proveedores).subscribe( resp => {
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
    //           this.proveedores = {
    //             "lugar_trabajo": "",
    //             "direccion_trabajo": "",
    //             "telefono_trabajo": 809,
    //             "cargo": "",
    //             "sueldo": 0,
    //             "otros_ingresos": 0,
    //             "persona": 0,   
    //             "correo": ''
    //           };
    //       })
          
    //     })
    // })
    
    }
  
}
