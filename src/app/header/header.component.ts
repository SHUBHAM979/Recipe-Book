import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector:'app-header',
    templateUrl:'./header.component.html',
    styleUrls:['./header.component.css']
})
export class headerComponent {
    @Output() buttonClicked = new EventEmitter<number>();

    onRecipesClicked() {
        this.buttonClicked.emit(1);
    }

    onShopingClicked() {
        this.buttonClicked.emit(2);
    }

}