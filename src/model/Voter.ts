export class Votante {
  nombre: String;
  apellido: String;
  dni: String;
  voted: boolean;

  constructor(nombre: String, apellido: String, dni: String, voted: any) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.dni = dni;
    this.voted = voted;
  }
}
