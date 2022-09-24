import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/servicios/persona.service';
/*import { PorfolioService } from 'src/app/servicios/porfolio.service';*/
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLogged = false;

  persona: persona = new persona("","","");

  /*private datosPorfolio:PorfolioService,*/
  constructor(public personaService: PersonaService, private router: Router, private tokenService: TokenService) { }

  ngOnInit(): void {
    /*this.datosPorfolio.obtenerDatos();*/
    /*this.personaService.getPersona().subscribe(data => {
      this.persona = data})*/
    if(this.tokenService.getToken()){
      this.isLogged=true;
    }else{
      this.isLogged = false;
    }
  }

  onLogOut(): void{
    this.tokenService.logOut();
    window.location.reload();
  }

  /*login(){
    this.router.navigate(['/login']);
  }*/

}
