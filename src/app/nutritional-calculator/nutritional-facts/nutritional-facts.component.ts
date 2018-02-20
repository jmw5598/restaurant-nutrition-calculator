import { Component, Input } from '@angular/core';

import { Ingredient } from '../../shared/model/ingredient.model';
import { NutritionalFacts } from '../../shared/model/nutritional-facts.model';

@Component({
  selector: 'qdoba-nutritional-facts',
  templateUrl: './nutritional-facts.component.html',
  styleUrls: ['./nutritional-facts.component.css']
})
export class NutritionalFactsComponent {

  @Input()
  nutrition: NutritionalFacts;

  @Input()
  ingredients: Array<Ingredient>;

  constructor() {}

}
