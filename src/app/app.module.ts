import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MaterialModule } from './material/material.module';
import { ContentComponent } from './content/content.component';
import { Content2Component } from './content2/content2.component';
import { Content3Component } from './content3/content3.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { Content4Component } from './content4/content4.component';
import { SecondarySidebarComponent } from './secondary-sidebar/secondary-sidebar.component';

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
    SecondarySidebarComponent
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
