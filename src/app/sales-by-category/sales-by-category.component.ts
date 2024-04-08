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
