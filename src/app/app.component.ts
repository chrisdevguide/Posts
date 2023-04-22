import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  rate(rating: number) {
    console.log(`Your rating is: ${rating}`);
  }
}
