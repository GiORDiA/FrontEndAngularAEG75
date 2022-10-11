import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skills } from 'src/app/model/skills';
import { SkillsService } from 'src/app/servicios/skills.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-edit-skills',
  templateUrl: './edit-skills.component.html',
  styleUrls: ['./edit-skills.component.css']
})
export class EditSkillsComponent implements OnInit {

  skills: Skills = null;

  constructor(private skillsS: SkillsService, private activatedRouter: ActivatedRoute, private router: Router, private tokenService: TokenService) { }
  isLogged = false;

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
    if (this.isLogged) {
      this.skillsS.detail(id).subscribe(data => {
        this.skills = data;
      }, err => {
        alert("Error al modificar skill");
        this.router.navigate(['']);
      })
    } else {
      alert("No autorizado");
      this.router.navigate(['']);
    }
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.skillsS.update(id, this.skills).subscribe(data => {
      this.router.navigate(['']);
    }, err => {
      alert("Error al modificar esta skill");
      this.router.navigate(['']);
    })
  }
}
