import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: 'conversion' })
export class ConversionPipe implements PipeTransform {
  transform(value: any, type: string): any {
    switch (type) {
      case 'g':
        return Math.round(value / 0.035274);
      case 'cm':
        return  Math.round(value * 2.54 );
    }
  }
}
