import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-fullactives',
  templateUrl: './fullactives.component.html',
  styleUrls: ['./fullactives.component.scss'],
})
export class FullactivesComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<FullactivesComponent>) {}

  ngOnInit(): void {}

  closeDialog() {
    this.dialogRef.close();
  }
}
