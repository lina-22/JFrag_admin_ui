import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-sales-by-category',
  templateUrl: './sales-by-category.component.html',
  styleUrl: './sales-by-category.component.css',
})
export class SalesByCategoryComponent implements OnInit {
  chart = new Chart({
    chart: {
      type: 'pie',
      height: 325,
    },
    title: {
      text: 'Category wise sales',
    },
    xAxis: {
      categories: ['Male', 'Female', 'Children', 'Ladies'],
    },
    yAxis: {
      title: {
        text: 'Revenue in %',
      },
    },
    series: [
      {
        type: 'pie',
        data: [
          {
            name: 'Parfume',
            y: 41.0,
            color: '#044342',
          },
          {
            name: 'Lilium',
            y: 15.0,
            color: '#044342',
          },
          {
            name: 'Parfume',
            y: 3.5,
            color: '#ed9e20',
          },
          {
            name: 'Parfume',
            y: 41.0,
            color: '#6920fb',
          },
          {
            name: 'Parfume',
            y: 6.5,
            color: '#121212',
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
