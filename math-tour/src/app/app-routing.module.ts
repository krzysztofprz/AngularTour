import { DateFactsComponent } from './../content/date-facts/date-facts.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/DateFact', pathMatch: 'full' },
  { path: 'DateFact', component: DateFactsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
