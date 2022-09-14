import { Partido } from './Partido';

export class Candidato {
  name: string;
  lastName: string;
  partido?: Partido;
  email: string;
  gender?: boolean;
  dni: string;
  fechaNacimiento: Date;

  constructor(
    nombre: string,
    apellido: string,
    email: string,
    dni: string,
    fechanacimiento: Date
  ) {
    this.name = nombre;
    this.lastName = apellido;
    this.email = email;
    this.dni = dni;
    this.fechaNacimiento = fechanacimiento;
  }
}
