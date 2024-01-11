import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyToIdr',
})
export class CurrencyToIdrPipe implements PipeTransform {
  transform(value: any) {
    const numericValue = typeof value === 'string' ? parseFloat(value) : value;
    if (
      numericValue !== null &&
      numericValue !== undefined &&
      !isNaN(numericValue)
    ) {
      return numericValue.toLocaleString('id-ID', {
        style: 'currency',
        currency: 'IDR',
      });
    }
  }
}
