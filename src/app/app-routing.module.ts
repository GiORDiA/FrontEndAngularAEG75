import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditEducationsComponent } from './componentes/educations/edit-educations.component';
import { NewEducationsComponent } from './componentes/educations/new-educations.component';
import { EditExperiencesComponent } from './componentes/experiences/edit-experiences.component';
import { NewExperiencesComponent } from './componentes/experiences/new-experiences.component';
import { LoginComponent } from './componentes/login/login.component';
import { PortfoliowebComponent } from './componentes/portfolioweb/portfolioweb.component';

const routes: Routes = [
  { path: '', component: PortfoliowebComponent },
  { path: 'login', component: LoginComponent },
  { path: 'nuevaexp', component: NewExperiencesComponent },
  { path: 'editexp/:id', component: EditExperiencesComponent },
  { path: 'nuevaedu', component: NewEducationsComponent },
  { path: 'editedu/:id', component: EditEducationsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
