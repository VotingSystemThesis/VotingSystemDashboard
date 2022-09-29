import { DatePipe, formatDate } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { VoterService } from 'src/app/services/voter.service';
import { Votante } from 'src/model/Voter';

@Component({
  selector: 'app-create-votante',
  templateUrl: './create-votante.component.html',
  styleUrls: ['./create-votante.component.scss'],
})
export class CreateVotanteComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<CreateVotanteComponent>,
    private voterService: VoterService,
    private datePipe: DatePipe,
    @Inject(MAT_DIALOG_DATA) public data?: any
  ) {}
  voter: Votante = new Votante('', '', '');
  isNew = true;
  votanteForm = new FormGroup({
    name: new FormControl('', Validators.required),
    lastname: new FormControl('', Validators.required),
    dni: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    gender: new FormControl(false, Validators.required),
    birthDate: new FormControl('', [Validators.required]),
    emissionDate: new FormControl('', Validators.required),
    city: new FormControl('', [Validators.required]),
  });

  ngOnInit(): void {
    if (this.data != null) {
      this.voter = this.data.votanteToEdit;
      this.initializeFormToEdit();
      this.isNew = false;
    } else {
      this.votanteForm.reset();
    }
  }

  updateFormGender(event: any, isNew = true) {
    if (isNew) this.votanteForm.get('gender')?.setValue(event.target.value);
    else {
      this.votanteForm.get('gender')?.setValue(event);
    }
  }

  initializeFormToEdit() {
    var datebirth = this.voter.birthDate!.toString();
    var newdatebirth = datebirth.split('-').reverse().join('-');

    var emissinDate = this.voter.emissionDate!.toString();
    var newemissinDate = emissinDate.split('-').reverse().join('-');
    this.votanteForm.patchValue({
      name: this.voter.name,
      gender: this.voter.gender,
      lastname: this.voter.lastName,
      dni: this.voter.dni,
      city: this.voter.city,
      email: this.voter.email,
      birthDate: this.datePipe.transform(newdatebirth, 'yyyy-MM-dd'),
      emissionDate: this.datePipe.transform(newemissinDate, 'yyyy-MM-dd'),
    });
  }

  deleteVoter() {}

  closeDialog() {
    this.dialogRef.close();
  }

  submitForm() {
    if (this.votanteForm.valid) {
      var newbirthDate = this.votanteForm.get('birthDate')?.value;
      var newEmissionDate = this.votanteForm.get('emissionDate')?.value;

      let body = {
        name: this.votanteForm.get('name')?.value,
        lastName: this.votanteForm.get('lastname')?.value,
        email: this.votanteForm.get('email')?.value,
        dni: this.votanteForm.get('dni')?.value,
        gender: this.votanteForm.get('gender')?.value!,
        birthDate: this.datePipe.transform(newbirthDate, 'dd-MM-yyyy'),
        emissionDate: this.datePipe.transform(newEmissionDate, 'dd-MM-yyyy'),
        city: this.votanteForm.get('city')?.value,
      };

      if (this.isNew) {
        this.voterService.createVoter(body).subscribe((data: any) => {
          this.closeDialog();
        });
      } else {
        this.voterService
          .updateVoter(body, this.voter.id!)
          .subscribe((response: any) => {
            this.dialogRef.close();
          });
      }
    } else {
      console.log('No Valido');
    }
  }
}
