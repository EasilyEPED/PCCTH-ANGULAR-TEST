import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputDetailRoutingModule } from './input-detail-routing.module';

import * as fromContainers from './containers';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [...fromContainers.containers],
  imports: [CommonModule, SharedModule, InputDetailRoutingModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class InputDetailModule {}
