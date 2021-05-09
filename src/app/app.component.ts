import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-website-templates';
  isMenuOpen: boolean = false;

  onMenu(event:boolean):void {
    this.isMenuOpen = event;
  }
}
