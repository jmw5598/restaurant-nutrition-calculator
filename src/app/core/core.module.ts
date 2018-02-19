import { NgModule } from '@angular/core';

import { NutritionalCalculatorService } from './service/nutritional-calculator.service';
import { NutritionalFactsUtilityService } from './service/nutritional-facts-utility.service';

@NgModule({
  declarations: [],
  imports: [],
  exports: [],
  providers: [
    NutritionalCalculatorService,
    NutritionalFactsUtilityService
  ]
})
export class CoreModule {}
