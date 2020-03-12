import { Component, OnInit } from '@angular/core';
declare let L;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  private map;
  options : any;

  constructor() { }

  response = {
    "ions": {
      "City A": {
        "Position": {
          "Longitude": 9.96233,
          "Latitude": 49.80404
        }
      },
      "City B": {
        "Position": {
          "Longitude": 6.11499,
          "Latitude": 50.76891
        }
      },
      "City C": {
        "Position": {
          "Longitude": 6.80592,
          "Latitude": 51.53548
        }
      },
      "City D": {
        "Position": {
          "Longitude": 9.50523,
          "Latitude": 51.31991
        }
      },
      "City E": {
        "Position": {
          "Longitude": 9.66089,
          "Latitude": 48.70158
        }
      },
      "City F": {
        "Position": {
          "Longitude": 9.93368,
          "Latitude": 53.55608
        }
      },
      "City G": {
        "Position": {
          "Longitude": 11.56122,
          "Latitude": 48.14496
        }
      },
      "City H": {
        "Position": {
          "Longitude": 13.34253,
          "Latitude": 52.5319
        }
      },
      "City I": {
        "Position": {
          "Longitude": 6.11327,
          "Latitude": 50.77715
        }
      },
      "City J": {
        "Position": {
          "Longitude": 13.36671,
          "Latitude": 52.54344
        }
      }
    }
  }

  ngOnInit() {
    // this.initMap();
    this.renderMap();
  }

  //  initMap(){
  //     // this.map = L.map('map', {
  //     //   center: [39.8282, -98.5795],
  //     //   zoom: 3
  //     // });

  //     const globalMap = L.map('map', {
  //       zoomControl: true,
  //       center: [28.7041, 77.1025],
  //       maxZoom: 21,
  //       minZoom: 4
  //     }).setView([28.7041, 77.1025], 13);
  //     globalMap.zoomControl.setPosition('bottomright');
  //     const maplayer = L.tileLayer('https://{s}.google.com/vt/lyrs=s,h&hl=tr&x={x}&y={y}&z={z}', {
  //       subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
  //       maxNativeZoom: 21,
  //       zIndex: 0,
  //       maxZoom: 21
  //     }).addTo(globalMap);
  //   }



  renderMap() {
    var tempData;
    // document.getElementById("map").outerHTML = "";
    tempData = this.response;
    // console.log(tempData)
    //For LeafLet chart 
    const dataPoint = tempData.ions;
    // console.log(dataPoint)
    this.map = L.map("map")//.setView([12.9715987, 77.5945627], 12);
    this.options = {
      layers: [
        L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' }),
      ],
      zoom: 4,
      center: L.latLng({ lat: 12.9715987, lng: 77.5945627 }),
      // center:L.map("map").setView([12.9715987, 77.5945627], 12)
    };
    // store all the coordinates in this array o be able to iterate over the markers array
    let coordinates = [];

    // populate coordinates array with all the markers
    for (let i = 0; i < dataPoint.length; i++) {
      console.log(dataPoint.length);
      coordinates.push([Number(dataPoint[i].latitude), Number(dataPoint[i].longitude)]);
    };
    // console.log(coordinates);

    // visualize the markers on the map
    for (let i = 0; i < coordinates.length; i++) {
      L.marker(coordinates[i]).addTo(this.map)
        .bindPopup("<b>Latitude:</b> " + coordinates[i][0] + " <b>Longitude:</b> " + coordinates[i][1]);
    };
    console.log(coordinates);
  }


}


