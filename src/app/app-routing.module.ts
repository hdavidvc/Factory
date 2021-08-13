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
import { EstadoComponent } from './pages/prestamos/estado/estado.component';
import { CanceladosComponent } from './pages/prestamos/cancelados/cancelados.component';
import { IngresoGastoComponent } from './pages/estadistica/ingreso-gasto/ingreso-gasto.component';
import { CobrarComponent } from './pages/pagos/cobrar/cobrar.component';
import { ConsultaCobroComponent } from './pages/pagos/consulta/consulta.component';
import { OtrosComponent } from './pages/pagos/otros/otros.component';
import { DepositoComponent } from './pages/cobrador/deposito/deposito.component';
import { MonitoreoComponent } from './pages/cobrador/monitoreo/monitoreo.component';
import { CelularesComponent } from './pages/cobrador/celulares/celulares.component';

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
  {path: 'prestamos/estado', component: EstadoComponent},
  {path: 'prestamos/cancelado', component: CanceladosComponent},
  {path: 'estadistica/ingreso-gasto', component: IngresoGastoComponent},
  {path: 'pagos/cobrar', component: CobrarComponent},
  {path: 'pagos/consultar', component: ConsultaCobroComponent},
  {path: 'pagos/otros', component: OtrosComponent},
  {path: 'cobradores/deposito', component: DepositoComponent},
  {path: 'cobradores/monitoreo', component: MonitoreoComponent},
  {path: 'cobradores/celulares', component: CelularesComponent},
  {path: '**', pathMatch:'full',  redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
