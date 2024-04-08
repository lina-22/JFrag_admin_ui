import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-sales-by-month',
  templateUrl: './sales-by-month.component.html',
  styleUrl: './sales-by-month.component.css',
})
export class SalesByMonthComponent implements OnInit {
  chart = new Chart({
    chart: {
      type: 'line',
      height: 325,
    },
    title: {
      text: 'Month wise sales',
    },
    xAxis: {
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],
    },
    yAxis: {
      title: {
        text: 'Revenue in $',
      },
    },
    series: [
      {
        name: 'LÎlÎUM',
        type: 'line',
        color: '#044342',
        data: [70, 69, 95, 158, 166, 145, 256, 124],
      },

      {
        name: 'LÎlÎUM-x',
        type: 'line',
        color: '#7e0505',
        data: [70, 9, 95, 158, 66, 14, 56, 124],
      },

      {
        name: 'LÎlÎUM-y',
        type: 'line',
        color: '#ed9e20',
        data: [10, 29, 35, 18, 166, 175, 256, 124],
      },
    ],
    credits: {
      enabled: false,
    },
  });
  constructor() {}
  ngOnInit(): void {}
}
