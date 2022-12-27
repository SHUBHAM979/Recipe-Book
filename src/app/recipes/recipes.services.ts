import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes :Recipe[] =[
        new Recipe('A test Recipe','this is simply a tes recipe',
        'https://c.ndtvimg.com/2022-03/j5jbs6g_khichdi_625x300_25_March_22.jpg?im=FeatureCrop,algorithm=dnn,width=620,height=350'
     ,[new Ingredient('Meat', 20),
      new Ingredient('French', 90)
    ] )];

      getRecipes() {
        return this.recipes.slice();
      }

}