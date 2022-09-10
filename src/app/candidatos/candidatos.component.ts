import { Component, HostListener, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateCandidateComponent } from './create-candidate/create-candidate.component';

@Component({
  selector: 'app-candidatos',
  templateUrl: './candidatos.component.html',
  styleUrls: ['./candidatos.component.scss'],
})
export class CandidatosComponent implements OnInit {
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
  createCandidate() {
    const dialogRef = this.dialog.open(CreateCandidateComponent, {
      width: '50vw',
      height: '90vh',
    });
  }
}
