import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { NutritionalFactsUtilityService } from './nutritional-facts-utility.service';

import { Ingredient } from '../../shared/model/ingredient.model';
import { NutritionalFacts } from '../../shared/model/nutritional-facts.model';
import { QDOBA_MENU } from '../../shared/model/qdoba-menu.default';

@Injectable()
export class NutritionalCalculatorService {

  private ingredients: Array<Ingredient>;
  private nutritionalFacts: NutritionalFacts;

  private ingredientsSubject = new BehaviorSubject<Array<Ingredient>>(null);
  private nutritionalFactsSubject = new BehaviorSubject<NutritionalFacts>(null);

  public entree = this.ingredientsSubject.asObservable();
  public nutrition = this.nutritionalFactsSubject.asObservable();

  constructor(private utilityService: NutritionalFactsUtilityService) {
    this.reset();
  }

  getIngredients() {
    return QDOBA_MENU;
  }

  add(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.addToNutritionalFacts(ingredient);
  }

  remove(ingredient: Ingredient) {
    const index = this.ingredients.indexOf(ingredient);
    this.ingredients.splice(index, 1);

    this.removeFromNutritionalFacts(ingredient);
  }

  reset() {
    this.clearNutritionalFacts();
    this.clearIngredients();
  }

  private clearNutritionalFacts() {
    this.nutritionalFacts = new NutritionalFacts(0,0,0,0,0,0,0,0,0,0,0,0,0, null);
    this.nutritionalFactsSubject.next(this.nutritionalFacts);
  }

  private clearIngredients() {
    this.ingredients = new Array<Ingredient>();
    this.ingredientsSubject.next(this.ingredients);
  }

  private addToNutritionalFacts(ingredient: Ingredient) {
    this.utilityService.add(ingredient.nutritionalFacts, this.nutritionalFacts);
  }

  private removeFromNutritionalFacts(ingredient: Ingredient) {
    this.utilityService.remove(ingredient.nutritionalFacts, this.nutritionalFacts);
  }

}
