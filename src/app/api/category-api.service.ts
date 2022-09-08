import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryApiService {
  baseUrl = `${environment.host}/category`;

  constructor(private _http: HttpClient) { }
}
