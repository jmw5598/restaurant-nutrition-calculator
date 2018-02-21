import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { EntreeComponent } from './entree/entree.component';
import { IngredientListComponent } from './menu/ingredient-list/ingredient-list.component';
import { MenuComponent } from './menu/menu.component';
import { MenuHeadingComponent } from './menu/menu-heading/menu-heading.component';
import { NutritionalCalculatorComponent } from './nutritional-calculator.component';
import { NutritionalFactsComponent } from './nutritional-facts/nutritional-facts.component';

@NgModule({
  declarations: [
    EntreeComponent,
    IngredientListComponent,
    MenuComponent,
    MenuHeadingComponent,
    NutritionalCalculatorComponent,
    NutritionalFactsComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    NutritionalCalculatorComponent
  ]
})
export class NutritionalCalculatorModule {}
