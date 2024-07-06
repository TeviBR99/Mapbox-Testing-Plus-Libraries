import { Injectable } from '@angular/core';
import { CityHttpService } from './city-http-service.service';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(private cityHttpService: CityHttpService) { }

  public getCities(city: string){
    return this.cityHttpService.getHttpCalCities(city);
  }
}
