import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import * as fromContainrs from './containers';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DirectiveModule } from '../../directive';

@NgModule({
  declarations: [...fromContainrs.containers],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    DirectiveModule,
  ],
  exports: [...fromContainrs.containers],
})
export class SurchargeModule {}
