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

  displayedColumns = ['ID', 'Materia prima', 'Proveedor', 'Cantidad', 'Ubicacion'];
  dataSource:TablaElement[] = [];

  public proveedores:any = [];
  public ubicaciones:any = [];

  constructor(public dialog: MatDialog, private service: FactoryService) { 
    
    this.service.getUbicaciones().subscribe(resp => {
      this.ubicaciones = resp;
      console.log(this.ubicaciones);
      
    })
    
    this.service.getProveedores().subscribe(resp => {
      this.proveedores = resp;
      console.log(this.proveedores);
      this.obtenerMaterias();
    })
    
   
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
      console.log(materia);
      materia.forEach((element:any, i:number) => {
        // console.log(element);

        const findP = this.proveedores.find((al:any) => element.proveedor == al.id);
        // console.log(findP);
        materia[i].proveedor = findP.nombre;

        const findU = this.ubicaciones.find((al:any) => element.id_ubicacion == al.id);
        // console.log(findU);
        this.service.getAlmacen(findU.id_almacen).subscribe(alc => {
          // console.log(alc[0]);
          materia[i].id_ubicacion = alc[0].descripcion;
        })
      });
      this.dataSource = materia;
      console.log(this.dataSource);
    })
  }

}
