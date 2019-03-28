import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'description' })

export class DescriptionPipe implements PipeTransform{
  transform(value: any, title: boolean): string {

    if(title){
      // @ts-ignore
      switch (value) {

        case 'DomesticExpress1030' :
          return 'DHL Express Domestic 10:30™';
        case 'DomesticExpress1200':
          return 'DHL Express Domestic 12:00™';
        case 'DomesticExpress':
          return 'DHL Express Domestic™';
        case 'ExpressEasy':
          return 'Express Easy™';
        case 'DomesticEconomySelect':
          return 'DHL Economy Select Domestic™';

      }

    } else {
      // @ts-ignore
      switch (value) {

        case 'DomesticExpress1030' :
          return 'Entrega garantizada puerta a puerta de documentos y paquetes al siguiente día hábil antes ' +
            'de las 10:30 a.m., de lunes a viernes.';
        case 'DomesticExpress1200':
          return 'Entrega garantizada de documentos y paquetes puerta a puerta al siguiente día hábil\n' +
            'antes de las 12:00 p.m';
        case 'DomesticExpress':
          return 'Envío de documentos y paquetes con entrega al siguiente día hábil, de lunes a viernes.\n' +
            'Pueden aplicar días adicionales para zonas extendidas.';
        case 'ExpressEasy':
          return '';
        case 'DomesticEconomySelect':
          return 'Envío de todo tipo de paquetería, desde 2 kg, con entrega a partir de 2 días hábiles. ';

      }

    }

  }
}
