import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { VoterService } from 'src/app/services/voter.service';
import { Votante } from 'src/model/Voter';
import { CreateVotanteComponent } from '../create-votante/create-votante.component';
import { FingerprintComponent } from '../fingerprint/fingerprint.component';

@Component({
  selector: 'app-votante-card',
  templateUrl: './votante-card.component.html',
  styleUrls: ['./votante-card.component.scss'],
})
export class VotanteCardComponent implements OnInit {
  @Input() votante: Votante = new Votante('Pedrito', 'Perez', '12345678');
  @Output() resultEmitter = new EventEmitter();

  hasFingerprinrt = true;
  constructor(
    private voterService: VoterService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {}

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
  registerFingerprint() {
    this.dialog
      .open(FingerprintComponent, {
        width: '30vw',
        height: '50vh',
        data: {
          voter: this.votante,
        },
      })
      .afterClosed()
      .subscribe((data) => {
        if (data) {
          this.snackBar.open('Se ha registrado correctamente', '', {
            duration: 3000,
            panelClass: ['green-snackbar'],
          });
        } else {
          this.snackBar.open('Ha ocurrido un error en el registro', '', {
            duration: 3000,
            panelClass: ['red-snackbar'],
          });
        }
      });
  }

  openEdit() {
    const dialogRef = this.dialog
      .open(CreateVotanteComponent, {
        width: '50vw',
        height: '70vh',
        data: {
          votanteToEdit: this.votante,
        },
      })
      .afterClosed()
      .subscribe((data: any) => {
        console.log(data);
        this.resultEmitter.emit();
      });
  }
}
