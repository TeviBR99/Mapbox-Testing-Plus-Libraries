import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeojsonService {

  constructor() { }

  getCityDetails(selectedData: any){
    return {
      'type': 'FeatureCollection',
      'features': [
        {
          'type': 'Feature',
          'geometry': {
            'type': 'Point',
            'coordinates': [selectedData.long, selectedData.lat]
          }
        }
      ]
    } as unknown as string

  }
}
