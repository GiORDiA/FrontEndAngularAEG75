import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Projects } from 'src/app/model/projects';
import { ProjectsService } from 'src/app/servicios/projects.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-edit-projects',
  templateUrl: './edit-projects.component.html',
  styleUrls: ['./edit-projects.component.css']
})
export class EditProjectsComponent implements OnInit {

  proyectos: Projects = null;

  constructor(private proyetoServ: ProjectsService, private activatedRouter : ActivatedRoute, private router: Router, private tokenService: TokenService) { }
  isLogged = false;

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
    if (this.isLogged) {
      this.proyetoServ.detail(id).subscribe(data => {
        this.proyectos = data;
      }, err => {
        alert("Error al modificar este proyecto");
        this.router.navigate(['']);
      })
    } else {
      alert("No autorizado");
      this.router.navigate(['']);
    }
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.proyetoServ.update(id, this.proyectos).subscribe(data => {
      this.router.navigate(['']);
    }, err => {
      alert("Error al modificar este proyecto");
      this.router.navigate(['']);
    })
  }

}
