import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Partido } from 'src/model/Partido';
import { CreatePartidoComponent } from '../create-partido/create-partido.component';

@Component({
  selector: 'app-partido-card',
  templateUrl: './partido-card.component.html',
  styleUrls: ['./partido-card.component.scss'],
})
export class PartidoCardComponent implements OnInit {
  @Input() partido: Partido = new Partido(
    'Test',
    'Fuerza Popular',
    new Date(),
    true
  );
  @Output() resultEmitter = new EventEmitter();
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  openEdit() {
    const dialogRef = this.dialog
      .open(CreatePartidoComponent, {
        width: '50vw',
        height: '80vh',
        data: {
          partidoToEdit: this.partido,
        },
      })
      .afterClosed()
      .subscribe((data: any) => {
        console.log(data);
        this.resultEmitter.emit();
      });
  }
}
