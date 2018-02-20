import { Component, Input } from '@angular/core';

import { Ingredient } from '../../shared/model/ingredient.model';
import { IngredientCategory } from '../../shared/model/ingredient-category.enum';

@Component({
  selector: 'qdoba-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  ingredientCategory = IngredientCategory; //declared to use in template

  @Input()
  ingredients: Array<Ingredient>;

  constructor() {}

}
