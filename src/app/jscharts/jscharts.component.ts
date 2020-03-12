import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jscharts',
  templateUrl: './jscharts.component.html',
  styleUrls: ['./jscharts.component.scss']
})
export class JschartsComponent implements OnInit {
  xNWAvilabality = []
  nwData : any;
  onlineModalData = []
  offlineModalData = []
  
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

  this.getlink_util();
}


getlink_util() {
  var tempData;
  tempData = this.response;
  // console.log(tempData);
  var data1 = [];
  var data2 = [];
  this.nwData = tempData[0].ions;
  // console.log(tempData[0].ions);
  this.onlineModalData = this.nwData.filter(t => t.overall_status == 'online');
  this.offlineModalData = this.nwData.filter(t => t.overall_status == 'offline');
  let b = {};
  this.nwData.forEach(el => {
  b[el.overall_status] = (b[el.overall_status] || 0) + 1;
  })
  for (var key in b) {
  // this.xNWAvilabality.push({ y: b[key], name: key });
  data1.push(key);
  data2.push(key.length);
}
    console.log(data1);
    console.log(data2);
    this.piechart(data1, data2)
}



  
  // Start Google Charts DonutChart
  piechart(data1, data2){

    var datab1 = [['online','offline']]
    // console.log(datab1);
    for (var i = 0; i < data1.length; i++){
      datab1.push([data1[i],data2[i]])
    }
      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {

        var data = google.visualization.arrayToDataTable(datab1);

        var options = {
          title: 'xNWAvilabality',
          pieSliceText: 'label',
          sliceVisibilityThreshold :0
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));

        chart.draw(data, options);
      }
  }
}
