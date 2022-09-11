export class Votante {
  nombre: string;
  apellido: string;
  dni: string;
  email?: string;
  gender?: string;
  voted: boolean;
  birthDate?: Date;
  isActive?: boolean;
  group?: string;
  city?: string;
  state?: string;

  constructor(nombre: string, apellido: string, dni: string, voted: any) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.dni = dni;
    this.voted = voted;
  }
}
