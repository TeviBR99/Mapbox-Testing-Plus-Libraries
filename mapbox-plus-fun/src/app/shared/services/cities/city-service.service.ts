import { Injectable } from '@angular/core';
import { CityHttpService } from './city-http-service.service';
import { Observable, Subject } from 'rxjs';
import { CitiesApi } from '../../models/cities-api.model';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  private citySelected: Subject<CitiesApi> = new Subject<CitiesApi>();
  citySelected$ = this.citySelected.asObservable();

  constructor(private cityHttpService: CityHttpService) { }

  public getAllCities(): Observable<CitiesApi>{
    return this.cityHttpService.getHttpCallCitiesFromServe();
  }

  public getCity(city: string){
    return this.cityHttpService.getCity(city);
  }

  public selectCity(city: CitiesApi){
    this.citySelected.next(city)
  }

}
