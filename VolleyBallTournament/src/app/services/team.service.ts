import { Injectable } from '@angular/core';

export class Team {
  player1: string;
  player2: string;
  teamName: string;
  won = 0;
  lost = 0;

  constructor(player1?, player2?, teamName?) {
    this.player1 = player1;
    this.player2 = player2;
    this.teamName = teamName;
  }
}

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  private _groupATeams = [
    new Team('Zvonko', 'Zdravko', 'Team Z'),
    new Team('Pero', 'Đuro', 'Team PĐ')
  ];
  private _groupBTeams = [
    new Team('Mato', 'Teo', 'Zgubidani'),
    new Team('Mijo', 'Riki', 'Krutina')
  ];
  private _groupCTeams = [
    new Team('Ivan', 'Ivan', 'Ivani'),
    new Team('Branimir', 'Trpimir', 'Knezevi')
  ];
  private _groupDTeams = [
    new Team('Jadranko', 'Miljenko', 'Cudaci'),
    new Team('Bosiljko', 'Maksimilijan', 'Marxovci')
  ];

  private lastGroup = 'D';

  constructor() { }

  get groupA() {
    return this._groupATeams;
  }

  get groupB() {
    return this._groupBTeams;
  }

  get groupC() {
    return this._groupCTeams;
  }

  get groupD() {
    return this._groupDTeams;
  }

  addTeam(team: Team) {
    if (this._groupDTeams.length === 4) {
      return 'Unfortunately the tournament is filled up. Check back another time to see if some other team dropped out';
    } else {
      if (this.lastGroup === 'D') {
        this._groupATeams.push(team);
        this.lastGroup = 'A';
      } else if (this.lastGroup === 'A') {
        this._groupBTeams.push(team);
        this.lastGroup = 'B';
      } else if (this.lastGroup === 'B') {
        this._groupCTeams.push(team);
        this.lastGroup = 'C';
      } else {
        this._groupDTeams.push(team);
        this.lastGroup = 'D';
      }

      return 'You have successfully registered your team, ' + team.teamName;
    }
  }
}
