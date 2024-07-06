import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, startWith, map } from 'rxjs';
import { CityService } from 'src/app/shared/services/cities/city-service.service';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.scss']
})
export class SearchListComponent implements OnInit{

  myControl = new FormControl('');
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]> = new Observable<string[]>();

  constructor(private cityService: CityService) {}

  ngOnInit() {
  }

  public search(){
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  public loadCities(){
    const city = 'Spain'
    this.cityService.getCities(city).subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (err) => {
        console.error("Error fetching cities", err);
      }
    });
  }
}
