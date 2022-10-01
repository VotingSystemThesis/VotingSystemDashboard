import {
  Component,
  EventEmitter,
  Inject,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CandidateService } from 'src/app/services/candidate.service';
import { Candidato } from 'src/model/Candidato';

import { CreateCandidateComponent } from '../create-candidate/create-candidate.component';

@Component({
  selector: 'app-candidato-card',
  templateUrl: './candidato-card.component.html',
  styleUrls: ['./candidato-card.component.scss'],
})
export class CandidatoCardComponent implements OnInit {
  @Input() candidato: Candidato = new Candidato(
    'Test',
    'Apellido',
    'Fuerza Popular',
    'testingemail@test.com',
    new Date()
  );
  @Output() resultEmitter = new EventEmitter();
  imageUrl = '';

  constructor(
    public dialog: MatDialog,
    private candidateService: CandidateService
  ) {}

  ngOnInit(): void {
    this.candidateService.getProfilePic(this.candidato?.id!).subscribe(
      (response: any) => {
        //console.log(response);
      },
      (err) => {
        if (err.status == 200) {
          this.imageUrl = err.url;
        } else {
          this.imageUrl = '';
        }
      }
    );
  }

  openEdit() {
    const dialogRef = this.dialog
      .open(CreateCandidateComponent, {
        width: '50vw',
        height: '80vh',
        data: {
          personToEdit: this.candidato,
        },
      })
      .afterClosed()
      .subscribe((data: any) => {
        console.log(data);
        this.resultEmitter.emit();
      });
  }
}
