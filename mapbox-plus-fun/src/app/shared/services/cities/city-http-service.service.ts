import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CityHttpService {

  constructor(private httpClient: HttpClient ) { }

  public getHttpCalCities(): Observable<any[]>{
    return this.httpClient.get<any[]>('https://api.api-ninjas.com/v1/geocoding')
  }
}
