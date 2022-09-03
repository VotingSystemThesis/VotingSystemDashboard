export class Eleccion {
  title: String;
  description: String;
  fechaInit: String;
  fechaFin: String;

  constructor(
    title: String,
    description: String,
    fechaInit: String,
    fechaFin: String
  ) {
    this.title = title;
    this.description = description;
    this.fechaFin = fechaFin;
    this.fechaInit = fechaInit;
  }
}
