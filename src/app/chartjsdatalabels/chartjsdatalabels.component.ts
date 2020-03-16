import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import * as ChartDataLabels from 'chartjs-plugin-datalabels';


@Component({
  selector: 'app-chartjsdatalabels',
  templateUrl: './chartjsdatalabels.component.html',
  styleUrls: ['./chartjsdatalabels.component.scss']
})
export class ChartjsdatalabelsComponent implements OnInit {
  chart: any;
  constructor() { }

  ngOnInit() {
    this.chartdatalabels();
    // this.chart1();
  }

  chartdatalabels(){
    this.chart = new Chart('canvas', {
      type: 'doughnut',
      data: {
        labels: ['Data1','Data2','Data3'],
        datasets: [
          { 
            data: [45,45,45],
            backgroundColor: ['rgba(255, 0, 0, 1)','rgba(255, 0, 0, 0.1)'],
            fill: false
          },
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        layout: {
          padding: {
            top: 30
          }
        },
        legend: {
          display: true,
          position: 'bottom',
        },
        labels:{
          
        }
      }
    });
  }


}
