import { Component, Input, OnInit } from '@angular/core';
import { Votante } from 'src/model/Voter';

@Component({
  selector: 'app-votante-card',
  templateUrl: './votante-card.component.html',
  styleUrls: ['./votante-card.component.scss'],
})
export class VotanteCardComponent implements OnInit {
  @Input() votante: Votante = new Votante(
    'Pedrito',
    'Perez',
    '12345678',
    undefined
  );
  constructor() {}

  ngOnInit(): void {}
}
