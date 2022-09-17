import { Component, HostListener, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
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
  votantes: any[] = [];

  constructor(private voterService: VoterService, public dialog: MatDialog) {}
  scrollTop = 0;
  hideNav = false;
  ngOnInit(): void {
    this.initialize();
  }
  initialize() {
    this.voterService.getAllVoters().subscribe((data: any) => {
      this.votantes = data;
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
}
