import { Component, OnInit } from '@angular/core';
import { TeamService, Team } from '../services/team.service';

@Component({
  selector: 'app-standings',
  templateUrl: './standings.component.html',
  styleUrls: ['./standings.component.css']
})
export class StandingsComponent implements OnInit {

  public groupATeams: Team[];
  public groupBTeams: Team[];
  public groupCTeams: Team[];
  public groupDTeams: Team[];

  constructor(
    private teamService: TeamService
  ) { }

  ngOnInit() {
    this.groupATeams = this.teamService.groupA;
    this.groupBTeams = this.teamService.groupB;
    this.groupCTeams = this.teamService.groupC;
    this.groupDTeams = this.teamService.groupD;
  }

}
