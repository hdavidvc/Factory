import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { PrincipalComponent } from './pages/principal/principal.component';
import { BadgeComponent } from './components/badge/badge.component';

import { HttpClientModule } from '@angular/common/http';


import { ChartsModule } from 'ng2-charts';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavBarComponent,
    PrincipalComponent,
    BadgeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
