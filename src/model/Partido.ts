export class Partido {
  name: string;
  description: string;
  creationDate: Date;
  status: boolean;
  id?: string;

  constructor(
    name: string,
    description: string,
    creationDate: Date,
    status: boolean
  ) {
    this.creationDate = creationDate;
    this.description = description;
    this.name = name;
    this.status = status;
  }
}
