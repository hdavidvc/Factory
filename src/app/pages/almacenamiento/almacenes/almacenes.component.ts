import { Component, OnInit } from '@angular/core';
import { FactoryService } from 'src/app/services/factory.service';
import { Respuesta } from '../../../interfaces/usuario';

export interface TablaElement {
  descripcion: string;
  capacidad: string;
  estado: string;

}

let ELEMENT_DATA: TablaElement[] = [

];

@Component({
  selector: 'app-almacenes',
  templateUrl: './almacenes.component.html',
  styleUrls: ['./almacenes.component.css']
})
export class AlmacenesComponent implements OnInit {
  
  displayedColumns = ['Descripcion', 'Capacidad', 'Estado'];
  dataSource:TablaElement[] = [];
  
  almacen = {
  "descripcion": "",
  "capacidad": "",
  "estado": "",
  
}
  constructor(private service: FactoryService) {
    // console.log(this.dataSource);
    this.obtenerAlmacenes();
        // this.service.getEjecutivo('ejecutivo').subscribe(resp => console.log(resp));
  //     this.service.getProveedores().subscribe( resp => {
  // this.proveedoress = resp.respuesta;
  //     })
//       this.service.getEjecutivo('ejecutivo').subscribe(resp => {
//   console.log(resp);
// this.ejecutivo = resp.respuesta;
//       })

      // this.service.getCliente().subscribe(resp => {
      //   console.log(resp);
      //   this.clientes = resp.respuesta;
      // })
      // this.service.getRuta().subscribe( resp => {
      //   this.rutas = resp.respuesta;
      //   console.log(this.rutas);
      // })

      // console.log(this.clientes);
   }

  ngOnInit(): void {
  }
  guardar() {
    this.dataSource.push(this.almacen);
    this.service.setAlmacen(this.almacen).subscribe(resp => {
      console.log(resp);
    });
    this.obtenerAlmacenes();
    console.log(this.dataSource);
  }
  obtenerAlmacenes():any {
    this.service.getAlmacenes().subscribe((resp:any) => {
     
      this.dataSource = resp;
    })
  }
  select(e:any) {
    console.log(e);
    this.almacen =e
    console.log(this.almacen);
  }
  editar () {
    this.service.updateAlmacen(this.almacen).subscribe(resp => console.log(resp) );
  }




}
