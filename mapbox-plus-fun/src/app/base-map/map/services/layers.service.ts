import { Injectable } from '@angular/core';
import * as mapbox from 'mapbox-gl'
import { Layer } from '../models/layer.enum.model';

@Injectable({
  providedIn: 'root'
})
export class LayersService {

  constructor() { }

  public addCityLayer(map: mapbox.Map, source?: any){
    map.addLayer({
      id: Layer.CITY_SELECTED,
      type: 'symbol',
      source: source,
      layout: {
        'icon-image': 'marker-15',
        'icon-size': 1.5,
        'text-field': '{title}',
        'text-font': ['Open Sans Semibold', 'Arial Unicode MS Bold'],
        'text-offset': [0, 0.6],
        'text-anchor': 'top'
      }
    })
  }
}
