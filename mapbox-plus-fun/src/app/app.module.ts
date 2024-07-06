import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/* Angular Material Modules*/
import {MatAutocompleteModule} from '@angular/material/autocomplete';

/* Handmade modules */
import { BaseMapModule } from './base-map/base-map.module';
import { NavigationModule } from './navigation/navigation.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchListModule } from './search-list/search-list.module';
import { CityHttpService } from './shared/services/cities/city-http-service.service';
import { CityService } from './shared/services/cities/city-service.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BaseMapModule,
    NavigationModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    SearchListModule,
    HttpClientModule
  ],
  providers: [CityHttpService, CityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
