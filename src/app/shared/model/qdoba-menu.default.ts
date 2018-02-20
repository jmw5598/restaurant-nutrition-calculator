import { Alergy } from './alergy.enum';
import { Ingredient } from './ingredient.model';
import { IngredientCategory } from './ingredient-category.enum';
import { NutritionalFacts } from './nutritional-facts.model';

export const QDOBA_MENU: Array<Ingredient> = [

  new Ingredient(
  'Ancho Chili BBQ Sauce', 2, 'oz', IngredientCategory.SAUCE,
    new NutritionalFacts(57, 90, 25, 3, 1, 0, 0, 540, 125, 17, 2, 12, 0,
    [Alergy.MILK, Alergy.SOY, Alergy.WHEAT, Alergy.GLUTEN])
  ),

new Ingredient(
  'Bacon, Smoked', 0.3, 'oz', IngredientCategory.TOPPING,
    new NutritionalFacts(8, 35, 25, 3, 1, 0, 10, 130, 0, 0, 0, 0, 3,
    [])),

new Ingredient(
  'Beef, Seasoned Ground', 3.5, 'oz', IngredientCategory.MEAT,
    new NutritionalFacts(99, 190, 90, 11, 4, 1, 65, 560, 290, 4, 0, 1, 21,
    [Alergy.MILK])),

new Ingredient(
  'Beef, Smoked Brisket', 3.5, 'oz', IngredientCategory.MEAT,
    new NutritionalFacts(99, 270, 180, 20, 8, 0, 70, 1220, 550, 3, 0, 1, 20,
    [])),

new Ingredient(
  'Black Bean Corn Salsa', 2, 'oz', IngredientCategory.TOPPING,
    new NutritionalFacts(57, 110, 10, 1, 0, 0, 0, 65, 320, 24, 7, 2, 7,
    [] )),

new Ingredient(
  'Black Beans', 4, 'oz', IngredientCategory.FILLING,
    new NutritionalFacts(113, 140, 10, 1, 0, 0, 0, 330, 360, 24, 14, 1, 9,
    [] )),

new Ingredient(
  'Brown Rice', 4, 'oz', IngredientCategory.FILLING,
    new NutritionalFacts(113, 170, 10, 2, 0, 0, 0, 250, 115, 35, 3, 1, 4,
    [])),

new Ingredient(
  'Cheese, Cotija', 1, 'oz', IngredientCategory.TOPPING,
    new NutritionalFacts(28, 100, 70, 8, 5, 0, 25, 470, 25, 2, 0, 0, 6,
    [Alergy.MILK])),

new Ingredient(
  'Cheese, Shredded', 1.5, 'oz',IngredientCategory.TOPPING,
    new NutritionalFacts(43, 170, 120, 13, 8, 1, 45, 270, 45, 1, 0, 0, 10,
    [Alergy.MILK])),

new Ingredient(
  'Chicken, Grilled Marinated', 3.5, 'oz', IngredientCategory.MEAT,
    new NutritionalFacts(99, 170, 70, 8, 3, 0, 105, 530, 400, 4, 1, 1, 22,
    [Alergy.MILK])),

new Ingredient(
  'Cilantro Chimichurri', 1.5, 'oz', IngredientCategory.SAUCE,
    new NutritionalFacts(43, 100, 90, 10, 2, 0, 0, 140, 120, 2, 1, 0, 1,
    [])),

new Ingredient(
  'Chorizo', 3.5, 'oz', IngredientCategory.MEAT,
    new NutritionalFacts(99, 200, 110, 12, 4, 0, 60, 780, 340, 5, 0, 2, 18,
    [Alergy.MILK])),

new Ingredient(
  'Cilantro', 0.1, 'oz', IngredientCategory.TOPPING,
    new NutritionalFacts(3, 0, 0, 0, 0, 0, 0, 0, 20, 0, 0, 0, 0,
    [])),

new Ingredient(
  'Cilantro Lime Rice', 4, 'oz', IngredientCategory.FILLING,
    new NutritionalFacts(113, 190, 25, 3, 1, 0, 0, 390, 30, 38, 1, 0, 3,
    [])),

new Ingredient(
  'Cilantro Lime Dressing', 0.75, 'oz', IngredientCategory.SAUCE,
    new NutritionalFacts(21, 50, 45, 5, 1, 0, 0, 180, 20, 2, 0, 2, 0,
    [])),

new Ingredient(
  'Corn Tortilla', 5.5, 'in', IngredientCategory.TORTILLA,
    new NutritionalFacts(15, 40, 5, 0, 0, 0, 0, 0, 0, 8, 1, 0, 1,
    [Alergy.WHEAT, Alergy.GLUTEN])),

new Ingredient(
  'Corn Tortilla Chips', 4, 'oz', IngredientCategory.TORTILLA,
    new NutritionalFacts(113, 560, 230, 26, 5, 0, 0, 220, 0, 75, 9, 2, 7,
    [Alergy.WHEAT, Alergy.GLUTEN])),

new Ingredient(
  'Crispy Corn Tortilla Strips**', 0.1, 'oz',IngredientCategory.TOPPING,
    new NutritionalFacts(2, 10, 5, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0,
    [Alergy.WHEAT, Alergy.GLUTEN])),

new Ingredient(
  'Crispy Corn Taco Shell**', 1, 'shell', IngredientCategory.TORTILLA,
    new NutritionalFacts(13, 60, 25, 3, 1, 0, 0, 0, 0, 8, 1, 0, 1,
    [Alergy.WHEAT, Alergy.GLUTEN])),

new Ingredient(
  'Crunchy Tortilla Bowl', 1, 'bowl', IngredientCategory.TORTILLA,
    new NutritionalFacts(73, 390, 200, 22, 5, 0, 0, 150, 50, 41, 0, 1, 7,
    [Alergy.WHEAT, Alergy.GLUTEN])),

new Ingredient(
  'Eggs', 6, 'oz',IngredientCategory.FILLING,
    new NutritionalFacts(170, 230, 140, 16, 5, 0, 600, 440, 180, 2, 0, 0, 19,
    [Alergy.MILK, Alergy.EGG])),

new Ingredient(
  'Fajita Vegetables', 2, 'oz', IngredientCategory.FILLING,
    new NutritionalFacts(57, 35, 15, 2, 0, 0, 0, 180, 120, 4, 1, 2, 1,
    [])),

new Ingredient(
  'Fiery Habanero', 2, 'oz', IngredientCategory.SALSA,
    new NutritionalFacts(57, 20, 5, 0, 0, 0, 0, 260, 0, 3, 1, 2, 1,
    [])),

new Ingredient(
  'Flour Tortilla', 5.5, 'in', IngredientCategory.TORTILLA,
    new NutritionalFacts(24, 70, 15, 2, 1, 0, 0, 170, 25, 12, 1, 0, 2,
    [Alergy.WHEAT, Alergy.GLUTEN])),

new Ingredient(
  'Flour Tortilla', 10, 'in', IngredientCategory.TORTILLA,
    new NutritionalFacts(71, 210, 45, 5, 2, 0, 0, 490, 70, 36, 2, 1, 6,
    [Alergy.WHEAT, Alergy.GLUTEN])),

new Ingredient(
  'Flour Tortilla', 12.5, 'in', IngredientCategory.TORTILLA,
    new NutritionalFacts(102, 300, 60, 7, 3, 0, 0, 760, 50, 52, 3, 2, 8,
    [Alergy.WHEAT, Alergy.GLUTEN])),

new Ingredient(
  'Guacamole', 3, 'oz', IngredientCategory.TOPPING,
    new NutritionalFacts(85, 130, 90, 10, 2, 0, 0, 300, 370, 7, 3, 0, 1,
    [])),

new Ingredient(
  'Lettuce, Shredded', 0.3, 'oz', IngredientCategory.TOPPING,
    new NutritionalFacts(9, 0, 0, 0, 0, 0, 0, 0, 20, 0, 0, 0, 0,
    [])),

new Ingredient(
  'Mango Salsa', 4, 'oz', IngredientCategory.SALSA,
    new NutritionalFacts(113, 60, 0, 0, 0, 0, 0, 180, 0, 14, 2, 9, 1,
    [])),

new Ingredient(
  'Mexican Caesar Dressing', 0.5, 'oz', IngredientCategory.SAUCE,
    new NutritionalFacts(14, 90, 80, 9, 2, 0, 5, 160, 5, 1, 0, 0, 1,
    [Alergy.EGG, Alergy.FISH, Alergy.MILK])),

new Ingredient(
  'Minced Onions', 0.3, 'oz', IngredientCategory.TOPPING,
    new NutritionalFacts(9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    [])),

new Ingredient(
  'Picante Ranch', 1.5, 'oz', IngredientCategory.SAUCE,
    new NutritionalFacts(43, 40, 0, 0, 0, 0, 0, 500, 50, 10, 1, 3, 0,
    [Alergy.MILK])),

new Ingredient(
  'Pickled Jalapenos', 1, 'oz', IngredientCategory.TOPPING,
    new NutritionalFacts(28, 15, 0, 0, 0, 0, 0, 90, 30, 3, 0, 2, 0,
    [])),

new Ingredient(
  'Pico de Gallo', 2, 'oz', IngredientCategory.SALSA,
    new NutritionalFacts(57, 10, 0, 0, 0, 0, 0, 70, 95, 3, 1, 2, 0,
    [])),

new Ingredient(
  'Pinto Beans', 4, 'oz', IngredientCategory.FILLING,
    new NutritionalFacts(113, 130, 5, 1, 0, 0, 0, 350, 440, 23, 14, 1, 8,
    [])),

new Ingredient(
  'Pork, Pulled', 3.5, 'oz', IngredientCategory.MEAT,
    new NutritionalFacts(99, 140, 35, 4, 2, 0, 70, 340, 370, 9, 0, 1, 17,
    [])),

new Ingredient(
  'Potatoes, Seasoned', 2, 'oz', IngredientCategory.FILLING,
    new NutritionalFacts(57, 130, 50, 6, 1, 0, 0, 260, 230, 17, 2, 0, 2,
    [Alergy.WHEAT, Alergy.GLUTEN])),

new Ingredient(
  'Queso Diablo', 4, 'oz', IngredientCategory.SAUCE,
    new NutritionalFacts(113, 160, 110, 13, 8, 0, 40, 700, 130, 7, 2, 2, 5,
    [Alergy.MILK])),

new Ingredient(
  'Roasted Chile Corn Salsa', 2, 'oz', IngredientCategory.SALSA,
    new NutritionalFacts(57, 50, 5, 1, 0, 0, 0, 105, 125, 10, 2, 1, 2,
    [])),

new Ingredient(
  'Salsa Roja', 2, 'oz', IngredientCategory.SALSA,
    new NutritionalFacts(57, 20, 0, 0, 0, 0, 0, 460, 0, 4, 1, 2, 1,
    [])),

new Ingredient(
  'Salsa Verde', 2, 'oz', IngredientCategory.SALSA,
    new NutritionalFacts(57, 15, 0, 0, 0, 0, 0, 280, 90, 3, 1, 1, 0,
    [])),

new Ingredient(
  'Sour Cream, Lite', 2, 'oz', IngredientCategory.TOPPING,
    new NutritionalFacts(57, 50, 40, 5, 3, 0, 15, 40, 100, 2, 0, 2, 3,
    [Alergy.MILK])),

new Ingredient(
  'Shrimp Fire Roasted, Glazed', 4, 'piece', IngredientCategory.MEAT,
    new NutritionalFacts(39, 35, 0, 0, 0, 0, 10, 310, 65, 2, 0, 1, 7,
    [Alergy.FISH, Alergy.CRUSTACEAN_SHELLFISH])),

new Ingredient(
  'Shrimp Fire Roasted, Glazed', 10, 'piece', IngredientCategory.MEAT,
    new NutritionalFacts(99, 90, 5, 0.5, 0, 0, 25, 790, 160, 6, 1, 2, 16,
    [Alergy.FISH, Alergy.CRUSTACEAN_SHELLFISH])),

new Ingredient(
  'Steak, Grilled Marinated', 3.5, 'oz', IngredientCategory.MEAT,
    new NutritionalFacts(99, 180, 70, 8, 3, 0, 65, 460, 490, 2, 0, 0, 26,
    [Alergy.MILK])),

new Ingredient(
  'Three Cheese Queso', 4, 'oz', IngredientCategory.SAUCE,
    new NutritionalFacts(113, 190, 140, 15, 10, 0, 50, 710, 90, 6, 2, 1, 6,
    [Alergy.MILK])),

new Ingredient(
  'Tortilla Soup', 8, 'oz', IngredientCategory.FILLING,
    new NutritionalFacts(227, 100, 40, 5, 1, 0, 0, 1390, 220, 11, 4, 2, 3,
    [Alergy.SOY])),

new Ingredient(
  'Whole Wheat Flour Tortilla', 12.5, 'in', IngredientCategory.TORTILLA,
    new NutritionalFacts(96, 270, 40, 5, 1, 0, 0, 590, 220, 47, 5, 3, 11,
    [Alergy.WHEAT, Alergy.GLUTEN]))

];
