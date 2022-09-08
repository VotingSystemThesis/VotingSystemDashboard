import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';
import { CandidatosComponent } from './candidatos/candidatos.component';
import { CreateCandidateComponent } from './candidatos/create-candidate/create-candidate.component';
import { HomeComponent } from './common/home/home.component';
import { EleccionesComponent } from './elecciones/elecciones.component';
import { FullactivesComponent } from './elecciones/fullactives/fullactives.component';
import { FullnoactivesComponent } from './elecciones/fullnoactives/fullnoactives.component';
import { VotantesComponent } from './votantes/votantes.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  {
    path: 'elecciones',
    component: EleccionesComponent,
    children: [
      { path: 'full-actives', component: FullactivesComponent },
      { path: 'full-noactives', component: FullnoactivesComponent },
    ],
  },
  { path: 'votantes', component: VotantesComponent },
  {
    path: 'candidatos',
    component: CandidatosComponent,
    children: [{ path: 'create', component: CreateCandidateComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
