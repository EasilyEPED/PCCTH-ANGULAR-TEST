import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-year',
  templateUrl: './year.component.html',
  styleUrls: ['./year.component.css'],
})
export class YearComponent implements OnInit {
  @Input() model: any;
  @Input() summit: boolean;
  years = [
    { text: '2020', value: '2020' },
    { text: '2021', value: '2021' },
    { text: '2022', value: '2022' },
    { text: '2023', value: '2023' },
  ];
  constructor() {}

  ngOnInit() {}
}
