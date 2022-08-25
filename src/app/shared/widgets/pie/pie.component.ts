import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import  HC_exporting  from 'highcharts/modules/exporting';


@Component({
  selector: 'app-widget-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.scss']
})
export class PieComponent implements OnInit {

  Highcharts = Highcharts;
  chartOptions = {}
  constructor() { }

  ngOnInit(): void {
    this.chartOptions = {
      chart: {
          type: 'pie',
          options3d: {
              enabled: true,
              alpha: 45,
              beta: 0
          }
      },
      title: {
          text: 'Analysis'
      },
      accessibility: {
          point: {
              valueSuffix: '%'
          }
      },
      exporting: {
        enabled: true,
      },
      credits: {
        enabled: true,
      },
      tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      plotOptions: {
          pie: {
              allowPointSelect: true,
              cursor: 'pointer',
              depth: 35,
              dataLabels: {
                  enabled: true,
                  format: '{point.name}'
              }
          }
      },
      series: [{
          type: 'pie',
          name: 'Browser share',
          data: [
              ['Posts', 45.0],
              ['Users', 26.8],
              {
                  name: 'Articles',
                  y: 12.8,
                  sliced: true,
                  selected: true
              },
              ['Comments', 8.5],
              ['Likes', 6.2],
              ['Others', 0.7]
          ]
      }]
  };
  //this is exporting function
  HC_exporting(Highcharts);
  setTimeout(() => {
    window.dispatchEvent(
      new Event('resize')
    );

  }, 300);
  }

}
