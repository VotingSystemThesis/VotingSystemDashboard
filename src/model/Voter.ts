export class Votante {
  name: string;
  id?: string;
  lastName: string;
  dni: string;
  email?: string;
  gender?: boolean;
  voted?: boolean;
  birthDate?: Date;
  emissionDate?: Date;
  isActive?: boolean;
  fingerPrint?: string;
  city?: string;
  group?: string;

  constructor(nombre: string, apellido: string, dni: string) {
    this.name = nombre;
    this.lastName = apellido;
    this.dni = dni;
  }
}
