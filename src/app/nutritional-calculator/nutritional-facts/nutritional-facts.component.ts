import { Component, OnInit, OnDestroy } from '@angular/core';

import { Ingredient } from '../../shared/model/ingredient.model';
import { NutritionalFacts } from '../../shared/model/nutritional-facts.model';
import { NutritionalCalculatorService } from '../../core/service/nutritional-calculator.service';

@Component({
  selector: 'qdoba-nutritional-facts',
  templateUrl: './nutritional-facts.component.html',
  styleUrls: ['./nutritional-facts.component.css']
})
export class NutritionalFactsComponent implements OnInit, OnDestroy {

  subscriptionNutrition;
  subscriptionEntree;

  nutrition: NutritionalFacts;
  entree: Array<Ingredient>;

  constructor(
    private calcService: NutritionalCalculatorService
  ) {}

  ngOnInit() {

    this.subscriptionNutrition = this.calcService.nutrition
      .subscribe(
        data => this.nutrition = data
      );

    this.subscriptionEntree = this.calcService.entree
      .subscribe(
        data => this.entree = data
      );

  }

  ngOnDestroy() {
    if(this.subscriptionNutrition)
      this.subscriptionNutrition.unsubscribe();
    if(this.subscriptionEntree)
      this.subscriptionEntree.unsubscribe();
  }

  public listedIngredients() {
    const result: Array<string> = new Array<string>();
    this.entree.forEach((e) => result.push(e.description));
    return result.join("; ");
  }

}
