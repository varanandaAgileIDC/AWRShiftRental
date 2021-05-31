import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { ModalController, Platform } from '@ionic/angular';

declare var google;

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {

  @ViewChild('map', { static: false }) mapElement: ElementRef;

  map: any;

  constructor(private modalCtrl:ModalController,
    private platform:Platform,private geoLocation:Geolocation) { }

  ngOnInit() {
    this.platform.ready().then(() => {
     
      let mapOptions = {
        zoom: 12,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: false
      }
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
 
      this.geoLocation.getCurrentPosition().then(pos => {

      
         
        let latLng = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
        this.map.setCenter(latLng);
        this.map.setZoom(16);

      }).catch((error) => {

        

        console.log('Error getting location', error);
      });
    });
  }

  done()
  {
    this.modalCtrl.dismiss();
  }
  cancel()
  {
    this.modalCtrl.dismiss();
  }

}
