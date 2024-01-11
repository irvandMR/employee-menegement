import { NgModule } from '@angular/core';
import { CurrencyToIdrPipe } from './format-currency.pipe';
import { CustomDateFormatPipe } from './format-date.pipe';

@NgModule({
  declarations: [CurrencyToIdrPipe, CustomDateFormatPipe],
  exports: [CurrencyToIdrPipe, CustomDateFormatPipe],
})
export class UtilModule {}
