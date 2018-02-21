import { Component, Input } from '@angular/core';

import { Alergy } from '../../shared/model/alergy.enum';
import { NutritionalCalculatorService } from '../../core/service/nutritional-calculator.service';
import { Ingredient } from '../../shared/model/ingredient.model';
import { IngredientCategory } from '../../shared/model/ingredient-category.enum';

@Component({
  selector: '[qdoba-ingredient-list]',
  templateUrl: './ingredient-list.component.html',
  styleUrls: ['./ingredient-list.component.css']
})
export class IngredientListComponent {

  alergy = Alergy;

  @Input()
  title: string;

  @Input()
  ingredients: Array<Ingredient>;

  @Input()
  category: IngredientCategory;

  constructor(
    private calcService: NutritionalCalculatorService
  ) {}

  add(ingredient: Ingredient) {
    this.calcService.add(ingredient);
  }

  remove(ingredient: Ingredient) {
    this.calcService.remove(ingredient);
  }

}
