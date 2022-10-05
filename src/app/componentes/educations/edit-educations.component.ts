import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educations } from 'src/app/model/educations';
import { EducationsService } from 'src/app/servicios/educations.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-edit-educations',
  templateUrl: './edit-educations.component.html',
  styleUrls: ['./edit-educations.component.css']
})
export class EditEducationsComponent implements OnInit {
  educacion: Educations = null;

  constructor(private educacionS: EducationsService, private activatedRouter : ActivatedRoute, private router: Router, private tokenService: TokenService) { }
  isLogged = false;

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
    if (this.isLogged) {
      this.educacionS.detail(id).subscribe(data => {
        this.educacion = data;
      }, err => {
        alert("Error al modificar educación");
        this.router.navigate(['']);
      })
    } else {
      alert("No autorizado");
      this.router.navigate(['']);
    }
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.educacionS.update(id, this.educacion).subscribe(data => {
      this.router.navigate(['']);
    }, err => {
      alert("Error al modificar la educacion");
      this.router.navigate(['']);
    })
  }
}
