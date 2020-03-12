import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gcharts',
  templateUrl: './gcharts.component.html',
  styleUrls: ['./gcharts.component.scss']
})
export class GchartsComponent implements OnInit {

  link_util: any;
  xAxisData = [];

  constructor() { }


  response = [{
    "link_util_dist": {
      "0-25": [
        {
          "id": 1,
          "s_number": "00:00:00:00:00:00:00:00:00:00:01:11:00:00:01:a4",
          "created_at": "2019-09-19T11:49:48.000Z",
          "updated_at": "2020-02-20T07:21:50.000Z",
          "ip": null,
          "name": "420",
          "customer_name": null,
          "version": "10.0.5_R_9437027",
          "verified": false,
          "user_id": 4,
          "instance_type": null,
          "region": null,
          "default_ver": null,
          "failover": null,
          "cpe_type": null,
          "tags": null,
          "serial_no": "420",
          "model": "LN000000",
          "state_timestamp": null,
          "authentication": "{\"type\":\"UUID\",\"local\":{\"username\":\"\",\"password\":\"\"}}",
          "orchestration": null,
          "template": null,
          "template_id": null,
          "connection_state": false,
          "error_state": false,
          "initial_powered_on_at": "2019-09-19T12:35:57.000Z",
          "cnid": "98:6a:08:00",
          "interface_list": "lan0,lan1.1,lan1.150,lan1.151",
          "authentication_successful": true,
          "customer_id": 2,
          "hex_id": null,
          "wan_interface_list": "wan0,wan1.245",
          "system_package_version": "10.0.5_R_9437027",
          "site_id": 1,
          "failover_device_state": null,
          "ztp_token": null,
          "ztp_state": null,
          "hardware_attachment_type": "custom"
        },
        {
          "id": 4,
          "s_number": "00:00:00:00:00:00:00:00:00:00:01:11:00:00:14:40",
          "created_at": "2019-11-20T08:08:07.000Z",
          "updated_at": "2019-11-20T08:08:07.000Z",
          "ip": null,
          "name": "5184",
          "customer_name": null,
          "version": "10.0.5_R_9437027",
          "verified": false,
          "user_id": 4,
          "instance_type": null,
          "region": null,
          "default_ver": null,
          "failover": null,
          "cpe_type": null,
          "tags": null,
          "serial_no": "5184",
          "model": "LN000000",
          "state_timestamp": null,
          "authentication": "{\"type\":\"UUID\",\"local\":{\"username\":\"\",\"password\":\"\"}}",
          "orchestration": null,
          "template": null,
          "template_id": null,
          "connection_state": false,
          "error_state": false,
          "initial_powered_on_at": "2019-11-20T08:16:02.000Z",
          "cnid": "98:6a:20:00",
          "interface_list": "lan0",
          "authentication_successful": true,
          "customer_id": 2,
          "hex_id": null,
          "wan_interface_list": "wan1.20,wan2",
          "system_package_version": "10.0.5_R_9437027",
          "site_id": 4,
          "failover_device_state": null,
          "ztp_token": null,
          "ztp_state": null,
          "hardware_attachment_type": "custom"
        }
      ],
      "25-50": [{
        "id": 4,
        "s_number": "00:00:00:00:00:00:00:00:00:00:01:11:00:00:14:40",
        "created_at": "2019-11-20T08:08:07.000Z",
        "updated_at": "2019-11-20T08:08:07.000Z",
        "ip": null,
        "name": "5184",
        "customer_name": null,
        "version": "10.0.5_R_9437027",
        "verified": false,
        "user_id": 4,
        "instance_type": null,
        "region": null,
        "default_ver": null,
        "failover": null,
        "cpe_type": null,
        "tags": null,
        "serial_no": "5184",
        "model": "LN000000",
        "state_timestamp": null,
        "authentication": "{\"type\":\"UUID\",\"local\":{\"username\":\"\",\"password\":\"\"}}",
        "orchestration": null,
        "template": null,
        "template_id": null,
        "connection_state": false,
        "error_state": false,
        "initial_powered_on_at": "2019-11-20T08:16:02.000Z",
        "cnid": "98:6a:20:00",
        "interface_list": "lan0",
        "authentication_successful": true,
        "customer_id": 2,
        "hex_id": null,
        "wan_interface_list": "wan1.20,wan2",
        "system_package_version": "10.0.5_R_9437027",
        "site_id": 4,
        "failover_device_state": null,
        "ztp_token": null,
        "ztp_state": null,
        "hardware_attachment_type": "custom"
      }],
      "50-75": [],
      "75-100": []
    }
  }]

  ngOnInit() {

    this.getlink_util();
  }


  getlink_util() {
    var temp;
    temp = this.response;
    var data1 = [];
    var data2 = [];
    this.link_util = temp[0].link_util_dist;
    for (var key in this.link_util) {
      data1.push(key);
      data2.push(this.link_util[key].length);

    }
    // console.log(data1);
    // console.log(data2);
    this.donutchart(data1, data2)
  }

  // Start Google Charts DonutChart
  donutchart(data1, data2) {
    // console.log(data1,data2)

    var datab1 = [['Name','number']]
    // console.log(datab1);
    for (var i = 0; i < data1.length; i++){
      datab1.push([data1[i],data2[i]])
    }

    google.charts.load("current", { packages: ["corechart"] });
    google.charts.setOnLoadCallback(drawChart);
    function drawChart() {
      var data = google.visualization.arrayToDataTable(datab1);
      console.log(data)
      var options = { 
      title: 'link_util_dist', 
      pieHole: 0.4, 
      pieSliceText: 'label',
      sliceVisibilityThreshold :0, 
      tooltip: { trigger: 'none' }
    };
      var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
      chart.draw(data, options);
    }

  }
}
