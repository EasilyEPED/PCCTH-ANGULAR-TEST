import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-month',
  templateUrl: './month.component.html',
  styleUrls: ['./month.component.css'],
})
export class MonthComponent implements OnInit {
  @Input() model: any;
  @Input() summit: boolean;
  months = [
    { text: '01 : January', value: '01' },
    { text: '02 : February', value: '02' },
    { text: '03 : March', value: '03' },
    { text: '04 : April', value: '04' },
    { text: '05 : May', value: '05' },
    { text: '06 : June', value: '06' },
    { text: '07 : July', value: '07' },
    { text: '08 : August', value: '08' },
    { text: '09 : September', value: '09' },
    { text: '10 : October', value: '10' },
    { text: '11 : November', value: '11' },
    { text: '12 : December', value: '12' },
  ];

  constructor() {}

  ngOnInit() {}
}
