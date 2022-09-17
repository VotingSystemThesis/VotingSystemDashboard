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
      console.log(this.voter);
    } else {
      this.votanteForm.reset();
    }
  }
  initializeFormToEdit() {
    this.votanteForm.patchValue({
      name: this.voter.name,
      lastname: this.voter.lastName,
    });
  }

  deleteVoter() {}

  closeDialog() {
    this.dialogRef.close();
  }

  updateFormGender(event: any) {}

  submitForm() {
    if (this.votanteForm.valid) {
      var newbirthDate = this.votanteForm.get('emissionDate')?.value;
      var newEmissionDate = this.votanteForm.get('birthDate')?.value;

      let gender = this.votanteForm.get('gender')?.value;
      let body = {
        name: this.votanteForm.get('name')?.value,
        lastName: this.votanteForm.get('lastname')?.value,
        email: this.votanteForm.get('email')?.value,
        dni: this.votanteForm.get('dni')?.value,
        gender: Boolean(gender),
        birthDate: this.datePipe.transform(newbirthDate, 'dd-MM-yyyy'),
        emissionDate: this.datePipe.transform(newEmissionDate, 'dd-MM-yyyy'),
        city: this.votanteForm.get('city')?.value,
      };
      if (this.isNew) {
        //      this.voterService.createVoter(body).subscribe((data: any) => {
        //      console.log(data);
        //  this.closeDialog();
        // });
        console.log(body);
      } else {
        console.log('Editar');
      }
    } else {
      console.log('No Valido');
    }
  }
}
