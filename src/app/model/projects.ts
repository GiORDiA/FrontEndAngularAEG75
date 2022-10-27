export class Projects {
  id : number;
  nameProject : string;
  namePjB : string;
  namePjC : string;
  namePjD : string;
  imgProjectA : string;
  imgProjectB : string;
  imgProjectC : string;
  imgProjectD : string;
  dateProjectA : string;
  dateProjectB : string;
  dateProjectC : string;
  dateProjectD : string;
  linkProjectA : string;
  linkProjectB : string;
  linkProjectC : string;
  linkProjectD : string;
  descriptionProjectA : string;
  descriptionProjectB : string;
  descriptionProjectC : string;
  descriptionProjectD : string;

  constructor(nameProject:string, namePjB: string, namePjC : string, namePjD : string, imgProjectA: string, imgProjectB: string, imgProjectC: string, imgProjectD: string, dateProjectA: string, dateProjectB: string, dateProjectC: string, dateProjectD: string, linkProjectA: string, linkProjectB: string, linkProjectC: string, linkProjectD: string, descriptionProjectA: string, descriptionProjectB: string, descriptionProjectC: string, descriptionProjectD: string){
    this.nameProject = nameProject;
    this.namePjB = namePjB;
    this.namePjC = namePjC;
    this.namePjD = namePjD;
    this.imgProjectA = imgProjectA;
    this.imgProjectB = imgProjectB;
    this.imgProjectC = imgProjectC;
    this.imgProjectD = imgProjectD;
    this.dateProjectA = dateProjectA;
    this.dateProjectB = dateProjectB;
    this.dateProjectC = dateProjectC;
    this.dateProjectD = dateProjectD;
    this.linkProjectA = linkProjectA;
    this.linkProjectB = linkProjectB;
    this.linkProjectC = linkProjectC;
    this.linkProjectD = linkProjectD;
    this.descriptionProjectA = descriptionProjectA;
    this.descriptionProjectB = descriptionProjectB;
    this.descriptionProjectC = descriptionProjectC;
    this.descriptionProjectD = descriptionProjectD;
  }

}
