import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipes.services';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers:[RecipeService]
})
export class RecipesComponent implements OnInit {
  constructor(private recipeService : RecipeService) { }
  recipe:Recipe;
  ngOnInit(): void {
    this.recipeService.recipeSelected.subscribe(
      (recipe :Recipe) => {
        this.recipe = recipe;
      }
    );
  }

}
