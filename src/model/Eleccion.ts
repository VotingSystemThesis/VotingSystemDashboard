export class Eleccion {
  title: String;
  description: String;
  date: Date;
  votingStatus?: string;

  constructor(title: String, description: String, date: Date) {
    this.title = title;
    this.description = description;
    this.date = date;
  }
}
