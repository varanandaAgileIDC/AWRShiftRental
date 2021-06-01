import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { ModalController, Platform } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';

declare var google;

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {

  @ViewChild('map', { static: false }) mapElement: ElementRef;

  map: any;
  address:any;
  marker: any;
  matrixDetails:any;

  constructor(private modalCtrl:ModalController,
    private platform:Platform,private geoLocation:Geolocation,
    public apiService:ApiService) { }

  ngOnInit() {
    this.platform.ready().then(() => {
     
      let mapOptions = {
        zoom:0,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: false
      }
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
 
      this.geoLocation.getCurrentPosition().then(pos => {

      
        let latLng = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
        this.map.setCenter(latLng);
        this.map.setZoom(13);


        let geocoder = new google.maps.Geocoder;
        let latlng = {lat: pos.coords.latitude, lng: pos.coords.longitude};
        geocoder.geocode({'location': latlng}, (results, status) => {

  debugger;
   console.log(results); // read data from here

    this.address = String(results[0].formatted_address);

    const infowindow = new google.maps.InfoWindow({
      content: this.address,
    });

    infowindow.open(this.map, this.marker);

      }).catch((error) => {

        console.log('Error getting location', error);
      });


      this.marker = new google.maps.Marker({
        position: latLng,
        map: this.map,
        //icon: this.icon,
        optimized: false,
        label: {
          text: this.address,//pos.coords.latitude + ',' + pos.coords.longitude,
          color: 'red',
        }

      });

      // this.map.event.addListener(this.marker, 'click', function() {
      //   infowindow.open(this.map,this.marker);
      // });

      // this.map.event.addListener(this.map, 'click', function(event) {
      //   this.placeMarker(this.map, event.latLng);
      // });


    });

    this.map.addListener("click", (e) => {
      debugger
      this.placeMarkerAndPanTo(e.latLng, this.map);
    });

  });
}


placeMarkerAndPanTo(latLng, map) {
  debugger
  this.marker.setMap(null)
  this.marker = null;

  let geocoder = new google.maps.Geocoder;
  geocoder.geocode({'location': latLng}, (results, status) => {

debugger;
console.log(results); // read data from here

this.address = String(results[0].formatted_address);


console.log(latLng.lat);
this.marker = new google.maps.Marker({
  position: latLng,
  map: map,
});
//map.pan
this.marker.setMap(this.map)

const infowindow = new google.maps.InfoWindow({
  content: this.address,
});



infowindow.open(this.map, this.marker);



}).catch((error) => {

  console.log('Error getting location', error);
});

}

   placeMarker(map, location) {
    var marker = new google.maps.Marker({
      position: location,
      map: map
    });
    var infowindow = new google.maps.InfoWindow({
      content: 'Latitude: ' + location.lat() +
      '<br>Longitude: ' + location.lng()
    });
    infowindow.open(map,marker);
  }

  done()
  {
    debugger

    if(this.apiService.addressPopUp=="pickUp")
    {
      this.apiService.pickUpLocation = this.address;
    }
    else if(this.apiService.addressPopUp=="dropOff")
    {
      this.apiService.dropOffLocation = this.address;
    }

    if(this.apiService.pickUpLocation && this.apiService.dropOffLocation)
    {

      this.findDistanceAndTime();

    }

    this.modalCtrl.dismiss();
  }
  cancel()
  {
    this.modalCtrl.dismiss();
  }

  findDistanceAndTime()
  {
    const service = new google.maps.DistanceMatrixService(); // instantiate Distance Matrix service
    const matrixOptions = {
      origins: [this.apiService.pickUpLocation], // technician locations
      destinations: [this.apiService.dropOffLocation], // customer address
      travelMode: 'DRIVING',
      //unitSystem: new google.maps.UnitSystem.IMPERIAL
    };

    debugger
    // Call Distance Matrix service
    this.matrixDetails =  service.getDistanceMatrix(matrixOptions, callback)
    
    // Callback function used to process Distance Matrix response
  function callback(response, status) {
    
      console.log(response);  
      if (status !== "OK") {
        alert("Error with distance matrix");
        return;
      }
      else
      {
      debugger
        let distanceStr  = response["rows"][0]["elements"][0]["distance"]["text"]; 
        //this.apiService.matrixDistance = distanceStr.replace("mi","");
        // let number = Number(matrixDistance);
        // this.matrixDistance = (number * 1.6093).toFixed(2);
       // this.apiService.matrixTime = response["rows"][0]["elements"][0]["duration"]["text"]; 

        // this.apiservice.matrixDistance = this.matrixDistance;
        // this.apiservice.matrixTime = this.matrixTime;
        debugger
        console.log(response);    
      }

      debugger
            
    
}

      
 
    debugger
  }

   

}
