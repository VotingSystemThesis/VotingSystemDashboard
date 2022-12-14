import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './authentication/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { HomeComponent } from './common/home/home.component';
import { NavComponent } from './common/nav/nav.component';
import { EleccionesComponent } from './elecciones/elecciones.component';
import { VotantesComponent } from './votantes/votantes.component';
import { CandidatosComponent } from './candidatos/candidatos.component';
import { EstadisticasComponent } from './estadisticas/estadisticas.component';
import { EleccionesCardComponent } from './elecciones/elecciones-card/elecciones-card.component';
import { VotanteCardComponent } from './votantes/votante-card/votante-card.component';
import { CandidatoCardComponent } from './candidatos/candidato-card/candidato-card.component';
import { CreateCandidateComponent } from './candidatos/create-candidate/create-candidate.component';
import { FullactivesComponent } from './elecciones/fullactives/fullactives.component';
import { FullnoactivesComponent } from './elecciones/fullnoactives/fullnoactives.component';
import { PartidosComponent } from './partidos/partidos.component';
import { PartidoCardComponent } from './partidos/partido-card/partido-card.component';
import { CreatePartidoComponent } from './partidos/create-partido/create-partido.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { HttpClientModule } from '@angular/common/http';
import { CreateVotanteComponent } from './votantes/create-votante/create-votante.component';
import { AuthGuard } from './guards/auth/auth.guard';
import { DatePipe } from '@angular/common';
import { FingerprintComponent } from './votantes/fingerprint/fingerprint.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { CreateElectionComponent } from './elecciones/create-election/create-election.component';
import { StatscardComponent } from './estadisticas/statscard/statscard.component';
import { StatsinfoComponent } from './estadisticas/statsinfo/statsinfo.component';
import { ConfirmationMessageComponent } from './common/confirmation-message/confirmation-message.component';

const shortDatePatterns = {
  'aa-DJ': 'dd/MM/yyyy',
  'aa-ER': 'dd/MM/yyyy',
  'aa-ET': 'dd/MM/yyyy',
};
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavComponent,
    EleccionesComponent,
    VotantesComponent,
    CandidatosComponent,
    EstadisticasComponent,
    EleccionesCardComponent,
    VotanteCardComponent,
    CandidatoCardComponent,
    FullactivesComponent,
    FullnoactivesComponent,
    CreateCandidateComponent,
    PartidosComponent,
    PartidoCardComponent,
    CreatePartidoComponent,
    CreateVotanteComponent,
    FingerprintComponent,
    CreateElectionComponent,
    StatscardComponent,
    StatsinfoComponent,
    ConfirmationMessageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    FormsModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    HttpClientModule,
  ],

  providers: [AuthGuard, DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
