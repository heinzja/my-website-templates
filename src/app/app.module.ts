import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MaterialModule } from './material/material.module';
import { ContentComponent } from './contents/content/content.component';
import { Content2Component } from './contents/content2/content2.component';
import { Content3Component } from './contents/content3/content3.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { Content4Component } from './contents/content4/content4.component';
import { SecondarySidebarComponent } from './sidebar/secondary-sidebar/secondary-sidebar.component';
import { SecondarySidebarLargeComponent } from './sidebar/secondary-sidebar-large/secondary-sidebar-large.component';
import { Content5Component } from './contents/content5/content5.component';

@NgModule({
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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
