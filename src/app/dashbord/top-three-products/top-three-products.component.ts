import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-top-three-products',
  templateUrl: './top-three-products.component.html',
  styleUrls: ['./top-three-products.component.scss'],
})
export class TopThreeProductsComponent implements OnInit {
  chart = new Chart({
    chart: {
      type: 'bar',
      height: 225,
    },
    title: {
      text: 'Top 3 Products',
    },
    xAxis: {
      categories: ['LÎlÎUM', 'LÎlÎUM-x', 'Desert Orange'],
    },
    yAxis: {
      title: {
        text: '',
      },
    },
    series: [
      {
        type: 'bar',
        showInLegend: false,
        data: [
          {
            name: 'LÎlÎUM',
            y: 395,
            color: '#044342',
          },
          {
            name: 'Desert Orange',
            y: 385,
            color: '#7e0505',
          },
          {
            name: 'LÎlÎUM',
            y: 275,
            color: '#ed9e20',
          },
        ],
      },
    ],
    credits: {
      enabled: false,
    },
  });

  constructor() {}

  ngOnInit(): void {}
}
