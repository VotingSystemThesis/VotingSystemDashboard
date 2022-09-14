import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Candidato } from 'src/model/Candidato';

import { CreateCandidateComponent } from '../create-candidate/create-candidate.component';

@Component({
  selector: 'app-candidato-card',
  templateUrl: './candidato-card.component.html',
  styleUrls: ['./candidato-card.component.scss'],
})
export class CandidatoCardComponent implements OnInit {
  @Input() candidato: Candidato = new Candidato(
    'Test',
    'Apellido',
    'Fuerza Popular',
    'testingemail@test.com',
    new Date()
  );
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  openEdit() {
    const dialogRef = this.dialog.open(CreateCandidateComponent, {
      width: '50vw',
      height: '90vh',
      data: {
        personToEdit: this.candidato,
      },
    });
  }
}
