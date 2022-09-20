import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Eleccion } from 'src/model/Eleccion';
import { FullactivesComponent } from './fullactives/fullactives.component';
import { FullnoactivesComponent } from './fullnoactives/fullnoactives.component';
import { VoterService } from '../services/voter.service';
import { ElectoralvotingService } from '../services/electoralvoting.service';
import { EleccionVoting } from '../../model/EleccionVoting';
@Component({
  selector: 'app-elecciones',
  templateUrl: './elecciones.component.html',
  styleUrls: ['./elecciones.component.scss'],
})
export class EleccionesComponent implements OnInit {
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: any) {
    const currentScroll = window.pageYOffset;
    if (currentScroll > 50) {
      this.hideNav = true;
    } else {
      this.hideNav = false;
    }
  }

  constructor(
    private Electoralvoting: ElectoralvotingService,
    public dialog: MatDialog
  ) {}

  scrollTop = 0;
  hideNav = false;

  eleccion: EleccionVoting[] = [];

  elecciones = [];

  eleccionesActivas: any[] = [];
  eleccionesPasadas: any[] = [];

  ngOnInit(): void {
    //this.eleccionesActivas = this.elecciones;
    //this.eleccionesPasadas = this.elecciones;
    //this.initializeElections();
    this.initialize();
  }

  initialize() {
    console.log('tamo bien');
    this.Electoralvoting.getAllElectoralVoting().subscribe((data: any) => {
      this.eleccion = data;
      this.splitElections();
    });
  }
  splitElections() {
    this.eleccionesActivas = this.eleccion.filter((x) => {
      return x.isActive == true;
    });

    this.eleccionesPasadas = this.eleccion.filter((x) => {
      return x.isActive == false;
    });
  }

  initializeElections() {
    this.eleccionesActivas = this.eleccionesActivas.slice(0, 3);
    this.eleccionesPasadas = this.eleccionesPasadas.slice(0, 3);
  }

  openFullActivesDialog(isActive: boolean) {
    const dialogRef = this.dialog.open(FullactivesComponent, {
      width: '100vw',
      height: '80vh',
      data: {
        elecciones: isActive ? this.eleccionesActivas : this.eleccionesPasadas,
      },
    });
  }
}
