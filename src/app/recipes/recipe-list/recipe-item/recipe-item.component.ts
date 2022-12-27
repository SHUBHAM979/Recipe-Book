import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipes.services';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input("recipe") recipe : Recipe;
 
  constructor(private recipeService : RecipeService) { }

  ngOnInit(): void {
  }

  onItemClicked() {
    this.recipeService.recipeSelected.emit(this.recipe);
  }

}
