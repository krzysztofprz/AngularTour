import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'daysPipe'
})
export class DaysPipePipe implements PipeTransform {

  transform(value: any, args: number): any {
    let result = [];
    result = Array.from({ length: args }, (v, k) => k + 1);
    return result;
  }
}
