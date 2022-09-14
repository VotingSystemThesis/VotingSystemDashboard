import { formatDate } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Candidato } from 'src/model/Candidato';

@Component({
  selector: 'app-create-candidate',
  templateUrl: './create-candidate.component.html',
  styleUrls: ['./create-candidate.component.scss'],
})
export class CreateCandidateComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<CreateCandidateComponent>,
    @Inject(MAT_DIALOG_DATA) public data?: any
  ) {}

  candidate: Candidato = new Candidato('', '', '', '', '', new Date());
  candidateForm = new FormGroup({
    name: new FormControl(' ', Validators.required),
    lastname: new FormControl(' ', Validators.required),
    dni: new FormControl('', Validators.maxLength(8)),
    email: new FormControl('', [Validators.required, Validators.email]),
    dateBirth: new FormControl('', [Validators.required]),
  });
  ngOnInit(): void {
    if (this.data != null) {
      this.candidate = this.data.personToEdit;
      this.initializeFormToEdit();
      console.log(this.candidate);
    } else {
      this.candidateForm.reset();
    }
  }
  initializeFormToEdit() {
    this.candidateForm.patchValue({
      name: this.candidate.nombre,
      lastname: this.candidate.apellido,
      dni: this.candidate.dni,
      email: this.candidate.email,
      dateBirth: formatDate(this.candidate.fechaNacimiento, 'yyyy-MM-dd', 'en'),
    });
  }

  deleteCandidate() {
    this.dialogRef.close();
  }
  closeDialog() {
    this.dialogRef.close();
  }
}
