import { Component, OnInit } from '@angular/core';
import notify from 'devextreme/ui/notify';
import { TeamService, Team } from '../services/team.service';

@Component({
  selector: 'app-team-register',
  templateUrl: './team-register.component.html',
  styleUrls: ['./team-register.component.css']
})
export class TeamRegisterComponent implements OnInit {

  team: Team = new Team();

  buttonOptions = {
    text: 'Register',
    type: 'default',
    useSubmitBehavior: true
  };

  constructor(
    private teamService: TeamService
  ) { }

  ngOnInit() {
  }

  onFormSubmit(e) {
    const message = this.teamService.addTeam(this.team);
    notify(
      { message: message},
      'success',
      3000
    );

    e.preventDefault();

    this.team = new Team();
  }

}
