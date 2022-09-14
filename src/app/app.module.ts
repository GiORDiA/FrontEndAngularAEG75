import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { AboutComponent } from './componentes/about/about.component';
import { WaveAComponent } from './componentes/wave-a/wave-a.component';
import { ExperiencesComponent } from './componentes/experiences/experiences.component';
import { WaveBComponent } from './componentes/wave-b/wave-b.component';
import { EducationsComponent } from './componentes/educations/educations.component';
import { WaveCComponent } from './componentes/wave-c/wave-c.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { WaveDComponent } from './componentes/wave-d/wave-d.component';
import { ProjectsComponent } from './componentes/projects/projects.component';
import { WaveEComponent } from './componentes/wave-e/wave-e.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { PorfolioService } from './servicios/porfolio.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './componentes/login/login.component';
import { PortfoliowebComponent } from './componentes/portfolioweb/portfolioweb.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    WaveAComponent,
    ExperiencesComponent,
    WaveBComponent,
    EducationsComponent,
    WaveCComponent,
    SkillsComponent,
    WaveDComponent,
    ProjectsComponent,
    WaveEComponent,
    FooterComponent,
    LoginComponent,
    PortfoliowebComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [PorfolioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
