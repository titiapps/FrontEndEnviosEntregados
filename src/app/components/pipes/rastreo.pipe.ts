import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "rastreo"
})
export class RastreoPipe implements PipeTransform {
  transform(value: any, num_rastreo?: any): any {
    if (value === "DHLExpress") {
      return `http://www.dhl.com.mx/exp-es/express/rastreo.html?AWB=${num_rastreo}&brand=DHL`;
    }
  }
}
