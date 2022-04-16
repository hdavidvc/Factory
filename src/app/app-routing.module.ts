import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpleadoComponent } from './pages/personas/empleado/empleado.component';
import { PrincipalComponent } from './pages/principal/principal.component';
import { RegistrarComponent } from './pages/gastos/registrar/registrar.component';
import { ConsultarGastosComponent } from './pages/gastos/consultar-gastos/consultar-gastos.component';
import { TiposGastosComponent } from './pages/gastos/tipos-gastos/tipos-gastos.component';
import { NuevoUsuarioComponent } from './pages/usuario/nuevo-usuario/nuevo-usuario.component';
import { PasswordComponent } from './pages/usuario/password/password.component';
import { ImagenComponent } from './pages/usuario/imagen/imagen.component';
import { ProveedoresComponent } from './pages/personas/proveedores/proveedores.component';
import { AlmacenesComponent } from './pages/almacenamiento/almacenes/almacenes.component';
import { EstanteriaComponent } from './pages/almacenamiento/estanteria/estanteria.component';
import { AlmacenarComponent } from './pages/ordenes/almacenar/almacenar.component';
import { CrearComponent } from './pages/ordenes/crear/crear.component';
import { RecibirComponent } from './pages/ordenes/recibir/recibir.component';
import { ProductoComponent } from './pages/productos/producto/producto.component';
import { MateriaComponent } from './pages/materiaPrima/materia/materia.component';
import { ProducirComponent } from './pages/produccion/producir/producir.component';

const routes: Routes = [
  {path: 'home', component: PrincipalComponent},
  // PERSONAS
  {path: 'personas/empleado', component: EmpleadoComponent},
  {path: 'personas/proveedores', component: ProveedoresComponent},
  // ALMACENAMIENTO
  {path: 'almacenamiento/almacen', component: AlmacenesComponent},
  {path: 'almacenamiento/estanteria', component: EstanteriaComponent},

  // ORDENES
  {path: 'ordenes/almacenar', component: AlmacenarComponent},
  {path: 'ordenes/crear', component: CrearComponent},
  {path: 'ordenes/recibir', component: RecibirComponent},
  // PRODUCTOS
  {path: 'productos/producto', component: ProductoComponent},
  // MATERIA PRIMA
  {path: 'materiaPrima/materia', component: MateriaComponent},
  // PRODUCCION
  {path: 'produccion/producir', component: ProducirComponent},
  // GASTOS
  {path: 'gastos/registro', component: RegistrarComponent},
  {path: 'gastos/consulta', component: ConsultarGastosComponent},
  {path: 'gastos/tipo_gasto', component: TiposGastosComponent},
  // USUARIO
  {path: 'usuario/nuevo', component: NuevoUsuarioComponent},
  {path: 'usuario/password', component: PasswordComponent},
  {path: 'usuario/imagen', component: ImagenComponent},
  
  {path: '**', pathMatch:'full',  redirectTo: 'home' },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
