import { Component, computed } from '@angular/core';
import { DatasetChartOptions } from 'chart.js';



@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss',
})
export class OverviewComponent {
  constructor( ) {
  }



  data = {
    labels: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ],
    datasets: [
      {
        label: 'Total Sales',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: true,
        tension: 0.2,
        borderColor: '#da5726',
        backgroundColor: 'rgba(218, 87, 38, 0.2)',
      },
    ],
  };
}
