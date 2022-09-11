import { Component, HostListener, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreatePartidoComponent } from './create-partido/create-partido.component';

@Component({
  selector: 'app-partidos',
  templateUrl: './partidos.component.html',
  styleUrls: ['./partidos.component.scss'],
})
export class PartidosComponent implements OnInit {
  constructor(public dialog: MatDialog) {}
  scrollTop = 0;
  hideNav = false;
  ngOnInit(): void {}

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: any) {
    const currentScroll = window.pageYOffset;
    if (currentScroll > 50) {
      this.hideNav = true;
    } else {
      this.hideNav = false;
    }
  }

  createPartido() {
    const dialogRef = this.dialog.open(CreatePartidoComponent, {
      width: '30vw',
      height: '50vh',
    });
  }
}
