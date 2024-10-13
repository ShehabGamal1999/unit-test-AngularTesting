import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'customSquarePipe',
})
export class CustomSquarePipe implements PipeTransform {
  transform(value: unknown): unknown {
    if (value !== null && !isNaN(Number(value))) {
      return Math.pow(Number(value), 2);
    }
    return 'Invalid input';
  }
}
