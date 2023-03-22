import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { InputDetailService } from 'src/app/services/input-detail.service';

@Component({
  selector: 'app-review-confirm',
  templateUrl: './review-confirm.component.html',
  styleUrls: ['./review-confirm.component.scss']
})
export class ReviewConfirmComponent implements OnInit, OnDestroy {
  taxData = Object.assign({});
  iscurrentstep = 2;
  destroyed$ = new Subject<void>();
  constructor(private inputDetailService: InputDetailService) { }

  ngOnInit() {
    this.inputDetailService.getData()
    .pipe(takeUntil(this.destroyed$))
    .subscribe((data) => {
      this.taxData = data || Object.assign({});

      this.taxData.filingType = Object.assign({ '0': 'Ordinary Filling', '1': 'Additional Filling' })[this.taxData?.filingType]

      const result = (parseInt(data?.saleAmount) * 0.07);
      this.taxData.taxAmount = (isNaN(result)) ? '' : result.toFixed(2);
      console.log(this.taxData)
    });
  }

  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}
