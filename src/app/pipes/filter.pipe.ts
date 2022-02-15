import { Pipe, PipeTransform } from '@angular/core';
import { Pto } from '../shared/interfaces/pto';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  //funció que fa de filtre del llistat de manera reactiva
  transform(value: any, ...args: any): any {
    const pressupostList: Pto[] = [];
    for(const pressupost of value ){
      if(pressupost.ptoName.indexOf(args) > -1){
        pressupostList.push(pressupost);
      };
    };
    return pressupostList;
  }

}
