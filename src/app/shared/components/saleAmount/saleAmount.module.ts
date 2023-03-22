import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared.module';

import * as fromContainrs from './containers';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DirectiveModule } from '../../directive';
import { ThaiCurrencyPipe } from '../../pipes';

@NgModule({
  declarations: [...fromContainrs.containers],
  imports: [CommonModule, FormsModule, RouterModule, ReactiveFormsModule, DirectiveModule],
  //providers: [ThaiCurrencyPipe],
  exports: [...fromContainrs.containers],
})
export class saleAmountModule {}
