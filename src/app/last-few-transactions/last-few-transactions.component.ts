import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-last-few-transactions',
  templateUrl: './last-few-transactions.component.html',
  styleUrl: './last-few-transactions.component.css',
})
export class LastFewTransactionsComponent implements OnInit {
  transactions = [
    {
      id: 1,
      title: 'LÎlÎUM-x',
      price: '$299',
      shop: 'Tech Pro',
      location: 'East Hartford',
      status: 'pending',
      imagePath: 'assets/lilium.png',
    },
    {
      id: 2,
      title: 'Desert',
      price: '$7.89',
      shop: 'Pick the best',
      location: 'Miamisburg',
      status: 'shipped',
      imagePath: 'assets/desert.png',
    },
    {
      id: 3,
      title: 'LÎlÎUM-x',
      price: '$69',
      shop: 'Quality Leathers',
      location: 'Phoenix',
      status: 'confirmed',
      imagePath: 'assets/lilium.png',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
