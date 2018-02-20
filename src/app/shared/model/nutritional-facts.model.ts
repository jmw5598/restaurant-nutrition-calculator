import { Alergy } from './alergy.enum';

export class NutritionalFacts {
  constructor(
    public servingSize: number,
    public caloriesPerServing: number,
    public caloriesFromFat: number,
    public totalFat: number,
    public saturatedFat: number,
    public transFat: number,
    public cholesterol: number,
    public sodium: number,
    public potassium: number,
    public totalCarbohydrate: number,
    public dietaryFiber: number,
    public sugar: number,
    public protein,
    public alergies: Array<Alergy>
  ) {}
}
