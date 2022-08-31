import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './authentication/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { HomeComponent } from './common/home/home.component';
import { NavComponent } from './common/nav/nav.component';
import { EleccionesComponent } from './elecciones/elecciones.component';
import { VotantesComponent } from './votantes/votantes.component';
import { CandidatosComponent } from './candidatos/candidatos.component';
import { EstadisticasComponent } from './estadisticas/estadisticas.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, HomeComponent, NavComponent, EleccionesComponent, VotantesComponent, CandidatosComponent, EstadisticasComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
