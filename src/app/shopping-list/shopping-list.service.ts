import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
export class ShoppingListService {
    ingredientsChange = new EventEmitter<Ingredient[]>();
    private ingredients : Ingredient[] =[ new Ingredient('Apple', 5),
                                new Ingredient('Tomato', 10)        
                              ];
    addIngredient(ingredient : Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChange.emit(this.ingredients.slice());
    }
    getIngredient() {
        return this.ingredients.slice();
    }

    addIngredients(ingredient: Ingredient[]) {
        this.ingredients.push(...ingredient);
        this.ingredientsChange.emit(this.ingredients.slice());

    }

}