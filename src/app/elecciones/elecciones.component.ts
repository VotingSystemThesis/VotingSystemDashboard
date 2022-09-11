import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Eleccion } from 'src/model/Eleccion';
import { FullactivesComponent } from './fullactives/fullactives.component';
import { FullnoactivesComponent } from './fullnoactives/fullnoactives.component';
@Component({
  selector: 'app-elecciones',
  templateUrl: './elecciones.component.html',
  styleUrls: ['./elecciones.component.scss'],
})
export class EleccionesComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  scrollTop = 0;
  hideNav = false;
  elecciones = [
    new Eleccion(
      'TituloActivo',
      'DescripcionDeEleccion',
      '01/06/2012',
      '05/06/2022'
    ),
    new Eleccion(
      'TituloActivo',
      'DescripcionDeEleccion',
      '01/06/2012',
      '05/06/2022'
    ),
    new Eleccion(
      'TituloActivo',
      'DescripcionDeEleccion',
      '01/06/2012',
      '05/06/2022'
    ),
    new Eleccion(
      'TituloActivo',
      'DescripcionDeEleccion',
      '01/06/2012',
      '05/06/2022'
    ),
    new Eleccion(
      'TituloActivo',
      'DescripcionDeEleccion',
      '01/06/2012',
      '05/06/2022'
    ),
    new Eleccion(
      'TituloActivo',
      'DescripcionDeEleccion',
      '01/06/2012',
      '05/06/2022'
    ),
  ];
  eleccionesActivas: Eleccion[] = [];
  eleccionesPasadas: Eleccion[] = [];

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: any) {
    const currentScroll = window.pageYOffset;
    if (currentScroll > 50) {
      this.hideNav = true;
    } else {
      this.hideNav = false;
    }
  }

  ngOnInit(): void {
    this.eleccionesActivas = this.elecciones;
    this.eleccionesPasadas = this.elecciones;
    this.initializeElections();
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
