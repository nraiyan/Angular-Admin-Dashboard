import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import  HC_exporting  from 'highcharts/modules/exporting';

@Component({
  selector: 'app-widget-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() label: string = "";
  @Input() total: string = "";
  @Input() percentage: string = "";

  Highcharts = Highcharts;
  chartOptions = {}
  constructor() { }

  ngOnInit(): void {
    this.chartOptions = {
      chart: {
          type: 'area',
          backgroundColor: null,
          borderWidth: 0,
          margin: [2,2,2,2,],
          height: 100
      },
      title: {
          text: null
      },
      subtitle: {
          text: null
      },

      tooltip: {
          split: true,
          outside: true
      },
      legend: {
        enabled: false,

      },
      credits: {
        enabled: false,
      },
      exporting: {
        enabled: true,
      },
      xAxis: {
        labels: {
        enabled: false,
        },
        title: {
          text: null,
        },
        startOnTick: false,
        endOnTick: false,
        tickOption: [],
      },
      yAxis: {
        labels: {
        enabled: false,
        },
        title: {
          text: null,
        },
        startOnTick: false,
        endOnTick: false,
        tickOption: [],
      },

      series: [{
         data: [95, 57, 55, 45]
      }]
  };

  //this is exporting function
  // HC_exporting(Highcharts);
  setTimeout(() => {
    window.dispatchEvent(
      new Event('resize')
    );

  }, 300);
  }

}
