import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ISymptom } from '../models/ISymptom';

@Injectable({
  providedIn: 'root',
})
export class SymptomsService {
  private symptom = new Subject<ISymptom>();
  symptom$ = this.symptom.asObservable();

  private REST_API_SERVER = 'https://localhost:7176/api/symptoms/';

  private GetHttpOptions(): any {
    return {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
  }
  constructor(private httpClient: HttpClient) {}

  getSymptoms(): Observable<ISymptom[]> {
    return this.httpClient.get<ISymptom[]>(`${this.REST_API_SERVER}`);
  }

  registerSymptom(payload: ISymptom): Observable<any> {
    return this.httpClient.post(
      `${this.REST_API_SERVER}`,
      payload,
      this.GetHttpOptions()
    );
  }
}
