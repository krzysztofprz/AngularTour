import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { HeroesComponent } from "./heroes/heroes.component";
import { HeroDetailComponent } from "./hero-detail/hero-detail.component";
import { HeroService } from "./hero.service";
import { MessagesComponent } from "./messages/messages.component";
import { MessageService } from "./message.service";
import { AppRoutingModule } from "./app-routing.module";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { HttpClientModule } from "@angular/common/http";
//to be created
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { InMemoryDataService } from "./in-memory-data.service";
import { HeroSearchComponent } from './hero-search/hero-search.component';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule, HttpClientModule],
  declarations: [
    AppComponent,
    HelloComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    HeroSearchComponent,
    // HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
    //   dataEncapsulation: false
    // })
  ],
  bootstrap: [AppComponent],
  providers: [HeroService, MessageService, InMemoryDataService]
})
export class AppModule {}
