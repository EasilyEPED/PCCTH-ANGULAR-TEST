import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-taxAmount',
  templateUrl: './taxAmount.component.html',
  styleUrls: ['./taxAmount.component.css'],
})
export class TaxAmountComponent implements OnInit {
  @ViewChild('Input', { static: false }) taxAmount: ElementRef;
  @Input() model: any;
  @Input() summit: boolean;
  @Output() modelChange = new EventEmitter<any>();
  originResult: any;
  constructor() {}

  ngOnInit() {}

  calTax() {
    const result = parseInt(this.model?.saleAmount) * 0.07;
    this.originResult = isNaN(result) ? '' : result.toFixed(2).toString();
    this.model.taxAmount = isNaN(result) ? '' : result.toFixed(2).toString();
    this.detectOnblur();
  }

  changeVal() {
    const result = parseInt(this.model.taxAmount) - parseInt(this.originResult);
    if (Math.abs(result) > 20) {
      this.model.taxAmount = this.originResult;
      alert('Invalid Tax');
      this.detectOnblur();
      return;
    }
    this.modelChange.emit();
  }

  detectOnblur() {
    this.taxAmount.nativeElement['focus']();
    setTimeout(() => {
      this.taxAmount.nativeElement['blur']();
    }, 1);
  }
}
