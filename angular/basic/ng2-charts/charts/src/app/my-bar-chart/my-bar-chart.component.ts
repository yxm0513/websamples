import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-bar-chart',
  templateUrl: './my-bar-chart.component.html',
  styleUrls: ['./my-bar-chart.component.css'],
})
export class MyBarChartComponent implements OnInit {
  public barChartOptions = {
    scaleShowVerticalLines: false,

    responsive: true,
    scales: {
      xAxes: [
        {
          gridLines: {
            display: false,
          },
        },
      ],
      yAxes: [
        {
          gridLines: {
            display: false,
          },
        },
      ],
    },
  };

  public barChartLabels = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'June',
    'July',
    'Aug',
    'Sept',
    'Oct',
    'Nov',
    'Dec',
  ];

  public barChartType = 'line';
  public barChartLegend = false;
  public barChartData = [
    {
      data: [10, 59, 50, 90, 200, 180, 40, 30, 45, 120, 173, 70],
      label: 'Series A',
    },
    //{ data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' },
  ];

  public barChartColors: Array<any> = [
    {
      // first color
      //backgroundColor: 'rgba(225,10,24,0.2)',
      backgroundColor: 'rgb(238, 68, 68)',
      // borderColor: 'rgba(225,10,24,0.2)',
      borderColor: 'rgba(0,0,0,0)',
      //pointBackgroundColor: 'rgba(225,10,24,0.2)',
      pointBackgroundColor: 'rgb(238, 68, 68)',
      pointBorderColor: '#fff',
      pointBorderWidth: '3',
      pointRadius: '7',
      //pointHoverBackgroundColor: '#fff',
      //pointHoverBorderColor: 'rgba(225,10,24,0.2)',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
