import { Directive, ElementRef, HostListener, Input } from '@angular/core';
@Directive({
  selector: '[TwoDigitDecimaNumberDirective]'
})
export class NumberDecimalsDirective {
  // Allow decimal numbers and negative values
  private regex: RegExp = new RegExp(/^\d*\.?\d{0,2}$/g);
  private navigationKeys = [
    'Backspace',
    'Delete',
    'Tab',
    'Escape',
    'Enter',
    'Home',
    'End',
    'ArrowLeft',
    'ArrowRight',
    'Clear',
    'Copy',
    'Paste'
  ];

  constructor(private el: ElementRef) {
  }
  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    if (
      this.navigationKeys.indexOf(event.key) > -1 || // Allow: navigation keys: backspace, delete, arrows etc.
      (event.key === 'a' && event.ctrlKey === true) || // Allow: Ctrl+A
      (event.key === 'c' && event.ctrlKey === true) || // Allow: Ctrl+C
      (event.key === 'v' && event.ctrlKey === true) || // Allow: Ctrl+V
      (event.key === 'x' && event.ctrlKey === true) || // Allow: Ctrl+X
      (event.key === 'a' && event.metaKey === true) || // Allow: Cmd+A (Mac)
      (event.key === 'c' && event.metaKey === true) || // Allow: Cmd+C (Mac)
      (event.key === 'v' && event.metaKey === true) || // Allow: Cmd+V (Mac)
      (event.key === 'x' && event.metaKey === true) || // Allow: Cmd+X (Mac)
      //(index > -1 && (event.key === ',' || event.key === '-')) ||
      false
    ) {
    // let it happen, don't do anything
      return;
    }
    let current: string = this.el.nativeElement.value;
    const position = this.el.nativeElement.selectionStart;
    const next: string = [current.slice(0, position), event.key == 'Decimal' ? '.' : event.key, current.slice(position)].join('');
    if (next && !String(next).match(this.regex)) {
      event.preventDefault();
    }
  }

}

