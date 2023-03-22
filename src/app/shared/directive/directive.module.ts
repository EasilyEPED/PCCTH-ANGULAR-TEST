import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CurrencyFormatDirective } from './currency-format-directive';
import { ThaiCurrencyPipe } from '../pipes';
import { NumberDecimalsDirective } from './number-decimals-directive';

const EXPORT_DIRECTIVE = [CurrencyFormatDirective, NumberDecimalsDirective];

@NgModule({
  declarations: [...EXPORT_DIRECTIVE],
  imports: [CommonModule, FormsModule, RouterModule, ReactiveFormsModule],
  providers: [ThaiCurrencyPipe],
  exports: [...EXPORT_DIRECTIVE],
})
export class DirectiveModule {}
