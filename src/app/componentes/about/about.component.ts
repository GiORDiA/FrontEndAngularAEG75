import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/servicios/persona.service';
//import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  persona: persona = new persona("","","");

  //private datosPorfolio:PorfolioService
  constructor(public personaService: PersonaService) { }

  ngOnInit(): void {
    //this.datosPorfolio.obtenerDatos();
    this.personaService.getPersona().subscribe(data => {this.persona = data})
  }
}
