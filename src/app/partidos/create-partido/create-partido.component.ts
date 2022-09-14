import { formatDate } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PoliticalpartyService } from 'src/app/services/politicalparty.service';
import { Partido } from 'src/model/Partido';

@Component({
  selector: 'app-create-partido',
  templateUrl: './create-partido.component.html',
  styleUrls: ['./create-partido.component.scss'],
})
export class CreatePartidoComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<CreatePartidoComponent>,
    private polliticalPartyService: PoliticalpartyService,

    @Inject(MAT_DIALOG_DATA) public data?: any
  ) {}

  partido: Partido = new Partido('', '', new Date(), false);
  partidoForm = new FormGroup({
    name: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    creationDate: new FormControl('', [Validators.required]),
  });

  ngOnInit(): void {
    if (this.data != null) {
      this.partido = this.data.partidoToEdit;
      this.initializeFormToEdit();
    } else {
      this.partidoForm.reset();
    }
  }

  initializeFormToEdit() {
    var date = this.partido.creationDate.toString();
    var newdate = date.split('-').reverse().join('-');
    this.partidoForm.patchValue({
      name: this.partido.name,
      description: this.partido.description,
      creationDate: formatDate(newdate, 'yyyy-MM-dd', 'en'),
    });
  }
  deletePartido() {
    this.dialogRef.close();
  }

  closeDialog() {
    this.dialogRef.close();
  }
  submitForm() {
    if (this.partidoForm.valid) {
      var newDate = this.partidoForm
        .get('creationDate')
        ?.value?.split('-')
        .reverse()
        .join('-');
      let bodyToSend = {
        name: this.partidoForm.get('name')?.value,
        description: this.partidoForm.get('description')?.value,
        creationDate: newDate,
      };
      //Edit
      if (this.partido.name.length > 0) {
        this.polliticalPartyService
          .editPolliticalParty(bodyToSend, this.partido.id!)
          .subscribe((data: any) => {
            this.dialogRef.close(data);
          });
      } else {
        //Submit
        this.polliticalPartyService
          .createPolliticalParty(bodyToSend)
          .subscribe((data: any) => {
            this.dialogRef.close(data);
          });
      }
    } else {
      console.log('Not Valid');
    }
  }
}
