import { Component, Input, OnInit } from '@angular/core';
import { Eleccion } from 'src/model/Eleccion';

@Component({
  selector: 'app-elecciones-card',
  templateUrl: './elecciones-card.component.html',
  styleUrls: ['./elecciones-card.component.scss'],
})
export class EleccionesCardComponent implements OnInit {
  @Input() election: Eleccion = new Eleccion(
    'TituloPrueba',
    'Descripcion de la eleccion',
    new Date()
  );
  constructor() {}

  ngOnInit(): void {}
}
