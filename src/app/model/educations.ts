export class Educations {
  id : number;
  nombreE : string;
  descripcionE : string;
  logoE : string;
  logobE : string;
  logocE : string;
  periodoAniosE : string;

  constructor(nombreE: string, descripcionE: string, logoE: string, logobE: string, logocE: string, periodoAniosE: string){
    this.nombreE = nombreE;
    this.descripcionE = descripcionE;
    this.logoE = logoE;
    this.logobE = logobE;
    this.logocE = logocE;
    this.periodoAniosE = periodoAniosE;
  }
}
