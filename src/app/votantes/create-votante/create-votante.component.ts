import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Votante } from 'src/model/Voter';

@Component({
  selector: 'app-create-votante',
  templateUrl: './create-votante.component.html',
  styleUrls: ['./create-votante.component.scss'],
})
export class CreateVotanteComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<CreateVotanteComponent>,
    @Inject(MAT_DIALOG_DATA) public data?: any
  ) {}
  votante: Votante = new Votante('', '', '', false);
  gender: string = '';
  votanteForm = new FormGroup({
    name: new FormControl('', Validators.required),
    lastname: new FormControl('', Validators.required),
    dni: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    dateBirth: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    state: new FormControl('', [Validators.required]),
  });

  ngOnInit(): void {
    if (this.data != null) {
      this.votante = this.data.votanteToEdit;
      this.initializeFormToEdit();
      console.log(this.votante);
    } else {
      this.votanteForm.reset();
    }
  }
  initializeFormToEdit() {}
}
