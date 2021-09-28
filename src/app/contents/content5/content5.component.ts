import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  templateUrl: './content5.component.html',
  styleUrls: ['./content5.component.scss'],
})
export class Content5Component implements OnInit {
  current_date: Date = new Date();

  screenWidth: number = 0;
  screenHeight: number = 0;

  cardCssStyles = 'card-md';
  fakeData: FakeDataI[] = [
    {
      title: 'title1',
      channel_title: 'channel-title',
      views: this.getRandomViewCount(),
      upload_date: this.getRandomUploadDate(),
    },
    {
      title: 'title2',
      channel_title: 'channel-title',
      views: this.getRandomViewCount(),
      upload_date: this.getRandomUploadDate(),
    },
    {
      title: 'title3',
      channel_title: 'channel-title',
      views: this.getRandomViewCount(),
      upload_date: this.getRandomUploadDate(),
    },
    {
      title: 'title4',
      channel_title: 'channel-title',
      views: this.getRandomViewCount(),
      upload_date: this.getRandomUploadDate(),
    },
    {
      title: 'title5',
      channel_title: 'channel-title',
      views: this.getRandomViewCount(),
      upload_date: this.getRandomUploadDate(),
    },
    {
      title: 'title6',
      channel_title: 'channel-title',
      views: this.getRandomViewCount(),
      upload_date: this.getRandomUploadDate(),
    },
    {
      title: 'title7',
      channel_title: 'channel-title',
      views: this.getRandomViewCount(),
      upload_date: this.getRandomUploadDate(),
    },
    {
      title: 'title8',
      channel_title: 'channel-title',
      views: this.getRandomViewCount(),
      upload_date: this.getRandomUploadDate(),
    },
    {
      title: 'title9',
      channel_title: 'channel-title',
      views: this.getRandomViewCount(),
      upload_date: this.getRandomUploadDate(),
    },
  ];

  constructor() {
    this.setScreenHeightWidthValues();
  }

  ngOnInit(): void {}

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.setScreenHeightWidthValues();
  }

  getRandomViewCount(): number {
    var val: number = 0;
    val = Math.floor(Math.random() * 1000000);
    return val;
  }

  getRandomUploadDate(): Date {
    var date: Date = new Date();
    var tmpTime = Math.floor(Math.random() * date.getTime());
    date.setTime(tmpTime);
    return date;
  }

  setScreenHeightWidthValues() {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
    if (this.screenWidth <= 500) {
      this.cardCssStyles = 'card-xs';
    } else if (this.screenWidth <= 760) {
      this.cardCssStyles = 'card-sm';
    } else if (this.screenWidth <= 978) {
      this.cardCssStyles = 'card-md';
    } else {
      this.cardCssStyles = 'card-lg';
    }
  }
}

interface FakeDataI {
  title: string;
  channel_title: string;
  views: number;
  upload_date: Date;
}
