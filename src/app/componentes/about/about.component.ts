import { Component, OnInit } from '@angular/core';
import { About } from 'src/app/model/about';
import { persona } from 'src/app/model/persona.model';
import { AboutService } from 'src/app/servicios/about.service';
import { PersonaService } from 'src/app/servicios/persona.service';
import { TokenService } from 'src/app/servicios/token.service';
//import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  persona: persona = new persona("","","");
  about: About[] = [];

  //private datosPorfolio:PorfolioService
  constructor(public personaService: PersonaService, private aboutServ: AboutService, private tokenService: TokenService) { }
  isLogged = false;


  ngOnInit(): void {
    //this.datosPorfolio.obtenerDatos();
    this.personaService.getPersona().subscribe(data => {this.persona = data});
    this.cargarAbout();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarAbout(): void{
    this.aboutServ.lista().subscribe(data => {this.about = data});
  }

  delete(id: number) {
    if (confirm("Desea eliminar?") == true) {
      if (id != undefined) {
        this.aboutServ.delete(id).subscribe(data => {
          this.cargarAbout();
        }, err => {
          alert("No se pudo eliminar")
        })
      }
    } else {
      alert("cancelado");
    }
  }
}
