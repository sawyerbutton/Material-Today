import { Component } from '@angular/core';

// Decorator
// ^ in package.json is automatically update package json
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sawyer Button\'s Damo demo';
}
