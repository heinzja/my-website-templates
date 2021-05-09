import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() title: string = "APP_TITLE";
  @Output() onMenu_EE: EventEmitter<boolean> = new EventEmitter();

  isMenuOpen: boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }

  onMenu(event: any):void {
    this.isMenuOpen = !this.isMenuOpen;
    this.onMenu_EE.emit(this.isMenuOpen);
  }

}
