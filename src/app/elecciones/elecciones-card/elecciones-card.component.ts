import { Component, Input, OnInit } from '@angular/core';
import { Eleccion } from 'src/model/Eleccion';
import {EleccionVoting} from "../../../model/EleccionVoting";

@Component({
  selector: 'app-elecciones-card',
  templateUrl: './elecciones-card.component.html',
  styleUrls: ['./elecciones-card.component.scss'],
})
export class EleccionesCardComponent implements OnInit {
  @Input() election: EleccionVoting = new EleccionVoting(
    'TituloPrueba',
    'status',
    new Date(),
    true
  );
  constructor() {}

  ngOnInit(): void {}
}
