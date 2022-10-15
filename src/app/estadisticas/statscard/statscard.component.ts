import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EleccionVoting } from 'src/model/EleccionVoting';
import { StatsinfoComponent } from '../statsinfo/statsinfo.component';

@Component({
  selector: 'app-statscard',
  templateUrl: './statscard.component.html',
  styleUrls: ['./statscard.component.scss'],
})
export class StatscardComponent implements OnInit {
  @Input() election: EleccionVoting = new EleccionVoting(
    'TituloPrueba',
    'status',
    new Date(),
    true
  );
  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  openStats() {
    const dialogRef = this.dialog
      .open(StatsinfoComponent, {
        width: '90vw',
        height: '90vh',
        data: {
          election: this.election,
        },
      })
      .afterClosed();
  }
}
