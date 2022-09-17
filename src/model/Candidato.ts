import { Partido } from './Partido';

export class Candidato {
  id?: string;
  name: string;
  lastName: string;
  politicalParty?: Partido;
  email: string;
  gender?: boolean;
  dni: string;
  birthDate: Date;

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
    this.birthDate = fechanacimiento;
  }
}
