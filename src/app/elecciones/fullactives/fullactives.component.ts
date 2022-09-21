import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-fullactives',
  templateUrl: './fullactives.component.html',
  styleUrls: ['./fullactives.component.scss'],
})
export class FullactivesComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<FullactivesComponent>,
    @Inject(MAT_DIALOG_DATA) public data?: any
  ) {}

  ngOnInit(): void {
    console.log(this.data.elecciones);
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
