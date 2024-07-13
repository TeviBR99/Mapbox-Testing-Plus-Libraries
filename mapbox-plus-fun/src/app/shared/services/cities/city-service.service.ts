import { Injectable } from '@angular/core';
import { CityHttpService } from './city-http-service.service';
import { Observable } from 'rxjs';
import { CitiesApi } from '../../models/cities-api.model';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(private cityHttpService: CityHttpService) { }

  public getAllCities(): Observable<CitiesApi>{
    return this.cityHttpService.getHttpCallCitiesFromServe();
  }

  public getCity(city: string){
    return this.cityHttpService.getCity(city);
  }

}
