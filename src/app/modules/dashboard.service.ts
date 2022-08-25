import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {


  constructor() { }

  bigChart() {
    return [
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
    }
    ];
  }

  cards() {
    return [95, 57, 55, 45];
  }



}
