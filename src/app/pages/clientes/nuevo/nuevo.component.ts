import { Component, OnInit } from '@angular/core';
import { PrestamosService } from '../../../services/prestamos.service';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent implements OnInit {

  cliente = {
    lugar_trabajo: '',
    direccion_trabajo: '',
    telefono_trabajo: 0,
    cargo: '',
    sueldo: 0,
    otros_cargos: '',
    correo: '',
    id_persona: '611169f4195da1264474197e'
  }
  constructor(private service: PrestamosService) { }

  ngOnInit(): void {
  }
  guardar() {
    console.log('Pulsado');
  this.service.newCliente(this.cliente).subscribe(resp => {
    console.log(resp);
  })
  }

}
