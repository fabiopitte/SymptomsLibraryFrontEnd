import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ISearch } from '../models/ISearch';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private REST_API_SERVER = 'https://localhost:7176/api/search/';

  constructor(private httpClient: HttpClient) {}

  search(s: string): Observable<ISearch[]> {
    return this.httpClient.get<ISearch[]>(`${this.REST_API_SERVER}${s}`);
  }
}
