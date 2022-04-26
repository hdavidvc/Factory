import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/interfaces/usuario';
import { FactoryService } from 'src/app/services/factory.service';
import { Respuesta } from '../../../interfaces/usuario';

@Component({
  selector: 'app-nuevo-usuario',
  templateUrl: './nuevo-usuario.component.html',
  styleUrls: ['./nuevo-usuario.component.css']
})
export class NuevoUsuarioComponent implements OnInit {
  use = '';
  searchText = '';
  personas: any = [];
  name:string = '';
  user = {
    
    "usuario": "",
    "contrasena": "",
    "id_persona": 0,
    "tipo_usuario": ""
    }
  users:any = [];
   
  constructor( private service:FactoryService) { 
    // this.service.getPersona().subscribe(pers => {
    //   this.personas = pers.respuesta;
    //   console.log(pers.respuesta[0].nombre);
    // })
    // this.service.getUser().subscribe(pers => {
    //   this.users = pers.respuesta;
    // })
  }

  ngOnInit(): void {
  }
  nameChange(event: any) {
    this.user.id_persona = this.personas.find((element:any) => element.nombre == event).id;
  }
  guardar() {
    console.log('estoy dentro');
    // this.service.newUser(this.user).subscribe( resp => console.log(resp))
  }
  cargar(event: any) {
    // this.user.id_persona = this.personas.find((element:any) => element.nombre == event).id;

    this.user = this.users.find((element:any) => element.usuario == event);
    this.name = this.personas.find((element:any) => element.id == this.user.id_persona).nombre;
    console.log(this.name);
  }
}
