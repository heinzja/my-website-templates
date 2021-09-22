import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  @Input() title: string = "DEFAULT_TITLE";
  current_date_year =  new Date().getFullYear();

  constructor() { }

  ngOnInit(): void {
  }

}
