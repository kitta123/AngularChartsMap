import { Component, OnInit } from '@angular/core';
declare let L;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  dataPoint: any;
  coordinates: any = [];
  mapLink: any;
  marker: any;

  constructor() { }

  response = [{
    "ions": [
      {
        "id": 1,
        "hex_id": null,
        "serial_no": "420",
        "s_number": "00:00:00:00:00:00:00:00:00:00:01:11:00:00:01:a4",
        "cnid": "98:6a:08:00",
        "name": "420",
        "version": "10.0.5_R_9437027",
        "authentication_successful": true,
        "system_package_version": "10.0.5_R_9437027",
        "quality_score": null,
        "ul_capacity_score": null,
        "dl_capacity_score": null,
        "uptime": null,
        "location": "Bangalore, Karnataka, India",
        "latitude": "12.9715987",
        "longitude": "77.5945627",
        "notifications_count": null,
        "failover_device_state": null,
        "site": {
          "id": 1,
          "name": "420",
          "is_hub": false,
          "location": "Bangalore, Karnataka, India"
        },
        "overall_status": "online"
      },
      {
        "id": 4,
        "hex_id": null,
        "serial_no": "5184",
        "s_number": "00:00:00:00:00:00:00:00:00:00:01:11:00:00:14:40",
        "cnid": "98:6a:20:00",
        "name": "5184",
        "version": "10.0.5_R_9437027",
        "authentication_successful": true,
        "system_package_version": "10.0.5_R_9437027",
        "quality_score": null,
        "ul_capacity_score": null,
        "dl_capacity_score": null,
        "uptime": null,
        "location": "Bangalore, Karnataka, India",
        "latitude": "12.9715987",
        "longitude": "77.5945627",
        "notifications_count": null,
        "failover_device_state": null,
        "site": {
          "id": 4,
          "name": "5184",
          "is_hub": true,
          "location": "Bangalore, Karnataka, India"
        },
        "overall_status": "offline"
      },
      {
        "id": 7,
        "hex_id": null,
        "serial_no": "5689",
        "s_number": "00:00:00:00:00:00:00:00:00:00:01:11:00:00:16:39",
        "cnid": "98:6a:38:00",
        "name": "5689",
        "version": "10.0.4_R_d5bf061",
        "authentication_successful": true,
        "system_package_version": "10.0.4_R_d5bf061",
        "quality_score": null,
        "ul_capacity_score": null,
        "dl_capacity_score": null,
        "uptime": null,
        "location": "Bangalore, Karnataka, India",
        "latitude": "12.9715987",
        "longitude": "77.5945627",
        "notifications_count": null,
        "failover_device_state": null,
        "site": {
          "id": 3,
          "name": "5689",
          "is_hub": false,
          "location": "Bangalore, Karnataka, India"
        },
        "overall_status": "offline"
      }
    ],
    "ui_layouts": [
      {
        "id": 4538,
        "layout_type": "map_zoom",
        "layout_value": "{\"zoom\":18,\"bounds\":{\"_northEast\":{\"lat\":12.973205225597185,\"lng\":77.59786248207092},\"_southWest\":{\"lat\":12.97111421996436,\"lng\":77.59201526641844}}}",
        "user_id": 5,
        "created_at": "2020-03-11T05:47:16.000Z",
        "updated_at": "2020-03-11T05:47:16.000Z"
      }
    ]
  }]

  ngOnInit() {
    this.renderMap();
  }


  renderMap() {

    var tempData;
    // // document.getElementById("map").outerHTML = "";
    tempData = this.response;
    //For LeafLet chart 
    this.dataPoint = tempData[0].ions;
    console.log(this.dataPoint)

    for (const i in this.dataPoint) {
      this.coordinates.push([(this.dataPoint[i].name),(this.dataPoint[i].location), Number(this.dataPoint[i].latitude), Number(this.dataPoint[i].longitude)]);
    };
    console.log(this.coordinates);

    

    var map = L.map('map').setView([12.2602, 77.1461], 8);
    this.mapLink = '<a href="http://openstreetmap.org">OpenStreetMap</a>';
    L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; ' + this.mapLink + ' Contributors',
      maxZoom: 18,
    }).addTo(map);

    for (var i = 0; i < this.coordinates.length; i++) {
      this.marker = new L.marker([this.coordinates[i][2], this.coordinates[i][3]]).addTo(map);
      this.marker.bindPopup(this.coordinates[i][0]).openPopup();
      this.marker.bindPopup(this.coordinates[i][1]).openPopup();
    }

  }


}


