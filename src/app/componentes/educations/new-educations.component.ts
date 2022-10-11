import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educations } from 'src/app/model/educations';
import { EducationsService } from 'src/app/servicios/educations.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-new-educations',
  templateUrl: './new-educations.component.html',
  styleUrls: ['./new-educations.component.css']
})
export class NewEducationsComponent implements OnInit {
  nombreE: string;
  descripcionE: string;
  logoE: string;
  logobE: string;
  logocE: string;
  periodoAniosE: string;

  constructor(private educacionS: EducationsService, private router: Router, private activatedRouter: ActivatedRoute, private tokenService: TokenService) { }
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
    const educacion = new Educations(this.nombreE, this.descripcionE, this.logoE, this.logobE, this.logocE, this.periodoAniosE);
    this.educacionS.save(educacion).subscribe(data =>{
      alert("Educación añadida correctamente");
      this.router.navigate(['']);
      },err =>{
        alert("Falló");
        this.router.navigate(['']);
      }
    )
  }
}
