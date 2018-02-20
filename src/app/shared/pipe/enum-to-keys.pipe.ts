import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'enumToKeys'
})
export class EnumToKeysPipe implements PipeTransform {
  transform(data: Object) {
    const keys = Object.keys(data).filter((e, i) =>  i % 2 === 1);
    return keys;
  }
}
