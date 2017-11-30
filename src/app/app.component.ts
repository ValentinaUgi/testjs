import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Cat';

  changeTitle(): void {
    this.title = 'Bublic';
    console.log(this.title);
  }
}
