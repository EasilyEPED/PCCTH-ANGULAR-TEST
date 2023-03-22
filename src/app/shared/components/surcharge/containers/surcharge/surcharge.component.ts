import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-surcharge',
  templateUrl: './surcharge.component.html',
  styleUrls: ['./surcharge.component.css']
})
export class SurchargeComponent implements OnInit {
  @Input() model: any;
  constructor() { }

  ngOnInit() {
  }

  calSurcharge() {
    this.model.surcharge = (parseInt(this.model?.taxAmount) * 0.1).toFixed(2);
    this.model.surcharge = (isNaN(this.model.surcharge)) ? '' : this.model.surcharge.toString()
  }
}
