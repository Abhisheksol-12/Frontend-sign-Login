import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPeople'
})
export class FilterPeoplePipe implements PipeTransform {

  transform(list: any[], filterText: string, dummy: number): any {
    return !filterText ? list : list.filter(
        (item) => item.userName.toLowerCase().includes(filterText.toLowerCase()) ||
                  item.fullName.toLowerCase().includes(filterText.toLowerCase())

                  // (item) => item.description.toLowerCase().includes(filterText.toLowerCase()) ||
                  // item.title.toLowerCase().includes(filterText.toLowerCase())          
                  
    ); 
  }

}
