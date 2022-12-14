export class About {
  id: number;
  about: string;
  imgPerfil: string;
  imgAuthor: string;
  nombreCompleto: string;
  profesion: string;
  descripcion: string;
  cv: string;

  constructor(about: string, imgPerfil: string, imgAuthor: string, nombreCompleto: string, profesion: string, descripcion: string, cv: string){
    this.about = about;
    this.imgPerfil = imgPerfil;
    this.imgAuthor = imgAuthor;
    this.nombreCompleto = nombreCompleto;
    this.profesion = profesion;
    this.descripcion = descripcion;
    this.cv = cv;
  }
}
