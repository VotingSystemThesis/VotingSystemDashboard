import { Component, Input, OnInit } from '@angular/core';
import { VoterService } from 'src/app/services/voter.service';
import { Votante } from 'src/model/Voter';

@Component({
  selector: 'app-votante-card',
  templateUrl: './votante-card.component.html',
  styleUrls: ['./votante-card.component.scss'],
})
export class VotanteCardComponent implements OnInit {
  @Input() votante: Votante = new Votante('Pedrito', 'Perez', '12345678');
  hasFingerprinrt = true;
  constructor(private voterService: VoterService) {}

  ngOnInit(): void {
    this.validateFingerprint();
  }

  validateFingerprint() {
    this.voterService.validateFingerprint(this.votante.fingerPrint!).subscribe(
      (data: any) => {},
      (err) => {
        if (err.status != 200) this.hasFingerprinrt = false;
      }
    );
  }
}
