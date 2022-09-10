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

  ngOnInit(): void {}
  scrollTop = 0;
  hideNav = false;
  eleccionesActivas = [
    new Eleccion(
      'TituloActivo',
      'DescripcionDeEleccion',
      '01/06/2012',
      '05/06/2022'
    ),
  ];
  eleccionesPasadas = [
    new Eleccion(
      'TituloActivo',
      'DescripcionDeEleccion',
      '01/06/2012',
      '05/06/2022'
    ),
  ];
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: any) {
    const currentScroll = window.pageYOffset;
    if (currentScroll > 50) {
      this.hideNav = true;
    } else {
      this.hideNav = false;
    }
  }

  openFullActivesDialog() {
    const dialogRef = this.dialog.open(FullactivesComponent, {
      width: '80vw',
      height: '80vh',
    });
  }
  openFullNoActivesDialog() {
    const dialogRef = this.dialog.open(FullnoactivesComponent, {
      width: '80vw',
      height: '80vh',
    });
  }
}
