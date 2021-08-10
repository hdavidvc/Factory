import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NuevoComponent } from './pages/clientes/nuevo/nuevo.component';
import { PrincipalComponent } from './pages/principal/principal.component';
import { GaranteComponent } from './pages/clientes/garante/garante.component';
import { RechazarComponent } from './pages/clientes/rechazar/rechazar.component';
import { PrestamoNuevoComponent } from './pages/prestamos/nuevo/nuevo.component';
import { ConsultaComponent } from './pages/prestamos/consulta/consulta.component';
import { EjecutivoComponent } from './pages/prestamos/ejecutivo/ejecutivo.component';
import { EditarComponent } from './pages/prestamos/editar/editar.component';
import { AgregarComponent } from './pages/prestamos/agregar/agregar.component';
import { FestivosComponent } from './pages/prestamos/festivos/festivos.component';

const routes: Routes = [
  {path: 'home', component: PrincipalComponent},
  {path: 'cliente/nuevo', component: NuevoComponent},
  {path: 'cliente/garante', component: GaranteComponent},
  {path: 'cliente/rechazar', component: RechazarComponent},
  {path: 'prestamos/nuevo', component: PrestamoNuevoComponent},
  {path: 'prestamos/consultar', component: ConsultaComponent},
  {path: 'prestamos/ejecutivo', component: EjecutivoComponent},
  {path: 'prestamos/editar', component: EditarComponent},
  {path: 'prestamos/agregar', component: AgregarComponent},
  {path: 'prestamos/festivo', component: FestivosComponent},
  {path: '**', pathMatch:'full',  redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
