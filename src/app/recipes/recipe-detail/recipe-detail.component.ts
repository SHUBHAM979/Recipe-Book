import { Component, OnInit , Input} from '@angular/core';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipes.services';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipeChoose: Recipe;
  constructor(private slList: ShoppingListService) { }

  ngOnInit(): void {
  }

  toShoppingList() {
    
    this.slList.addIngredients(this.recipeChoose.ingredients);


  }
}
