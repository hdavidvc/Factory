import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NuevoComponent } from './pages/clientes/nuevo/nuevo.component';
import { PrincipalComponent } from './pages/principal/principal.component';
import { GaranteComponent } from './pages/clientes/garante/garante.component';
import { RechazarComponent } from './pages/clientes/rechazar/rechazar.component';

const routes: Routes = [
  {path: 'home', component: PrincipalComponent},
  {path: 'cliente/nuevo', component: NuevoComponent},
  {path: 'cliente/garante', component: GaranteComponent},
  {path: 'cliente/rechazar', component: RechazarComponent},
  {path: '**', pathMatch:'full',  redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
