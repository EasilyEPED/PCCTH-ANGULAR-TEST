import { Directive, ElementRef, HostListener, OnInit } from '@angular/core';
import { ThaiCurrencyPipe } from '../pipes';

@Directive({ selector: '[CurrencyFormat]' })
export class CurrencyFormatDirective implements OnInit {
  private el: HTMLInputElement;

  constructor(
    private elementRef: ElementRef,
    private currencyPipe: ThaiCurrencyPipe
  ) {
    this.el = this.elementRef.nativeElement;
  }

  public ngOnInit() {
    this.el.value = this.currencyPipe.transform(this.el.value, 2);
  }

  @HostListener('focus', ['$event.target.value'])
  public onFocus(value) {
    this.el.value = this.currencyPipe.parse(value, 2);
  }

  @HostListener('blur', ['$event.target.value'])
  public onBlur(value) {
    this.el.value = this.currencyPipe.transform(value, 2);
  }
}
