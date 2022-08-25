import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import  HC_exporting  from 'highcharts/modules/exporting';

@Component({
  selector: 'app-widget-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss']
})
export class AreaComponent implements OnInit {
  Highcharts = Highcharts;

  chartOptions = {}

  constructor() { }

  ngOnInit(): void {
    this.chartOptions = {
      chart: {
          type: 'area'
      },
      title: {
          text: 'Content Management'
      },
      subtitle: {
          text: ''
      },

      tooltip: {
          split: true,
          valueSuffix: ' millions'
      },
      credits: {
        enabled: false,
      },
      exporting: {
        enabled: true,
      },

      series: [
        {
          name: 'Posts',
          data: [502, 635, 809, 947, 1402, 3634, 5268]
      },
      {
          name: 'Users',
          data: [106, 107, 111, 133, 221, 767, 1766]
      },
      {
          name: 'Articles',
          data: [163, 203, 276, 408, 547, 729, 628]
      }, {
          name: 'Comment',
          data: [18, 31, 54, 156, 339, 818, 1201]
      }, {
          name: 'Likes',
          data: [2, 2, 2, 6, 13, 30, 46]
      }]
  };

  HC_exporting(Highcharts);
  setTimeout(() => {
    window.dispatchEvent(
      new Event('resize')
    );

  }, 300);
  }

}
