import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numero'
})
export class NumeroPipe implements PipeTransform {

  transform(value: string, almac:any): number {

    console.log(almac);
    
    return 0;
  }

}
