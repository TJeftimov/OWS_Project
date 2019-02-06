import { Component, OnInit } from '@angular/core';
import notify from 'devextreme/ui/notify';

export class Team {
  player1: string;
  player2: string;
  teamName: string;
}

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

  constructor() { }

  ngOnInit() {
  }

  onFormSubmit(e) {
    notify(
      { message: 'You have successfully registered your team, ' + this.team.teamName,
      position: {
        my: 'right',
        at: 'right',
        offset: '-150 200'
      } },
      'success',
      3000
    );

    e.preventDefault();
  }

}
