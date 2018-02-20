import { Component, OnInit } from '@angular/core';

import { NutritionalCalculatorService } from '../core/service/nutritional-calculator.service';

import { Ingredient } from '../shared/model/ingredient.model';
import { IngredientCategory } from '../shared/model/ingredient-category.enum';
import { NutritionalFacts } from '../shared/model/nutritional-facts.model';
import { FilterByIngredientCategoryPipe } from '../shared/pipe/filter-by-ingredient-category.pipe';

@Component({
  selector: 'qdoba-nutritional-calculator',
  templateUrl: './nutritional-calculator.component.html',
  styleUrls: ['./nutritional-calculator.component.css']

})
export class NutritionalCalculatorComponent implements OnInit {

  ingredients: Array<Ingredient>;
  ingredientCategory = IngredientCategory;

  constructor(
    private calcService: NutritionalCalculatorService
  ) {}

  ngOnInit() {
    this.ingredients = this.calcService.getIngredients();
  }

}
