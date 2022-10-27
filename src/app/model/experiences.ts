export class Experiences {
  id : number;
  nombreE : string;
  descripcionE : string;
  logoExp : string;
  periodoAniosExp : string;

  constructor(nombreE: string, descripcionE: string, logoExp: string, periodoAniosExp: string){
    this.nombreE = nombreE;
    this.descripcionE = descripcionE;
    this.logoExp = logoExp;
    this.periodoAniosExp = periodoAniosExp;
  }
}
