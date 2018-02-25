import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'India shopping Mart';
  menus: Array<string> = ['Home', 'Garments', 'Woman Dress Materials',
   'Men Dress Materials', 'Kids Dress Materials',
   'Kitchen Items', 'Sports Items'];
}
