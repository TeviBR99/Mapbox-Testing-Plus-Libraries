import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map/map.component';
import { MapService } from 'ngx-mapbox-gl';
import { LayersService } from './map/services/layers.service';
import { SourcesService } from './map/services/sources.service';
import { GeojsonService } from './map/services/geojson.service';


@NgModule({
  declarations: [
    MapComponent
  ],
  imports: [
    CommonModule,
  ],
  providers: [
    MapService,
    LayersService,
    SourcesService,
    GeojsonService
  ],
  exports: [
    MapComponent
  ]
})
export class BaseMapModule { }
