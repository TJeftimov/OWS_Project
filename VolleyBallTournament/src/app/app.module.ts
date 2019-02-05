import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TeamRegisterComponent } from './team-register/team-register.component';
import { TicketBuyingComponent } from './ticket-buying/ticket-buying.component';
import { StandingsComponent } from './standings/standings.component';
import { AboutComponent } from './about/about.component';
import { MediaComponent } from './media/media.component';
import { MatchesComponent } from './matches/matches.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TeamRegisterComponent,
    TicketBuyingComponent,
    StandingsComponent,
    AboutComponent,
    MediaComponent,
    MatchesComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
