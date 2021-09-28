import { TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentComponent } from './contents/content/content.component';
import { Content2Component } from './contents/content2/content2.component';
import { Content3Component } from './contents/content3/content3.component';
import { Content4Component } from './contents/content4/content4.component';
import { Content5Component } from './contents/content5/content5.component';
import { PageNotFoundComponent } from './contents/page-not-found/page-not-found.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MaterialModule } from './material/material.module';
import { SideNavComponent } from './side-nav/side-nav.component';
import { SecondarySidebarLargeComponent } from './sidebar/secondary-sidebar-large/secondary-sidebar-large.component';
import { SecondarySidebarComponent } from './sidebar/secondary-sidebar/secondary-sidebar.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        AppRoutingModule,
        MaterialModule
      ],
      declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        ContentComponent,
        Content2Component,
        Content3Component,
        SideNavComponent,
        Content4Component,
        SecondarySidebarComponent,
        SecondarySidebarLargeComponent,
        Content5Component,
        PageNotFoundComponent,
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'my-website-templates'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('my-website-templates');
  });
});
