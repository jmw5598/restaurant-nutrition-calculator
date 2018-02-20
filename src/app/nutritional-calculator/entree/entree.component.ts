import { Component, OnInit, OnDestroy } from '@angular/core';

import { Ingredient } from '../../shared/model/ingredient.model';
import { NutritionalCalculatorService } from '../../core/service/nutritional-calculator.service';

@Component({
  selector: 'qdoba-entree',
  templateUrl: './entree.component.html',
  styleUrls: ['./entree.component.css']
})
export class EntreeComponent implements OnInit, OnDestroy {

  entree: Array<Ingredient>;
  subscription;

  constructor(
    private calcService: NutritionalCalculatorService
  ) {}

  ngOnInit() {
    this.subscription = this.calcService.entree
      .subscribe(
        data => this.entree = data
      );
  }
  
  remove(item: Ingredient) {
    this.calcService.remove(item);
  }

  ngOnDestroy() {
    if(this.subscription)
      this.subscription.unsubscribe();
  }

}
