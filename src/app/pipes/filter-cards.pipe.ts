import { Pipe, PipeTransform } from '@angular/core';
import { ISearchItem } from '../search/search-item.model';

@Pipe({
  name: 'filterCards',
  pure: false,
})
export class FilterCardsPipe implements PipeTransform {

  transform(items :ISearchItem[], filtrator: string): ISearchItem[] {
    console.log('ppp', filtrator, '55', items);
    if (!filtrator.trim()) return items;

    items = items.filter(item => {
      return item.snippet.title.toLowerCase().includes(filtrator.toLowerCase())
    });
    console.log('ooo', items);
    return items;
  }
}
