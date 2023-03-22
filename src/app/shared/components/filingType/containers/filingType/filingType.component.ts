import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filingType',
  templateUrl: './filingType.component.html',
  styleUrls: ['./filingType.component.css']
})
export class FilingTypeComponent implements OnInit {
  @Input() model: any;
  @Output() modelChange = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
    this.model.filingType = '0';
  }

  radioChange() {
    this.modelChange.emit();
  }
}
