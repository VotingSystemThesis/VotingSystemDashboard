export class Candidato {
  nombre: String;
  apellido: String;
  partido: String;
  email: String;
  dni: String;
  fechaNacimiento: Date;

  constructor(
    nombre: String,
    apellido: String,
    partido: string,
    email: String,
    dni: String,
    fechanacimiento: Date
  ) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.partido = partido;
    this.email = email;
    this.dni = dni;
    this.fechaNacimiento = fechanacimiento;
  }
}
