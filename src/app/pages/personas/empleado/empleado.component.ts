import { Component, OnInit } from '@angular/core';
import {ClienteElement } from 'src/app/interfaces/cliente';
import { FactoryService } from '../../../services/factory.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogDireccionComponent } from 'src/app/components/dialog-direccion/dialog-direccion.component';
@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

  public criterio:string ='';

  // cliente: ClienteElement = {
  //   "_id": "61148b577d4ea92288912b14",
  //   "lugar_trabajo": "Google.com",
  //   "direccion_trabajo": "Calle 21, casa 7, Cristo Rey",
  //   "telefono_trabajo": 8097808081,
  //   "cargo": "Web Developer",
  //   "sueldo": 30000,
  //   "otros_cargos": 5000,
  //   "correo": "davidrd372@gmail.com",
  //   "id_persona": {
  //   "_id": "611169f4195da1264474197e",
  //   "apellido": "Cabrera",
  //   "cedula": 3115319034,
  //   "estado_civil": "soltero",
  //   "nombre": "David",
  //   "telefono": 8097808081,
  //   "__v": 0
  //   },
  //   "__v": 0
  //   };
 cliente = {
    "lugar_trabajo": "",
    "direccion_trabajo": "",
    "telefono_trabajo": 809,
    "cargo": "",
    "sueldo": 0,
    "otros_ingresos": 0,
    "persona": 0,
    "correo": ""    
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
  constructor(private service: FactoryService, public dialog: MatDialog) {
    
   }

  ngOnInit(): void {
  }
  async guardar() {
  console.log('Pulsado');

  this.service.newDireccion(this.direccion).subscribe( resp => {
      this.persona.id_direccion = resp.id;
      console.log(resp.id);

      this.service.newPersona(this.persona).subscribe(resp => {
        this.cliente.persona = resp.id;
          
        this.service.newCliente(this.cliente).subscribe( resp => {
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
            this.cliente = {
              "lugar_trabajo": "",
              "direccion_trabajo": "",
              "telefono_trabajo": 809,
              "cargo": "",
              "sueldo": 0,
              "otros_ingresos": 0,
              "persona": 0,
              "correo": ""    
            };
        })
        
      })
  })
  
  }

  consultar(nombre:string) {
    this.service.getCliente().subscribe(resp => {
      // this.cliente = resp;
      console.log(this.cliente );
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
