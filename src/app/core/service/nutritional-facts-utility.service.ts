import { Injectable } from '@angular/core';
import { NutritionalFacts } from '../../shared/model/nutritional-facts.model';

@Injectable()
export class NutritionalFactsUtilityService {

  add(item: NutritionalFacts, to: NutritionalFacts) {
    to.caloriesFromFat += item.caloriesFromFat;
    to.caloriesPerServing += item.caloriesPerServing;
    to.cholesterol += item.cholesterol;
    to.dietaryFiber += item.dietaryFiber;
    to.potasium += item.potasium;
    to.protein += item.protein;
    to.saturatedFat += item.saturatedFat;
    to.servingSize += item.caloriesPerServing;
    to.sodium += item.sodium;
    to.sugar += item.sugar;
    to.totalCarbohydrate += item.totalCarbohydrate
    to.totalFat += item.totalFat;
    to.transFat += item.transFat;
    return to;
  }

  remove(item: NutritionalFacts, from: NutritionalFacts) {
    from.caloriesFromFat -= item.caloriesFromFat;
    from.caloriesPerServing -= item.caloriesPerServing;
    from.cholesterol -= item.cholesterol;
    from.dietaryFiber -= item.dietaryFiber;
    from.potasium -= item.potasium;
    from.protein -= item.protein;
    from.saturatedFat -= item.saturatedFat;
    from.servingSize -= item.caloriesPerServing;
    from.sodium -= item.sodium;
    from.sugar -= item.sugar;
    from.totalCarbohydrate -= item.totalCarbohydrate
    from.totalFat -= item.totalFat;
    from.transFat -= item.transFat;
    return from;
  }

}
