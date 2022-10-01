import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Eleccion } from 'src/model/Eleccion';
import { EleccionVoting } from '../../../model/EleccionVoting';
import { CreateElectionComponent } from '../create-election/create-election.component';

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
  @Output() resultEmitter = new EventEmitter();

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}
  openEdit() {
    const dialogRef = this.dialog
      .open(CreateElectionComponent, {
        width: '30vw',
        height: '60vh',
        data: {
          electionToEdit: this.election,
        },
      })
      .afterClosed()
      .subscribe((data: any) => {
        console.log(data);
        this.resultEmitter.emit();
      });
  }
}
