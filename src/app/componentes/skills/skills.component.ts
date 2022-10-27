import { Component, OnInit } from '@angular/core';
import { Skills } from 'src/app/model/skills';
import { SkillsService } from 'src/app/servicios/skills.service';
import { TokenService } from 'src/app/servicios/token.service';
//import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skills: Skills[] = [];

  //private datosPorfolio:PorfolioService,
  constructor(private skillsServ: SkillsService, private tokenService: TokenService) { }
  isLogged = false;

  ngOnInit(): void {
    //this.datosPorfolio.obtenerDatos();
    this.cargarSkill();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarSkill(): void{
    this.skillsServ.lista().subscribe(data => {this.skills = data});
  }

  delete(id: number) {
    if (confirm("Desea eliminar?") == true) {
      if (id != undefined) {
        this.skillsServ.delete(id).subscribe(data => {
          this.cargarSkill();
        }, err => {
          alert("No se pudo eliminar")
        })
      }
    } else {
      alert("cancelado");
    }
  }
}
