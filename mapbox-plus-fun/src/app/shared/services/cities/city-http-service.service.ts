import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CityHttpService {

  private apiUrl = 'https://api.api-ninjas.com/v1/city?name=';

  constructor(private httpClient: HttpClient ) { }

  public getHttpCalCities(city:string, state?: string, country?: string): Observable<any[]>{
    const headers = new HttpHeaders({
      'X-Api-Key':'fDIQ248ulO8ThslFXCf3Yg==T5HzTHkIDO58FluX'
    });

    let params = new HttpParams();

    if(state){
      params.set('state', state)
    }

    if(country){
      params.set('country', country)
    }

    return this.httpClient.get<any[]>( this.apiUrl + city, { headers, params})
  }
}
