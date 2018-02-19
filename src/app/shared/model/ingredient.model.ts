import { IngredientCategory } from './ingredient-category.enum';
import { NutritionalFacts } from './nutritional-facts.model';

export class Ingredient {
  constructor(
    public description: string,
    public servingSize: number,
    public servingMetric: string,
    public category: IngredientCategory,
    public nutritionalFacts: NutritionalFacts
  ) {}
}
