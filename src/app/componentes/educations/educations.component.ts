import { Component, OnInit } from '@angular/core';
import { Educations } from 'src/app/model/educations';
import { EducationsService } from 'src/app/servicios/educations.service';
import { TokenService } from 'src/app/servicios/token.service';
//import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-educations',
  templateUrl: './educations.component.html',
  styleUrls: ['./educations.component.css']
})
export class EducationsComponent implements OnInit {

  educacion: Educations[] = [];

  //private datosPorfolio:PorfolioService
  constructor(private educacionS: EducationsService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    //this.datosPorfolio.obtenerDatos();
    this.cargarEducacion();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarEducacion(): void{
    this.educacionS.lista().subscribe(data => {this.educacion = data});
  }

  delete(id: number) {
    if (confirm("Desea eliminar?") == true) {
      if (id != undefined) {
        this.educacionS.delete(id).subscribe(data => {
          this.cargarEducacion();
        }, err => {
          alert("No se pudo eliminar")
        })
      }
    } else {
      alert("cancelado");
    }
  }
}
