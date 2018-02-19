import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { NutritionalCalculatorComponent } from './nutritional-calculator.component';
@NgModule({
  declarations: [
    NutritionalCalculatorComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    NutritionalCalculatorComponent
  ]
})
export class NutritionalCalculatorModule {}
