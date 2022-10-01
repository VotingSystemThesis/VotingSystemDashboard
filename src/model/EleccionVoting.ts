export class EleccionVoting {
  id?: string;
  description: string;
  votingStatus: string;
  date: Date;
  city?: string;
  isActive: boolean;

  constructor(
    description: string,
    votingStatus: string,
    date: Date,
    isActive: boolean
  ) {
    this.description = description;
    this.votingStatus = votingStatus;
    this.date = date;
    this.isActive = isActive;
  }
}
