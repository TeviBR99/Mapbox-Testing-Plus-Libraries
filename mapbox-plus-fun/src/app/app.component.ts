import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { CityService } from './shared/services/cities/city-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  myControl = new FormControl('');
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]> = new Observable<string[]>();

  constructor(private cityService: CityService) {}

  ngOnInit() {
    this.loadCities();
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
