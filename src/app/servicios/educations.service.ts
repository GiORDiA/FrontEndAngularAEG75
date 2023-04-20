import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educations } from '../model/educations';

@Injectable({
  providedIn: 'root'
})
export class EducationsService {
  // URL = 'http://localhost:8080/educacion/';
  //URL = 'https://backendspringbootaeg75.herokuapp.com/educacion/';
  URL = 'https://backendspringbootaeg75.onrender.com/educacion/';

  constructor(private httpClient : HttpClient) { }

  public lista(): Observable<Educations[]>{
    return this.httpClient.get<Educations[]>(this.URL + 'lista');
  }

  public detail(id: number): Observable<Educations>{
    return this.httpClient.get<Educations>(this.URL + `detail/${id}`);
  }

  public save(educacion: Educations): Observable<any>{
    return this.httpClient.post<any>(this.URL + 'create', educacion);
  }

  public update(id: number, educacion: Educations): Observable<any>{
    return this.httpClient.put<any>(this.URL + `update/${id}`, educacion);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }
}
