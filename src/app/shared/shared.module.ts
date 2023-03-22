import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { AsideComponent } from './components/aside/aside.component';
import { filingTypeModule } from './components/filingType';
import { MonthModule } from './components/month';
import { PenaltyModule } from './components/penalty';
import { saleAmountModule } from './components/saleAmount';
import { SurchargeModule } from './components/surcharge';
import { TaxAmountModule } from './components/taxAmount';
import { TotalAmountModule } from './components/totalAmount';
import { YearModule } from './components/year';
import { ThaiCurrencyPipe } from './pipes';

// import components

const DeCLARE_COMPONENT = [
  AsideComponent,
  NavComponent,
  //ThaiCurrencyPipe
];

const EXPORT_COMPONENT = [
  filingTypeModule,
  MonthModule,
  PenaltyModule,
  saleAmountModule,
  SurchargeModule,
  TaxAmountModule,
  TotalAmountModule,
  YearModule,
];

@NgModule({
  declarations: [...DeCLARE_COMPONENT],
  imports: [CommonModule, FormsModule, RouterModule, ReactiveFormsModule],
  exports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    [...DeCLARE_COMPONENT, ...EXPORT_COMPONENT],
  ],
})
export class SharedModule {}
