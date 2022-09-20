import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { VoterService } from 'src/app/services/voter.service';

@Component({
  selector: 'app-fingerprint',
  templateUrl: './fingerprint.component.html',
  styleUrls: ['./fingerprint.component.scss'],
})
export class FingerprintComponent implements OnInit {
  constructor(
    private voterService: VoterService,
    public dialogRef: MatDialogRef<FingerprintComponent>,
    @Inject(MAT_DIALOG_DATA) public data?: any
  ) {}
  isLoading = true;
  testing: any = 'stop';
  time: any;
  ngOnInit(): void {
    this.voterService
      .registerFingerprint(this.data.voter.dni)
      .subscribe((data: any) => {
        this.dialogRef.close(data);
      });
    this.countFourSeconds();
  }
  countFourSeconds() {
    this.time = setInterval(() => {
      this.testing = 'go';
      setTimeout(() => {
        this.testing = 'stop';
      }, 800);
    }, 4000);
  }
}
