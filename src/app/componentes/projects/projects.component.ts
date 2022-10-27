import { Component, OnInit } from '@angular/core';
import { Projects } from 'src/app/model/projects';
import { ProjectsService } from 'src/app/servicios/projects.service';
import { TokenService } from 'src/app/servicios/token.service';
//import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  proyectos: Projects[] = [];

  //private datosPorfolio:PorfolioService,
  constructor(private proyectoServ: ProjectsService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    //this.datosPorfolio.obtenerDatos();
    this.cargarProyecto();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarProyecto(): void{
    this.proyectoServ.lista().subscribe(data => {this.proyectos = data});
  }

  delete(id: number) {
    if (confirm("Desea eliminar?") == true) {
      if (id != undefined) {
        this.proyectoServ.delete(id).subscribe(data => {
          this.cargarProyecto();
        }, err => {
          alert("No se pudo eliminar")
        })
      }
    } else {
      alert("cancelado");
    }
  }
}
