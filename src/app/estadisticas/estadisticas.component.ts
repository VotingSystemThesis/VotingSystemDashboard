import { Component, HostListener, OnInit } from '@angular/core';
import { EleccionVoting } from 'src/model/EleccionVoting';
import { ElectoralvotingService } from '../services/electoralvoting.service';

@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.scss'],
})
export class EstadisticasComponent implements OnInit {
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: any) {
    const currentScroll = window.pageYOffset;
    if (currentScroll > 50) {
      this.hideNav = true;
    } else {
      this.hideNav = false;
    }
  }
  scrollTop = 0;
  hideNav = false;

  elections: EleccionVoting[] = [];
  constructor(private electoralvotingService: ElectoralvotingService) {}

  ngOnInit(): void {
    this.initialize();
  }
  initialize() {
    this.electoralvotingService
      .getAllElectoralVoting()
      .subscribe((resp: any) => {
        this.elections = resp;
      });
  }
}
