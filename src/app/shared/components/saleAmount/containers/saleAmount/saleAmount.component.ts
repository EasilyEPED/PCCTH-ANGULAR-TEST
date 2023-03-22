import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-saleAmount',
  templateUrl: './saleAmount.component.html',
  styleUrls: ['./saleAmount.component.css'],
})
export class SaleAmountComponent implements OnInit {
  @Input() model: any;
  @Input() summit: boolean;
  @Output() modelChange = new EventEmitter<any>();
  constructor() {}

  ngOnInit() {}

  valueChangebyHover() {
    this.modelChange.emit();
  }
}
