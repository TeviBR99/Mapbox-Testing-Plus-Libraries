import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map/map.component';
import { NgxMapboxGLModule } from 'ngx-mapbox-gl';


@NgModule({
  declarations: [
    MapComponent
  ],
  imports: [
    CommonModule,
    NgxMapboxGLModule.withConfig({
      accessToken: 'pk.eyJ1IjoidGV2aWJyIiwiYSI6ImNseTFndWswaDAwamkycXM3Nnowemx2MmcifQ.KJDulCaawptiKUB30dBE1w'
    }),
  ],
  exports: [
    MapComponent
  ]
})
export class BaseMapModule { }
