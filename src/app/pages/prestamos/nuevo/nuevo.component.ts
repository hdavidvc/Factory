import { Component, OnInit } from '@angular/core';
import { PrestamosService } from 'src/app/services/prestamos.service';
import { Respuesta } from '../../../interfaces/usuario';

export interface TablaElement {
  Numero: number;
  Cuota: number;
  Capital: number;
  Interes: number;
  Seguro: number;
  Balance: number;
  Vence: string;
}

const ELEMENT_DATA: TablaElement[] = [
  {Numero: 1, Cuota: 1100.00, Capital: 100000.00, Interes: 100.00, Seguro: 0.00, Balance: 9900.00, Vence: '4/8/2021'},
  {Numero: 2, Cuota: 1100.00, Capital: 100000.00, Interes: 100.00, Seguro: 0.00, Balance: 8800.00, Vence: '4/8/2021'},
  {Numero: 3, Cuota: 1100.00, Capital: 100000.00, Interes: 100.00, Seguro: 0.00, Balance: 7700.00, Vence: '4/8/2021'},
  {Numero: 4, Cuota: 1100.00, Capital: 100000.00, Interes: 100.00, Seguro: 0.00, Balance: 6600.00, Vence: '4/8/2021'},
  {Numero: 5, Cuota: 1100.00, Capital: 100000.00, Interes: 100.00, Seguro: 0.00, Balance: 5500.00, Vence: '4/8/2021'},
  {Numero: 6, Cuota: 1100.00, Capital: 100000.00, Interes: 100.00, Seguro: 0.00, Balance: 4400.00, Vence: '4/8/2021'},
  {Numero: 7, Cuota: 1100.00, Capital: 100000.00, Interes: 100.00, Seguro: 0.00, Balance: 3300.00, Vence: '4/8/2021'},
  {Numero: 8, Cuota: 1100.00, Capital: 100000.00, Interes: 100.00, Seguro: 0.00, Balance: 2200.00, Vence: '4/8/2021'},
  {Numero: 9, Cuota: 1100.00, Capital: 100000.00, Interes: 100.00, Seguro: 0.00, Balance: 1100.00, Vence: '4/8/2021'},
  {Numero: 10, Cuota: 1100.00, Capital:100000.00, Interes: 100.00, Seguro: 0.00, Balance: 0.00, Vence: '4/8/2021'},
];

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class PrestamoNuevoComponent implements OnInit {
  
  displayedColumns = ['Numero', 'Cuota', 'Capital', 'Interes', 'Seguro', 'Balance', 'Vence'];
  dataSource = ELEMENT_DATA;
ejecutivo: any = [];
garantes: any = [];
clientes: any = [];
rutas: any = [];
prestamo = {
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
        'tipo_prestamo': '',
        'id_garante': 0,
        'id_usuario': 0,
        'id_ruta': 0
}
  constructor(private service: PrestamosService) {
        // this.service.getEjecutivo('ejecutivo').subscribe(resp => console.log(resp));
      this.service.getGarante().subscribe( resp => {
  this.garantes = resp.respuesta;
      })
      this.service.getEjecutivo('ejecutivo').subscribe(resp => {
  console.log(resp);
this.ejecutivo = resp.respuesta;
      })

      this.service.getCliente().subscribe(resp => {
        console.log(resp);
        this.clientes = resp.respuesta;
      })
      this.service.getRuta().subscribe( resp => {
        this.rutas = resp.respuesta;
        console.log(this.rutas);
      })
   }

  ngOnInit(): void {
  }
guardar() {
  this.service.newPrestamos(this.prestamo).subscribe(resp => {
    console.log(resp);
  });
  console.log('entro');
}

calcularMontoCuota(inte: any) {
  let interes = inte/100;
  let monto_pagar = parseFloat(this.prestamo.monto) * interes + parseFloat(this.prestamo.monto);
  
  this.prestamo.monto_cuotas = (monto_pagar / parseInt( this.prestamo.cantidad_cuotas)).toString();
}



}
