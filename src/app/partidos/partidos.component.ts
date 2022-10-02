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
  inputFilter = '';
  selectFilter = '----';
  scrollTop = 0;
  hideNav = false;
  partidos: Partido[] = [];
  partidosFiltered: Partido[] = [];
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
        width: '50vw',
        height: '80vh',
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
        this.partidosFiltered = this.partidos;
      });
  }

  onInputFilterChange(e: any) {
    this.partidosFiltered = this.partidos;
    console.log(e);
    if (e != '') {
      if (this.selectFilter == 'name') {
        this.partidosFiltered = this.partidosFiltered.filter((x) =>
          x.name.toLowerCase().includes(e.toLowerCase())
        );
      }
    }
  }
  onSelectFilterChange(e: any) {
    this.selectFilter = e.target.value;
  }
}
