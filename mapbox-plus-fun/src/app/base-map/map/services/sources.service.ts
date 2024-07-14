import { Injectable } from '@angular/core';
import { CitiesApi } from 'src/app/shared/models/cities-api.model';
import * as mapbox from 'mapbox-gl'
import { Source } from '../models/source.enum.model';
import * as mapboxgl from 'mapbox-gl';
import { GeojsonService } from './geojson.service';

@Injectable({
  providedIn: 'root'
})
export class SourcesService {

  constructor(private geoJsonService: GeojsonService) { }

  addCitySource(map: mapbox.Map, selectedData: any){
    map.addSource(Source.CITY_LOCATION,
      {
        'type': 'geojson',
        'data': this.geoJsonService.getCityDetails(selectedData) as string
      }
    )
    console.log(map)
  }

  updateCitySource(map: mapbox.Map, source: any, selectedData: CitiesApi){
    const city = selectedData.data[0];
    const updateData = {
      type: 'FeatureCollection',
      features: [
        {
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [city.long, city.lat] // New coordinates
          },
          properties: {
            title: 'Updated Point',
            description: 'New Location'
          }
        }
      ]
    };

    source.setData(updateData)
  }
}
