import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Projects } from 'src/app/model/projects';
import { ProjectsService } from 'src/app/servicios/projects.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-new-projects',
  templateUrl: './new-projects.component.html',
  styleUrls: ['./new-projects.component.css']
})
export class NewProjectsComponent implements OnInit {

  nameProject : string = '';
  namePjB : string = '';
  namePjC : string = '';
  namePjD : string = '';
  imgProjectA : string = '';
  imgProjectB : string = '';
  imgProjectC : string = '';
  imgProjectD : string = '';
  dateProjectA : string = '';
  dateProjectB : string = '';
  dateProjectC : string = '';
  dateProjectD : string = '';
  linkProjectA : string = '';
  linkProjectB : string = '';
  linkProjectC : string = '';
  linkProjectD : string = '';
  descriptionProjectA : string = '';
  descriptionProjectB : string = '';
  descriptionProjectC : string = '';
  descriptionProjectD : string = '';

  constructor(private proyectoServ: ProjectsService, private router: Router, private activatedRouter: ActivatedRoute, private tokenService: TokenService) { }
  isLogged = false;

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
    if (this.isLogged) {
    } else {
      alert("No autorizado")
      this.router.navigate(['']);
    }
  }

  onCreate(): void{
    const proyectos = new Projects(this.nameProject, this.namePjB, this.namePjC, this.namePjD, this.imgProjectA, this.imgProjectB, this.imgProjectC, this.imgProjectD, this.dateProjectA,this.dateProjectB,this.dateProjectC,this.dateProjectD, this.linkProjectA, this.linkProjectB, this.linkProjectC, this.linkProjectD, this.descriptionProjectA, this.descriptionProjectB, this.descriptionProjectC, this.descriptionProjectD);
    this.proyectoServ.save(proyectos).subscribe(data =>{
      alert("Proyecto añadido correctamente");
      this.router.navigate(['']);
      },err =>{
        alert("Falló");
        this.router.navigate(['']);
      }
    )
  }

}
