export class EleccionVoting {
  description: String;
  votingStatus: String;
  date: Date;
  isActive: boolean;

  constructor(
    description: String,
    votingStatus: String,
    date: Date,
    isActive: boolean
  ) {
    this.description = description;
    this.votingStatus = votingStatus;
    this.date = date;
    this.isActive = isActive;
  }
}
