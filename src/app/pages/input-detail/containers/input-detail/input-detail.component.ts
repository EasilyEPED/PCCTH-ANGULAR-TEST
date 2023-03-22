import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { InputDetailService } from 'src/app/services/input-detail.service';

@Component({
  selector: 'app-input-detail',
  templateUrl: './input-detail.component.html',
  styleUrls: ['./input-detail.component.scss'],
})
export class InputDetailComponent implements OnInit {
  @ViewChild('taxAmount', { static: false }) taxAmountCPN: ElementRef;
  @ViewChild('surcharge', { static: false }) surchargeCPN: ElementRef;
  @ViewChild('totalAmount', { static: false }) totalAmountCPN: ElementRef;
  Data = Object.assign({});
  iscurrentstep = 1;
  summit = false;
  constructor(
    private router: Router,
    private inputDetailService: InputDetailService
  ) {}

  ngOnInit() {}

  caltaxAmount() {
    this.taxAmountCPN['calTax']();
    this.calAdditionalRate();
  }

  calAdditionalRate() {
    this.Data.surcharge = '';
    this.Data.totalAmount = '';
    if (this.Data.filingType === '1') {
      setTimeout(() => {
        this.surchargeCPN?.['calSurcharge']();
        this.totalAmountCPN?.['caltotalAmount']();
      }, 1);
    }
  }

  next() {
    this.summit = true;
    if (this.ValidateField()) {
      alert('Invalid Data');
      return;
    }

    this.inputDetailService.setData(this.Data);
    this.router.navigate(['reviewConfirm'], { skipLocationChange: false });
  }

  ValidateField() {
    const requirefield = [
      'filingType',
      'month',
      'year',
      'saleAmount',
      'taxAmount',
    ];

    return requirefield.find((field) => !this.Data[field]);
  }
}
