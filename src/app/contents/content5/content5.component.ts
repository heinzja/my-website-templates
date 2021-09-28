import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  templateUrl: './content5.component.html',
  styleUrls: ['./content5.component.scss']
})
export class Content5Component implements OnInit {

  current_date: Date = new Date();

  screenWidth: number = 0;
  screenHeight: number = 0;

  cardCssStyles = "card-md";

  constructor() {
    this.setScreenHeightWidthValues();
   }

  ngOnInit(): void {
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.setScreenHeightWidthValues();
  }

  getRandomViewCount(): number {
    var val: number = 0;
    val = Math.floor(Math.random() * 1000000)
    return val;
  }

  setScreenHeightWidthValues() {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
    if(this.screenWidth <= 500){
      this.cardCssStyles = "card-xs";
    }
    else if(this.screenWidth <= 760){
      this.cardCssStyles = "card-sm";
    }
    else if (this.screenWidth <= 960) {
      this.cardCssStyles = "card-md";
    } else {
      this.cardCssStyles = "card-lg";
    }
  }

}
