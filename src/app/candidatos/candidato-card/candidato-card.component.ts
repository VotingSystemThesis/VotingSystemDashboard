import { Component, Input, OnInit } from '@angular/core';
import { Candidato } from 'src/model/Candidato';

@Component({
  selector: 'app-candidato-card',
  templateUrl: './candidato-card.component.html',
  styleUrls: ['./candidato-card.component.scss'],
})
export class CandidatoCardComponent implements OnInit {
  @Input() candidato: Candidato = new Candidato(
    'Test',
    'Apellido',
    'Fuerza Popular'
  );
  constructor() {}

  ngOnInit(): void {}
}
