import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Partido } from 'src/model/Partido';

@Component({
  selector: 'app-create-partido',
  templateUrl: './create-partido.component.html',
  styleUrls: ['./create-partido.component.scss'],
})
export class CreatePartidoComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<CreatePartidoComponent>,
    @Inject(MAT_DIALOG_DATA) public data?: any
  ) {}

  partido: Partido = new Partido('', '', new Date(), false);
  partidoForm = new FormGroup({
    name: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    status: new FormControl(true),
  });

  ngOnInit(): void {
    if (this.data != null) {
      this.partido = this.data.partidoToEdit;
      this.initializeFormToEdit();
      console.log(this.partido);
    } else {
      this.partidoForm.reset();
    }
  }

  initializeFormToEdit() {
    this.partidoForm.patchValue({
      name: this.partido.name,
      description: this.partido.description,
      status: this.partido.status,
    });
  }
  deletePartido() {
    this.dialogRef.close();
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
