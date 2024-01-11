import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'customDateFormat',
})
export class CustomDateFormatPipe implements PipeTransform {
  transform(value: any, format: string = 'dd-MM-yyyy'): any {
    if (value !== null && value !== undefined) {
      const dateValue = typeof value === 'string' ? new Date(value) : value;
      if (!isNaN(dateValue.getTime())) {
        const datePipe = new DatePipe('en-US');
        return datePipe.transform(dateValue, format);
      }
    }
    return null;
  }
}
