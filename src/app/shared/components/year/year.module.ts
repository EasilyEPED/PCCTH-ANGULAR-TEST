import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared.module';

import * as fromContainrs from './containers';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [...fromContainrs.containers],
  imports: [CommonModule, FormsModule, RouterModule, ReactiveFormsModule],
  exports: [...fromContainrs.containers],
})
export class YearModule {}
