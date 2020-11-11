import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe(
      'Schnitzel',
      'A Super Tasty Schnitzel',
      'https://cdn.kisikates.com.tr/image-cache/cache/recipe_main_image_large/https---cdn.kisikates.com.tr/recipe-media/bc60bbfaac11844f37a8cf56aebe04b2e66463ae.jpeg',
      [new Ingredient('Meat', 1), new Ingredient('French Fries', 20)]
    ),
    new Recipe(
      'Shake Shack Hamburger',
      'Tasty Hamburger ',
      'https://miro.medium.com/max/400/1*iMw5srMm3eO7QpeLvMMgQw.jpeg',
      [new Ingredient('Buns', 2), new Ingredient('meat', 1)]
    ),
  ];
  constructor(private slService: ShoppingListService) {}

  getRecipes(){
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
