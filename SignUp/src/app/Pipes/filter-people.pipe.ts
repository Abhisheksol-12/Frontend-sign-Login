import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPeople'
})
export class FilterPeoplePipe implements PipeTransform {

  transform(list: any[], filterText: string, dummy: number): any {
    return !filterText ? list : list.filter(
          (item) => item.toLowerCase().includes(filterText.toLowerCase()) 
            //|| item.title.toLowerCase().includes(filterText.toLowerCase())
        );
  }

}
