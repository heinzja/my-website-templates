import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content2',
  templateUrl: './content2.component.html',
  styleUrls: ['./content2.component.scss']
})
export class Content2Component implements OnInit {
  panelOpenState = false;
  constructor() { }

  ngOnInit(): void {
  }

}
