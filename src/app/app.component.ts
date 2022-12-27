import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Recipe-App';
  showButton:number = 1;
  onButtonCLicked(clicked : number) {
    this.showButton = clicked;
  }
}
