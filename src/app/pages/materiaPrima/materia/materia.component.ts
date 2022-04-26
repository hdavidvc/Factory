import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogUbicacionComponent } from '../../../components/dialog-ubicacion/dialog-ubicacion.component';
import { FactoryService } from '../../../services/factory.service';

export interface TablaElement {
  descripcion: string,
  costo: string,
  id_ubicacion : number,
  proveedor: number
}

@Component({
  selector: 'app-materia',
  templateUrl: './materia.component.html',
  styleUrls: ['./materia.component.css']
})
export class MateriaComponent implements OnInit {

  displayedColumns = ['ID', 'Materia prima', 'Proveedor'];
  dataSource:TablaElement[] = [];

  public proveedores:any = [];

  constructor(public dialog: MatDialog, private service: FactoryService) { 
    
    
    this.service.getProveedor().subscribe(resp => {
      this.proveedores = resp;
    })
    this.obtenerMaterias();
  }

  ngOnInit(): void {
  }
  materia = {
    descripcion: '',
    costo: '',
    id_ubicacion : 0,
    proveedor: 0
  }
  ubicacion = {
    estanteria: '',
    nivel: '',
    id_almacen: 0
  }
  estanteria: string = '';
  nivel: string = '';
  id_almacen: string = '';
 
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogUbicacionComponent, {
      width: '250px',
      data: {estanteria: this.estanteria, nivel: this.nivel, id_almacen: this.id_almacen}
    });

    dialogRef.afterClosed().subscribe(result => {
      result.id_almacen = parseInt(result.id_almacen);      
      result.estanteria = parseInt(result.estanteria);      

      this.ubicacion = result;
    });
  }

  guardar() {
    this.dataSource.push(this.materia)
    this.service.setUbicacion(this.ubicacion).subscribe( ubi => {
        let idUbi = ubi.id
        this.materia.id_ubicacion = idUbi;
        this.service.setMateria(this.materia).subscribe(materia => {
          console.log(materia);
        })
    });
    this.obtenerMaterias();
    console.log(this.dataSource);
  }

  obtenerMaterias() {
    this.service.getMaterias().subscribe(materia => {
      materia.forEach((element:any, i:number) => {
        const find = this.proveedores.find((al:any) => element.proveedor === al.id);
        materia[i].proveedor = find.nombre;
      });
      this.dataSource = materia;
    })
  }

}
