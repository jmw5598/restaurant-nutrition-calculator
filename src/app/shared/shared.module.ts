import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnumToKeysPipe } from './pipe/enum-to-keys.pipe';
import { FilterByIngredientCategoryPipe } from './pipe/filter-by-ingredient-category.pipe';

@NgModule({
  declarations: [
    EnumToKeysPipe,
    FilterByIngredientCategoryPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    EnumToKeysPipe,
    FilterByIngredientCategoryPipe
  ],
})
export class SharedModule {}
