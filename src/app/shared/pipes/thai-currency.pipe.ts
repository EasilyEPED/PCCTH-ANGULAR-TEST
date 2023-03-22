import { Pipe, PipeTransform } from '@angular/core';

const PADDING = '000000';

@Pipe({ name: 'thaicurrency' })
export class ThaiCurrencyPipe implements PipeTransform {
  private decimalSeparator: string;
  private thousandSeparator: string;

  constructor() {
    this.decimalSeparator = '.';
    this.thousandSeparator = ',';
  }

  public transform(value: number | string, fractionSize: number = 2): string {
    let [integer, fraction = ''] = (value || '')
      .toString()
      .split(this.decimalSeparator);

    fraction =
      fractionSize > 0
        ? this.decimalSeparator +
          (fraction + PADDING).substring(0, fractionSize)
        : '';

    integer = integer.replace(/\B(?=(\d{3})+(?!\d))/g, this.thousandSeparator);

    if (integer) {
      return integer + fraction;
    }
    return '';
  }

  public parse(value: string, fractionSize: number = 2): string {
    let [integer, fraction = ''] = (value || '').split(this.decimalSeparator);

    integer = integer.replace(new RegExp(this.thousandSeparator, 'g'), '');

    fraction =
      parseInt(fraction, 10) > 0 && fractionSize > 0
        ? this.decimalSeparator +
          (fraction + PADDING).substring(0, fractionSize)
        : '';

    return integer + fraction;
  }
}
