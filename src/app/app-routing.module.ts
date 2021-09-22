import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { Content2Component } from './content2/content2.component';
import { Content3Component } from './content3/content3.component';
import { Content4Component } from './content4/content4.component';

const routes: Routes = [
  { path: 'content', component: ContentComponent },
  { path: 'content2', component: Content2Component },
  { path: 'content3', component: Content3Component },
  { path: 'content4', component: Content4Component },
  { path: '', redirectTo: 'content', pathMatch: 'full' },
  { path: '**', component: ContentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
