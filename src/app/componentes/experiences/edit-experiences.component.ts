import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiences } from 'src/app/model/experiences';
import { ExperiencesService } from 'src/app/servicios/experiences.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-edit-experiences',
  templateUrl: './edit-experiences.component.html',
  styleUrls: ['./edit-experiences.component.css']
})
export class EditExperiencesComponent implements OnInit {
  expLab: Experiences = null;

  constructor(private sExperiences: ExperiencesService, private activatedRouter: ActivatedRoute, private router: Router, private tokenService: TokenService) { }
  isLogged = false;  
  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
    if (this.isLogged) {

    this.sExperiences.detail(id).subscribe(
      data =>{
        this.expLab = data;
      }, err =>{
        alert("Error al modificar experiencia");
        this.router.navigate(['']);
      }
    )
  } else {
    alert("No autorizado")
    this.router.navigate(['']);
  }

}

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.sExperiences.update(id, this.expLab).subscribe(
      data => {
        this.router.navigate(['']);
      }, err =>{
        alert("Error al modificar experiencia");
        this.router.navigate(['']);
      }
    )
  }
}
