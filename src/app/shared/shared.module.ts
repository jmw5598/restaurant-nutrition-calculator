import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilterByIngredientCategoryPipe } from './pipe/filter-by-ingredient-category.pipe';

@NgModule({
  declarations: [
    FilterByIngredientCategoryPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    FilterByIngredientCategoryPipe
  ],
})
export class SharedModule {}
