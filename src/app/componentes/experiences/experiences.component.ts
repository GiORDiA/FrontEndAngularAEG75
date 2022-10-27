import { Component, OnInit } from '@angular/core';
import { Experiences } from 'src/app/model/experiences';
import { ExperiencesService } from 'src/app/servicios/experiences.service';
//import { PorfolioService } from 'src/app/servicios/porfolio.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.css']
})
export class ExperiencesComponent implements OnInit {
  expe: Experiences[] = [];

  //private datosPorfolio:PorfolioService,
  constructor(private sExperiences: ExperiencesService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    //this.datosPorfolio.obtenerDatos();
    this.cargarExperiencia();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarExperiencia(): void {
    this.sExperiences.lista().subscribe(data => {this.expe = data;});
  }

  delete(id: number) {
    if (confirm("Desea eliminar?") == true) {
      if (id != undefined) {
        this.sExperiences.delete(id).subscribe(data => {
          this.cargarExperiencia();
        }, err => {
          alert("No se pudo eliminar")
        })
      }
    } else {
      alert("cancelado");
    }
  }
}
