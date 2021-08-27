import { Pipe, PipeTransform } from '@angular/core';
import { ISearchItem } from '../models/search-item.model';

@Pipe({
  name: 'filterCards',
  pure: false,
})
export class FilterCardsPipe implements PipeTransform {
  transform(items :ISearchItem[] | null, filtrator: string | null): ISearchItem[] {
    if (!items) {
      return [];
    }

    if (!filtrator || !filtrator.trim()) return items;

    const arr = items.filter(
      (el) => el.snippet.title.toLowerCase().includes(filtrator.toLowerCase()),
    );
    return arr;
  }
}
