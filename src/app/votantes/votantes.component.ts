import { Component, HostListener, OnInit } from '@angular/core';
import { VoterService } from '../services/voter.service';

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

  constructor(private VoterService: VoterService) {}
  scrollTop = 0;
  hideNav = false;
  ngOnInit(): void {
    this.initialize();
  }
  initialize() {
    this.VoterService.getAllVoters().subscribe((data: any) => {
      console.log(data);
    });
  }
}
