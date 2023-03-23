import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-surcharge',
  templateUrl: './surcharge.component.html',
  styleUrls: ['./surcharge.component.css'],
})
export class SurchargeComponent implements OnInit {
  @ViewChild('Input', { static: false }) surcharge: ElementRef;
  @Input() model: any;
  constructor() {}

  ngOnInit() {}

  calSurcharge() {
    this.model.surcharge = (parseInt(this.model?.taxAmount) * 0.1).toFixed(2);
    this.model.surcharge = isNaN(this.model.surcharge)
      ? ''
      : this.model.surcharge.toString();
    this.surcharge.nativeElement['focus']();
    setTimeout(() => {
      this.surcharge.nativeElement['blur']();
    }, 1);
  }
}
