import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';
import { Eleccion } from 'src/model/Eleccion';
@Component({
  selector: 'app-elecciones',
  templateUrl: './elecciones.component.html',
  styleUrls: ['./elecciones.component.scss'],
})
export class EleccionesComponent implements OnInit {
  constructor() {}

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
}
