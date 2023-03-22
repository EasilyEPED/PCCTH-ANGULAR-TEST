import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-totalAmount',
  templateUrl: './totalAmount.component.html',
  styleUrls: ['./totalAmount.component.css']
})
export class TotalAmountComponent implements OnInit {
  @Input() model: any;
  constructor() { }

  ngOnInit() {
  }

  caltotalAmount() {
    this.model.totalAmount = parseFloat(this.model.taxAmount) + parseFloat(this.model.surcharge) + parseInt(this.model.penalty)
    this.model.totalAmount = isNaN(this.model.totalAmount.toFixed(2)) ? '' : this.model.totalAmount.toFixed(2)
  }
}
