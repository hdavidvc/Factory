import { Component, OnInit } from '@angular/core';
import { FactoryService } from 'src/app/services/factory.service';
import { Respuesta } from '../../../interfaces/usuario';

export interface TablaElement {
  Descripcion: string;
  Estado: string;

}

const ELEMENT_DATA: TablaElement[] = [
  {Descripcion: "almacen 1", Estado: "Disponible"},
  {Descripcion: "almacen 2", Estado: "Ocupado"},
  {Descripcion: "almacen 3", Estado: "Disponible"},
  {Descripcion: "almacen 4", Estado: "Ocupado"},
  {Descripcion: "almacen 5", Estado: "Disponible"},
  {Descripcion: "almacen 6", Estado: "Ocupado"},
  {Descripcion: "almacen 7", Estado: "Disponible"},
  {Descripcion: "almacen 8", Estado: "Ocupado"},
  {Descripcion: "almacen 9", Estado: "Disponible"},
];

@Component({
  selector: 'app-almacenes',
  templateUrl: './almacenes.component.html',
  styleUrls: ['./almacenes.component.css']
})
export class AlmacenesComponent implements OnInit {
  
  displayedColumns = ['Descripcion', 'Estado'];
  dataSource = ELEMENT_DATA;
ejecutivo: any = [];
proveedoress: any = [];
clientes: any = [];
rutas: any = [];
almacenes = {
        'monto': '',
        'cantidad_cuotas': '',
        'monto_cuotas': '',
        'fecha_inicio': '',
        'fecha_fin': '',
        'tasa': '',
        'cliente': 0,
        'dia_gracias': '',
        'tasa_mora': '',
        'periodo_pago': '',
        'tipo_saldo': '',
        'tipo_almacenes': '',
        'id_proveedores': 0,
        'id_usuario': 0,
        'id_ruta': 0
}
  constructor(private service: FactoryService) {
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
  // this.service.newPrestamos(this.almacenes).subscribe(resp => {
  //   console.log(resp);
  // });
  console.log('entro');
}

calcularMontoCuota(inte: any) {
  // let interes = inte/100;
  // let monto_pagar = parseFloat(this.almacenes.monto) * interes + parseFloat(this.almacenes.monto);
  
  // this.almacenes.monto_cuotas = (monto_pagar / parseInt( this.almacenes.cantidad_cuotas)).toString();
}



}
