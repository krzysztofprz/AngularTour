import { MathFactsComponent } from './../content/math-facts/math-facts.component';
import { DateFactsComponent } from './../content/date-facts/date-facts.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/DateFact', pathMatch: 'full' },
  { path: 'DateFact', component: DateFactsComponent },
  { path: 'MathFact', component: MathFactsComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: [
  ]
})
export class AppRoutingModule { }
