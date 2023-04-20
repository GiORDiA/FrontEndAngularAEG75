import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Projects } from '../model/projects';


@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  // URL = 'http://localhost:8080/proyectos/';
  //URL = 'https://backendspringbootaeg75.herokuapp.com/proyectos/';
  URL = 'https://backendspringbootaeg75.onrender.com/proyectos/';

  constructor(private httpClient : HttpClient) { }

  public lista():Observable<Projects[]>{
    return this.httpClient.get<Projects[]>(this.URL + 'lista');
  }

  public detail(id: number): Observable<Projects>{
    return this.httpClient.get<Projects>(this.URL + `detail/${id}`);
  }

  public save(proyectos: Projects): Observable<any>{
    return this.httpClient.post<any>(this.URL + 'create', proyectos);
  }

  public update(id: number, proyectos: Projects): Observable<any>{
    return this.httpClient.put<any>(this.URL + `update/${id}`, proyectos);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }

}
