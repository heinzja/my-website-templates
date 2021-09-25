import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-secondary-sidebar',
  templateUrl: './secondary-sidebar.component.html',
  styleUrls: ['./secondary-sidebar.component.scss']
})
export class SecondarySidebarComponent implements OnInit {

  sidebarData: SecondarySidebarItemI[] = [
  {
    icon: "store",
    title: "Content 1",
    link: "/content"
  },
  {
    icon: "explore",
    title: "Content 2",
    link: "/content2"
  },
  {
    icon: "favorite",
    title: "Content 3",
    link: "/content3"
  },
  {
    icon: "article",
    title: "Content 4",
    link: "/content4"
  }
]

  constructor() { }

  ngOnInit(): void {
  }

}

// icon = material icon font https://fonts.google.com/icons?selected=Material+Icons
interface SecondarySidebarItemI {
  icon: string;
  title: string;
  link?: string;
}
