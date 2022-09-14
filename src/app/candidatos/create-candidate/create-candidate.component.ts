import { formatDate } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CandidateService } from 'src/app/services/candidate.service';
import { PoliticalpartyService } from 'src/app/services/politicalparty.service';
import { Candidato } from 'src/model/Candidato';
import { Partido } from 'src/model/Partido';

@Component({
  selector: 'app-create-candidate',
  templateUrl: './create-candidate.component.html',
  styleUrls: ['./create-candidate.component.scss'],
})
export class CreateCandidateComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<CreateCandidateComponent>,
    private partidoService: PoliticalpartyService,
    private candidateService: CandidateService,
    @Inject(MAT_DIALOG_DATA) public data?: any
  ) {}
  polliticalParties: Partido[] = [];
  politicalparty? = new Partido('', '', new Date(), false);
  candidate: Candidato = new Candidato('', '', '', '', new Date());
  candidateForm = new FormGroup({
    name: new FormControl(' ', Validators.required),
    lastname: new FormControl(' ', Validators.required),
    dni: new FormControl('', Validators.maxLength(8)),
    gender: new FormControl(false, Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    dateBirth: new FormControl('', [Validators.required]),
    politicalParty: new FormControl('', [Validators.required]),
  });
  ngOnInit(): void {
    if (this.data != null) {
      this.candidate = this.data.personToEdit;
      this.initializeFormToEdit();
    } else {
      this.candidateForm.reset();
    }
    this.initializePoliticalParty();
    this.partidoService.getAllPolliticalParty().subscribe((response: any) => {
      this.polliticalParties = response;
    });
  }

  initializePoliticalParty() {
    this.candidateForm.get('politicalParty')?.valueChanges.subscribe((data) => {
      this.politicalparty = this.polliticalParties.find((x) => x.id == data);
      console.log(this.politicalparty);
    });
  }
  initializeFormToEdit() {
    this.candidateForm.patchValue({
      name: this.candidate.name,
      lastname: this.candidate.lastName,
      dni: this.candidate.dni,
      email: this.candidate.email,
      gender: this.candidate.gender,
      dateBirth: formatDate(this.candidate.fechaNacimiento, 'yyyy-MM-dd', 'en'),
    });
  }

  updateFormGender(event: any) {
    this.candidateForm.get('gender')?.setValue(event.target.value);
  }
  updateFormPoliticalParty(event: any) {
    console.log(event.target.value);
  }
  submitForm() {
    if (this.candidateForm.valid) {
      var newDate = this.candidateForm
        .get('dateBirth')
        ?.value?.split('-')
        .reverse()
        .join('-');
      let politicalPartyBody = {
        id: this.politicalparty?.id,
        name: this.politicalparty?.name,
        description: this.politicalparty?.description,
        creationDate: this.politicalparty?.creationDate,
      };

      let gender = this.candidateForm.get('gender')?.value;

      let body = {
        name: this.candidateForm.get('name')?.value,
        lastName: this.candidateForm.get('lastname')?.value,
        dni: this.candidateForm.get('dni')?.value,
        email: this.candidateForm.get('email')?.value,
        gender: Boolean(gender),
        birthDate: newDate,
        politicalParty: politicalPartyBody,
      };
      this.candidateService.createCandidate(body).subscribe((response: any) => {
        this.dialogRef.close();
      });
    } else {
      console.log('Not Valid');
    }
  }
  deleteCandidate() {
    this.dialogRef.close();
  }
  closeDialog() {
    this.dialogRef.close();
  }
}
