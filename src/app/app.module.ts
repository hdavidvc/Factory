import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartsModule } from 'ng2-charts';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './pipes/filter.pipe';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
// Angular Material
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';

// import { MatSelectModule } from '@angular/material/select';


import { PrincipalComponent } from './pages/principal/principal.component';
// Compoenentes
import { DividerComponent } from './components/divider/divider.component';
import { BadgeComponent } from './components/badge/badge.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HeaderComponent } from './components/header/header.component';

// Cliente


// Prestamos
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegistrarComponent } from './pages/gastos/registrar/registrar.component';
import { ConsultarGastosComponent } from './pages/gastos/consultar-gastos/consultar-gastos.component';
import { TiposGastosComponent } from './pages/gastos/tipos-gastos/tipos-gastos.component';
import { NuevoUsuarioComponent } from './pages/usuario/nuevo-usuario/nuevo-usuario.component';
import { PasswordComponent } from './pages/usuario/password/password.component';
import { ImagenComponent } from './pages/usuario/imagen/imagen.component';
import { DialogDireccionComponent } from './components/dialog-direccion/dialog-direccion.component';
import { EmpleadoComponent } from './pages/personas/empleado/empleado.component';
import { AlmacenesComponent } from './pages/almacenamiento/almacenes/almacenes.component';
import { EstanteriaComponent } from './pages/almacenamiento/estanteria/estanteria.component';
import { MateriaComponent } from './pages/materiaPrima/materia/materia.component';
import { AlmacenarComponent } from './pages/ordenes/almacenar/almacenar.component';
import { CrearComponent } from './pages/ordenes/crear/crear.component';
import { RecibirComponent } from './pages/ordenes/recibir/recibir.component';
import { ProducirComponent } from './pages/produccion/producir/producir.component';
import { ProductoComponent } from './pages/productos/producto/producto.component';
import { ProveedoresComponent } from './pages/personas/proveedores/proveedores.component';
import { DialogUbicacionComponent } from './components/dialog-ubicacion/dialog-ubicacion.component';
import { MatSelectModule } from '@angular/material/select';
import { DialogMateriaComponent } from './components/dialog-materia/dialog-materia.component';
import { DialogRecibirComponent } from './components/dialog-recibir/dialog-recibir.component';
import { DialogAlmacenarComponent } from './components/dialog-almacenar/dialog-almacenar.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavBarComponent,
    PrincipalComponent,
    BadgeComponent,
    DividerComponent,
    EmpleadoComponent,
    AlmacenesComponent,
    EstanteriaComponent,
    MateriaComponent,
    AlmacenarComponent,
    CrearComponent,
    RecibirComponent,
    ProducirComponent,
    ProductoComponent,  
    RegistrarComponent,
    ConsultarGastosComponent,
    TiposGastosComponent,
    NuevoUsuarioComponent,
    PasswordComponent,
    ImagenComponent,
    FilterPipe,
    DialogDireccionComponent,
    ProveedoresComponent,
    DialogUbicacionComponent,
    DialogMateriaComponent,
    DialogRecibirComponent,
    DialogAlmacenarComponent,  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    FormsModule,
    MatDialogModule,
    MatInputModule,
    MatSelectModule,
    MatProgressBarModule,
    SweetAlert2Module
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
