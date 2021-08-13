import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartsModule } from 'ng2-charts';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// Angular Material
import {MatTableModule} from '@angular/material/table';

import { PrincipalComponent } from './pages/principal/principal.component';
// Compoenentes
import { DividerComponent } from './components/divider/divider.component';
import { BadgeComponent } from './components/badge/badge.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HeaderComponent } from './components/header/header.component';

// Cliente
import { NuevoComponent } from './pages/clientes/nuevo/nuevo.component';
import { GaranteComponent } from './pages/clientes/garante/garante.component';
import { RechazarComponent } from './pages/clientes/rechazar/rechazar.component';

// Prestamos
import { PrestamoNuevoComponent } from './pages/prestamos/nuevo/nuevo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConsultaComponent } from './pages/prestamos/consulta/consulta.component';
import { EjecutivoComponent } from './pages/prestamos/ejecutivo/ejecutivo.component';
import { EditarComponent } from './pages/prestamos/editar/editar.component';
import { AgregarComponent } from './pages/prestamos/agregar/agregar.component';
import { FestivosComponent } from './pages/prestamos/festivos/festivos.component';
import { EstadoComponent } from './pages/prestamos/estado/estado.component';
import { CanceladosComponent } from './pages/prestamos/cancelados/cancelados.component';
import { IngresoGastoComponent } from './pages/estadistica/ingreso-gasto/ingreso-gasto.component';
import { CobrarComponent } from './pages/pagos/cobrar/cobrar.component';
import { OtrosComponent } from './pages/pagos/otros/otros.component';
import { ConsultaCobroComponent } from './pages/pagos/consulta/consulta.component';
import { DepositoComponent } from './pages/cobrador/deposito/deposito.component';
import { MonitoreoComponent } from './pages/cobrador/monitoreo/monitoreo.component';
import { CelularesComponent } from './pages/cobrador/celulares/celulares.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavBarComponent,
    PrincipalComponent,
    BadgeComponent,
    NuevoComponent,
    DividerComponent,
    GaranteComponent,
    RechazarComponent,
    PrestamoNuevoComponent,
    ConsultaComponent,
    EjecutivoComponent,
    EditarComponent,
    AgregarComponent,
    FestivosComponent,
    EstadoComponent,
    CanceladosComponent,
    IngresoGastoComponent,
    CobrarComponent,
    OtrosComponent,
    ConsultaCobroComponent,
    DepositoComponent,
    MonitoreoComponent,
    CelularesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
