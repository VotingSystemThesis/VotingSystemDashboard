import { Component, HostListener, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Candidato } from 'src/model/Candidato';
import { CandidateService } from '../services/candidate.service';
import { CreateCandidateComponent } from './create-candidate/create-candidate.component';

@Component({
  selector: 'app-candidatos',
  templateUrl: './candidatos.component.html',
  styleUrls: ['./candidatos.component.scss'],
})
export class CandidatosComponent implements OnInit {
  constructor(
    public dialog: MatDialog,
    private candidateService: CandidateService
  ) {}
  scrollTop = 0;
  hideNav = false;
  inputFilter = '';
  selectFilter = '----';
  ngOnInit(): void {
    this.initialize();
  }
  candidatos: Candidato[] = [];
  candidatosFiltered: Candidato[] = [];

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: any) {
    const currentScroll = window.pageYOffset;
    if (currentScroll > 50) {
      this.hideNav = true;
    } else {
      this.hideNav = false;
    }
  }
  createCandidate() {
    const dialogRef = this.dialog
      .open(CreateCandidateComponent, {
        width: '50vw',
        height: '80vh',
      })
      .afterClosed()
      .subscribe((response: any) => {
        this.initialize();
      });
  }
  initialize() {
    this.candidateService.getAllCandidates().subscribe((data: any) => {
      this.candidatos = data;
      this.candidatosFiltered = this.candidatos;
    });
  }

  onInputFilterChange(e: any) {
    this.candidatosFiltered = this.candidatos;

    if (e != '') {
      if (this.selectFilter == 'dni') {
        this.candidatosFiltered = this.candidatosFiltered.filter((x) =>
          x.dni.includes(e)
        );
      }
      if (this.selectFilter == 'name') {
        this.candidatosFiltered = this.candidatosFiltered.filter(
          (x) =>
            x.name.toLowerCase().includes(e.toLowerCase()) ||
            x.lastName.toLowerCase().includes(e.toLowerCase())
        );
      }
    }
  }
  onSelectFilterChange(e: any) {
    this.selectFilter = e.target.value;
  }
}
