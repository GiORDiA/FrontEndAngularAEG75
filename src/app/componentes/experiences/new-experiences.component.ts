import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiences } from 'src/app/model/experiences';
import { ExperiencesService } from 'src/app/servicios/experiences.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-new-experiences',
  templateUrl: './new-experiences.component.html',
  styleUrls: ['./new-experiences.component.css']
})
export class NewExperiencesComponent implements OnInit {
  nombreE: string = '';
  descripcionE: string = '';
  logoExp: string = '';
  periodoAniosExp: string = '';

  constructor(private sExperiences: ExperiencesService, private router: Router, private activatedRouter: ActivatedRoute, private tokenService: TokenService) { }
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

  onCreate(): void {
    const expe = new Experiences(this.nombreE, this.descripcionE, this.logoExp, this.periodoAniosExp);
    this.sExperiences.save(expe).subscribe(data => {
      alert("Experiencia añadida correctamente");
      this.router.navigate(['']);
      },err =>{
        alert("Falló");
        this.router.navigate(['']);
      }
    )
  }
}
