import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mycustom'
})
export class MycustomPipe implements PipeTransform {
  
  transform(data: Array<any>, searchTxt: string ): Array<any> {
    return data.filter(getData);
        function getData(value: { productName: string; }, index: string | number){
            if(value.productName.toUpperCase().indexOf(searchTxt.toUpperCase()) > -1 ) {
                return
              }
               
        };
  };
}
