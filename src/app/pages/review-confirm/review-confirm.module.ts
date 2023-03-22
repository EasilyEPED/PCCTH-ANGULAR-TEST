import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReviewConfirmRoutingModule } from './review-confirm-routing.module';

import * as fromContainers from './containers';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [...fromContainers.containers],
  imports: [CommonModule, SharedModule, ReviewConfirmRoutingModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ReviewConfirmModule {}
