import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiences } from '../model/experiences';

@Injectable({
  providedIn: 'root'
})
export class ExperiencesService {
  // expURL = 'http://localhost:8080/explab/';
  expURL = 'https://backendspringbootaeg75.herokuapp.com/explab/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Experiences[]>{
    return this.httpClient.get<Experiences[]>(this.expURL + 'lista');
  }

  public detail(id: number): Observable<Experiences>{
    return this.httpClient.get<Experiences>(this.expURL + `detail/${id}`);
  }

  public save(experiencia: Experiences): Observable<any>{
    return this.httpClient.post<any>(this.expURL + 'create', experiencia);
  }

  public update(id: number, experiencia: Experiences): Observable<any>{
    return this.httpClient.put<any>(this.expURL + `update/${id}`, experiencia);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.expURL + `delete/${id}`);
  }
}
