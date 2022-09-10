export class Candidato {
  nombre: string;
  apellido: string;
  partido: string;
  email: string;
  dni: string;
  fechaNacimiento: Date;

  constructor(
    nombre: string,
    apellido: string,
    partido: string,
    email: string,
    dni: string,
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
