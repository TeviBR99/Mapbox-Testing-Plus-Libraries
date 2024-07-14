import { Injectable } from '@angular/core';
import { LayersService } from './layers.service';
import { SourcesService } from './sources.service';
import * as mapbox from 'mapbox-gl'
import { CitiesApi } from 'src/app/shared/models/cities-api.model';
import { Source } from '../models/source.enum.model';
import { Layer } from '../models/layer.enum.model';

@Injectable({
  providedIn: 'root'
})
export class BaseMapService {

  constructor(private layerService: LayersService,
    private sourcesService: SourcesService,
  ) { }

  createLayers(map: any){
  }

  createSources(map: any){
    // this.sourcesService.addCitySource(map, selectedData)
  }

  selectCity(map: mapbox.Map, selectedData: CitiesApi){
    console.log("selectedData: ", selectedData)
    // this.sourcesService.addCitySource(map, selectedData)
    // this.layerService.addCityLayer(map, map.getSource(Source.CITY_LOCATION))

    // map.flyTo()

  }
}
