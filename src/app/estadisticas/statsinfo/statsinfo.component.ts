import { ThisReceiver } from '@angular/compiler';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import Chart from 'chart.js/auto';
import { Subject } from 'rxjs';
import { CandidateService } from 'src/app/services/candidate.service';
import { ElectoralvotingService } from 'src/app/services/electoralvoting.service';
import { VoterService } from 'src/app/services/voter.service';
import { Candidato } from 'src/model/Candidato';
import { CandidatoCount } from 'src/model/CandidatoCount';
import { EleccionVoting } from 'src/model/EleccionVoting';
import { Votante } from 'src/model/Voter';

@Component({
  selector: 'app-statsinfo',
  templateUrl: './statsinfo.component.html',
  styleUrls: ['./statsinfo.component.scss'],
})
export class StatsinfoComponent implements OnInit {
  singleElection?: EleccionVoting;

  constructor(
    private candidateService: CandidateService,
    private voterService: VoterService,
    private electoralVotingService: ElectoralvotingService,
    @Inject(MAT_DIALOG_DATA) public data?: any
  ) {}
  public generalVotingChart: any;
  public candidateChart: any;

  COLORS = [
    '#4dc9f6',
    '#f67019',
    '#f53794',
    '#537bc4',
    '#acc236',
    '#166a8f',
    '#00a950',
    '#58595b',
    '#8549ba',
  ];

  ngOnInit(): void {
    this.singleElection = this.data.election;
    this.poblateData();
  }
  poblateData() {
    ///Grafica General
    this.voterService.getAllVoters().subscribe((resp: any) => {
      let voters: Votante[] = resp;
      voters = voters.filter((x) => x.city == this.singleElection!.city);
      let totalVoters = voters.length;
      let votedCount = 0;
      this.electoralVotingService
        .findVotedCountByElection(this.singleElection!.id!)
        .subscribe((resp: any) => {
          votedCount = resp;
          this.createGeneralPieChart(
            [votedCount, totalVoters - votedCount],
            this.generalVotingChart,
            'generalchart',
            ['Votos Confirmados', 'Votos Faltantes'],
            [this.COLORS[8], this.COLORS[2]]
          );
        });
    });
    //Grafica por candidate
    this.candidateService.getAllCandidates().subscribe((resp) => {
      let candidates: Candidato[] = resp;
      candidates = candidates.filter(
        (x) => x.votingId == this.singleElection?.id!
      );

      let candidateCountSubject = new Subject<CandidatoCount>();
      let candidateCountList: CandidatoCount[] = [];

      candidates.forEach((candidate) => {
        this.electoralVotingService
          .findVotedCountByCandidate(candidate.id!)
          .subscribe((resp: any) => {
            candidateCountSubject.next(
              new CandidatoCount(candidate!.id!, candidate.name, resp)
            );
          });
      });

      candidateCountSubject.subscribe((value: CandidatoCount) => {
        candidateCountList.push(value);
        let votingData: any[] = [];
        let labels: any[] = [];
        let colors: any[] = [];
        if (candidateCountList.length == candidates.length) {
          candidateCountList.forEach((candidateToChart) => {
            votingData.push(candidateToChart.count);
            labels.push(candidateToChart.name);
            colors.push(
              this.COLORS[candidateCountList.indexOf(candidateToChart)]
            );
          });
          this.createGeneralPieChart(
            votingData,
            this.candidateChart,
            'candidateChart',
            labels,
            colors
          );
        }
      });
    });
  }

  createGeneralPieChart(
    votingData: any[],
    chart: any,
    chartName: string,
    labels: any[],
    colors: any[]
  ) {
    var data = {
      datasets: [
        {
          data: votingData,
          backgroundColor: colors,
        },
      ],

      labels: labels,
    };
    chart = new Chart(chartName, {
      type: 'pie',
      data: data,
      options: {
        aspectRatio: 5.5,
      },
    });
  }
}
