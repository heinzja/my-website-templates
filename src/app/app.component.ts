import { BreakpointObserver } from '@angular/cdk/layout';
import { AfterViewInit, Component, HostListener } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  title = 'my-website-templates';
  isMenuOpen: boolean = false;

  screenWidth: number = 0;
  screenHeight: number = 0;
  showSmallScreenAssets = false;
  showLargeScreenAssets = false;

  constructor() {}

  ngAfterViewInit() {
    this.setScreenHeightWidthValues();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.setScreenHeightWidthValues();
  }

  onMenu(event: boolean): void {
    this.isMenuOpen = event;
  }

  setScreenHeightWidthValues() {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
    if (this.screenWidth <= 960) {
      this.showSmallScreenAssets = true;
      this.showLargeScreenAssets = false;
    } else {
      this.showSmallScreenAssets = false;
      this.showLargeScreenAssets = true;
    }
  }
}
