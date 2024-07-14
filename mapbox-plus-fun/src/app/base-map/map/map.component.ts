import { Component, OnInit } from '@angular/core';
import { CityService } from 'src/app/shared/services/cities/city-service.service';
import * as mapbox from 'mapbox-gl'

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit{

  map!: mapbox.Map

  constructor(private cityService: CityService){}

  ngOnInit(){
    this.cityService.citySelected$.subscribe((selectedData) =>{
      console.log(selectedData)
    })

    this.initMap()
  }

  initMap(){
    (mapbox as any).accessToken = 'pk.eyJ1IjoidGV2aWJyIiwiYSI6ImNseTFndWswaDAwamkycXM3Nnowemx2MmcifQ.KJDulCaawptiKUB30dBE1w'
    const initialZoom = 3;
    const initialLat =  -4.188116678606633
    const initialLng =  40.05855699277129
    this.map = new mapbox.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v9',
      center: [initialLat, initialLng],
      zoom: initialZoom
    })
  }
}
