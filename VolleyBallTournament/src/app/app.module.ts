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
import { GalleryModule } from '@ngx-gallery/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';
import { DxDataGridModule, DxFormModule } from 'devextreme-angular';

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
    AppRoutingModule,
    GalleryModule,
    BrowserAnimationsModule,
    DxDataGridModule,
    DxFormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
