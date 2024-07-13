import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Observable, startWith, map, filter, Subject } from 'rxjs';
import { CitiesApi } from 'src/app/shared/models/cities-api.model';
import { CityService } from 'src/app/shared/services/cities/city-service.service';


@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.scss']
})
export class SearchListComponent implements OnInit{

  myControl = new FormControl('');
  cities!: CitiesApi;
  private filteredCities: Subject<string[]> = new Subject<string[]>();
  filteredCities$ = this.filteredCities.asObservable();
  form!: FormGroup

  constructor(private cityService: CityService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.loadCities();
    this.form = this.formBuilder.group({
      cityToSearch: [null]
    })
  }

  public loadCities(){
    this.cityService.getAllCities().subscribe({
      next: (response) => {
        this.cities = new CitiesApi(response.data, response.error, response.msg)
      },
      error: (err) => {
        console.error("Error fetching cities", err);
      }
    })
  }

  public search(){
    const searchCity = this.form.value.cityToSearch
    const cityFounded = this.cities.data.filter( city => city.name.toLowerCase().includes(searchCity?.toLowerCase()))
    if(cityFounded.length > 0 ){
      this.filteredCities.next(cityFounded.map(c => c.name))
    }
  }

  public selectCity(city: any){
    const citySelected = this.cities.data.filter(c => c.name.includes(city))
    console.log("city Selected: ", citySelected)
  }


}
