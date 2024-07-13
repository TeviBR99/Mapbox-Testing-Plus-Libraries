import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, startWith, map } from 'rxjs';
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
  filteredCities: Observable<string[]> = new Observable<string[]>();

  constructor(private cityService: CityService) {}

  ngOnInit() {
    this.loadCities()
    this.search()
  }

  public search(){
    console.log("search")
    // this.filteredCities = this.myControl.valueChanges.pipe(
    //   startWith(''),
    //   map(value => {
    //     const name = typeof value === 'string' ? value : value?.data.name;
    //     return name ? this._filter(name as string) : this.cities.slice();
    //   }),
    // );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.cities.data.filter(option => option.name.toLowerCase().includes(filterValue));
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

  public selectCity(event: any){
    const citySelected = event.value
    console.log(citySelected)
  }
}
