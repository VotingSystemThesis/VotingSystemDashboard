import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-candidate',
  templateUrl: './create-candidate.component.html',
  styleUrls: ['./create-candidate.component.scss'],
})
export class CreateCandidateComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<CreateCandidateComponent>) {}

  ngOnInit(): void {}

  closeDialog() {
    this.dialogRef.close();
  }
}
