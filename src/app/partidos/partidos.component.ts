import { Component, HostListener, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Partido } from 'src/model/Partido';
import { Votante } from 'src/model/Voter';
import { PoliticalpartyService } from '../services/politicalparty.service';
import { CreatePartidoComponent } from './create-partido/create-partido.component';

@Component({
  selector: 'app-partidos',
  templateUrl: './partidos.component.html',
  styleUrls: ['./partidos.component.scss'],
})
export class PartidosComponent implements OnInit {
  constructor(
    public dialog: MatDialog,
    private polliticalPartyService: PoliticalpartyService
  ) {}
  scrollTop = 0;
  hideNav = false;
  partidos: Partido[] = [];
  ngOnInit(): void {
    this.initialize();
  }

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
    const dialogRef = this.dialog
      .open(CreatePartidoComponent, {
        width: '30vw',
        height: '60vh',
      })
      .afterClosed()
      .subscribe((data: any) => {
        console.log(data);
        this.initialize();
      });
  }
  initialize() {
    this.polliticalPartyService
      .getAllPolliticalParty()
      .subscribe((data: any) => {
        this.partidos = data;
      });
  }
}
