import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountService } from './account.service';
import { LoginService } from './login.service';
import { InputDetailService } from './input-detail.service';

// import  /** Don't Delete, Pointer for auto generate */

@NgModule({
  imports: [CommonModule],
  providers: [AccountService, LoginService, InputDetailService],
  exports: [],
})
export class ServicesModule {}
