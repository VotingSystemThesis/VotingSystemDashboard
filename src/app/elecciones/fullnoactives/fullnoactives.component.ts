import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-fullnoactives',
  templateUrl: './fullnoactives.component.html',
  styleUrls: ['./fullnoactives.component.scss'],
})
export class FullnoactivesComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<FullnoactivesComponent>) {}

  ngOnInit(): void {}

  closeDialog() {
    this.dialogRef.close();
  }
}
