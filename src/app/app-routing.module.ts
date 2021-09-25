import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './contents/content/content.component';
import { Content2Component } from './contents/content2/content2.component';
import { Content3Component } from './contents/content3/content3.component';
import { Content4Component } from './contents/content4/content4.component';
import { Content5Component } from './contents/content5/content5.component';

const routes: Routes = [
  { path: 'content', component: ContentComponent },
  { path: 'content2', component: Content2Component },
  { path: 'content3', component: Content3Component },
  { path: 'content4', component: Content4Component },
  { path: 'content5', component: Content5Component },
  { path: '', redirectTo: 'content', pathMatch: 'full' },
  { path: '**', component: ContentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
