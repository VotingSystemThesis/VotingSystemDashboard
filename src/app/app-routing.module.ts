import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';
import { CandidatosComponent } from './candidatos/candidatos.component';
import { CreateCandidateComponent } from './candidatos/create-candidate/create-candidate.component';
import { HomeComponent } from './common/home/home.component';
import { EleccionesComponent } from './elecciones/elecciones.component';
import { FullactivesComponent } from './elecciones/fullactives/fullactives.component';
import { FullnoactivesComponent } from './elecciones/fullnoactives/fullnoactives.component';
import { EstadisticasComponent } from './estadisticas/estadisticas.component';
import { AuthGuard } from './guards/auth/auth.guard';
import { PartidosComponent } from './partidos/partidos.component';
import { VotantesComponent } from './votantes/votantes.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'partidos', component: PartidosComponent, canActivate: [AuthGuard] },
  {
    path: 'elecciones',
    component: EleccionesComponent,
    canActivate: [AuthGuard],
  },
  { path: 'votantes', component: VotantesComponent, canActivate: [AuthGuard] },
  {
    path: 'candidatos',
    canActivate: [AuthGuard],
    component: CandidatosComponent,
  },
  {
    path: 'estadisticas',
    canActivate: [AuthGuard],
    component: EstadisticasComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
