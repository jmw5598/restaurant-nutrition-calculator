import { Pipe, PipeTransform } from '@angular/core';
import { Ingredient } from '../../shared/model/ingredient.model';
import { IngredientCategory } from '../../shared/model/ingredient-category.enum';

@Pipe({
  name: 'filterByIngredientCategory'
})
export class FilterByIngredientCategoryPipe implements PipeTransform {
  transform(items: Array<Ingredient>, category: IngredientCategory) {
    if(!items || !category)
      return items;
    else
      return items.filter((e) => e.category === category);
  }
}
