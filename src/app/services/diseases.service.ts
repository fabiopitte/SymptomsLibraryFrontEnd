import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { IDisease } from '../models/IDisease';

@Injectable({
  providedIn: 'root',
})
export class DiseasesService {
  private disease = new Subject<IDisease>();
  symptom$ = this.disease.asObservable();

  private REST_API_SERVER = 'https://localhost:7176/api/diseases/';

  private GetHttpOptions(): any {
    return {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
  }
  constructor(private httpClient: HttpClient) {}

  getIDiseases(): Observable<IDisease[]> {
    return this.httpClient.get<IDisease[]>(`${this.REST_API_SERVER}`);
  }

  registerDisease(payload: IDisease): Observable<any> {
    return this.httpClient.post(
      `${this.REST_API_SERVER}`,
      payload,
      this.GetHttpOptions()
    );
  }
}
