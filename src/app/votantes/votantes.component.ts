import { Component, HostListener, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Votante } from 'src/model/Voter';
import { VoterService } from '../services/voter.service';
import { CreateVotanteComponent } from './create-votante/create-votante.component';

@Component({
  selector: 'app-votantes',
  templateUrl: './votantes.component.html',
  styleUrls: ['./votantes.component.scss'],
})
export class VotantesComponent implements OnInit {
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: any) {
    const currentScroll = window.pageYOffset;
    if (currentScroll > 50) {
      this.hideNav = true;
    } else {
      this.hideNav = false;
    }
  }
  inputFilter = '';
  selectFilter = '----';
  votantes: any[] = [];
  votantesFiltered: Votante[] = [];

  constructor(private voterService: VoterService, public dialog: MatDialog) {}
  scrollTop = 0;
  hideNav = false;
  ngOnInit(): void {
    this.initialize();
  }
  initialize() {
    this.voterService.getAllVoters().subscribe((data: any) => {
      this.votantes = data;
      this.votantesFiltered = this.votantes;
    });
  }
  createVoter() {
    const dialogRef = this.dialog
      .open(CreateVotanteComponent, {
        width: '50vw',
        height: '70vh',
      })
      .afterClosed()
      .subscribe((data: any) => {
        this.initialize();
      });
  }
  onInputFilterChange(e: any) {
    this.votantesFiltered = this.votantes;

    if (e != '') {
      if (this.selectFilter == 'dni') {
        this.votantesFiltered = this.votantesFiltered.filter((x) =>
          x.dni.includes(e)
        );
      }
      if (this.selectFilter == 'name') {
        this.votantesFiltered = this.votantesFiltered.filter(
          (x) =>
            x.name.toLowerCase().includes(e.toLowerCase()) ||
            x.lastName.toLowerCase().includes(e.toLowerCase())
        );
      }
      if (this.selectFilter == 'city') {
        this.votantesFiltered = this.votantesFiltered.filter((x) =>
          x.city!.toLowerCase().includes(e.toLowerCase())
        );
      }
    }
  }
  onSelectFilterChange(e: any) {
    this.selectFilter = e.target.value;
  }
}
