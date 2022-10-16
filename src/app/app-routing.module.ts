import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditEducationsComponent } from './componentes/educations/edit-educations.component';
import { NewEducationsComponent } from './componentes/educations/new-educations.component';
import { EditExperiencesComponent } from './componentes/experiences/edit-experiences.component';
import { NewExperiencesComponent } from './componentes/experiences/new-experiences.component';
import { LoginComponent } from './componentes/login/login.component';
import { PortfoliowebComponent } from './componentes/portfolioweb/portfolioweb.component';
import { NewSkillsComponent } from './componentes/skills/new-skills.component';
import { EditSkillsComponent } from './componentes/skills/edit-skills.component';
import { NewAboutComponent } from './componentes/about/new-about.component';
import { EditAboutComponent } from './componentes/about/edit-about.component';

const routes: Routes = [
  { path: '', component: PortfoliowebComponent },
  { path: 'login', component: LoginComponent },
  { path: 'nuevaexp', component: NewExperiencesComponent },
  { path: 'editexp/:id', component: EditExperiencesComponent },
  { path: 'nuevaedu', component: NewEducationsComponent },
  { path: 'editedu/:id', component: EditEducationsComponent },
  { path: 'nuevaskill', component: NewSkillsComponent },
  { path: 'editskill/:id', component: EditSkillsComponent },
  { path: 'nuevoabout', component:NewAboutComponent },
  { path: 'editabout/:id', component:EditAboutComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
