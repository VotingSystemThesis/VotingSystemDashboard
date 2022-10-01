import { DatePipe, formatDate } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ElectoralvotingService } from 'src/app/services/electoralvoting.service';
import { EleccionVoting } from 'src/model/EleccionVoting';

@Component({
  selector: 'app-create-election',
  templateUrl: './create-election.component.html',
  styleUrls: ['./create-election.component.scss'],
})
export class CreateElectionComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<CreateElectionComponent>,
    private datePipe: DatePipe,
    private electoralVotingService: ElectoralvotingService,
    @Inject(MAT_DIALOG_DATA) public data?: any
  ) {}
  election = new EleccionVoting('', '', new Date(), false);
  electionForm = new FormGroup({
    city: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    date: new FormControl('', [Validators.required]),
  });
  ngOnInit(): void {
    if (this.data != null) {
      this.election = this.data.electionToEdit;
      this.initializeFormToEdit();
    } else {
      this.electionForm.reset();
    }
  }

  initializeFormToEdit() {
    var date = this.election.date.toString();
    var newdate = date.split('-').reverse().join('-');
    this.electionForm.patchValue({
      city: this.election.city,
      description: this.election.description,
      date: formatDate(newdate, 'yyyy-MM-dd', 'en'),
    });
  }

  deleteElection() {
    this.dialogRef.close();
  }
  closeDialog() {
    this.dialogRef.close();
  }
  submitForm() {
    if (this.electionForm.valid) {
      var newDate = this.electionForm.get('date')?.value;
      newDate = this.datePipe.transform(newDate, 'dd-MM-yyyy');

      let bodyToSendPost = {
        city: this.electionForm.get('city')?.value,
        description: this.electionForm.get('description')?.value,
        date: newDate,
      };
      let bodyToSendPut = {
        city: this.electionForm.get('city')?.value,
        description: this.electionForm.get('description')?.value,
        date: newDate,
        votingStatus: this.election.votingStatus,
      };

      //Edit
      if (this.election.description.length > 0) {
        this.electoralVotingService
          .editElection(bodyToSendPut, this.election.id!)
          .subscribe((data: any) => {
            this.dialogRef.close(data);
          });
      } else {
        //Submit
        this.electoralVotingService
          .createElection(bodyToSendPost)
          .subscribe((data: any) => {
            this.dialogRef.close(data);
          });
      }
    } else {
      console.log('Not Valid');
    }
  }
}
