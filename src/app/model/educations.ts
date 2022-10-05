export class Educations {
  id?: number;
  nombreE: string;
  descripcionE: string;
  logoE: string;
  periodoAniosE: string;

  constructor(nombreE: string, descripcionE: string, logoE: string, periodoAniosE: string){
    this.nombreE = nombreE;
    this.descripcionE = descripcionE;
    this.logoE = logoE;
    this.periodoAniosE = periodoAniosE;
  }
}
