import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-votantes',
  templateUrl: './votantes.component.html',
  styleUrls: ['./votantes.component.scss'],
})
export class VotantesComponent implements OnInit {
  constructor() {}
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
}
