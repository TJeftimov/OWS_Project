import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { TeamRegisterComponent } from './team-register/team-register.component';
import { TicketBuyingComponent } from './ticket-buying/ticket-buying.component';
import { StandingsComponent } from './standings/standings.component';
import { MediaComponent } from './media/media.component';
import { MatchesComponent } from './matches/matches.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'team-register', component: TeamRegisterComponent },
  { path: 'tickets', component: TicketBuyingComponent },
  { path: 'standings', component: StandingsComponent },
  { path: 'media', component: MediaComponent },
  { path: 'matches', component: MatchesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
