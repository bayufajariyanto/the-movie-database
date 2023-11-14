import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {

  transform(minutes: number): string {
    if (!minutes || isNaN(minutes) || minutes < 0) {
      return 'Invalid Duration';
    }

    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;

    let result = '';

    if (hours > 0) {
      result += `${hours}h `;
    }

    if (remainingMinutes > 0) {
      result += `${remainingMinutes}m`;
    }

    return result.trim();
  }

}
