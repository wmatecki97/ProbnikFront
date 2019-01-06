import { Methodology } from './../../Models/Methodology';
import { Team } from './../../Models/Team';
import { TeamService } from './../../Services/team.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teams-list',
  templateUrl: './teams-list.component.html',
  styleUrls: ['./teams-list.component.css']
})
export class TeamsListComponent implements OnInit {

  constructor(private service: TeamService) { }

  teams: Team[];
  showAllTeams: boolean;
  methodology: Methodology;

  ngOnInit() {

  }

  getTeams() {
    if (this.showAllTeams) {
      this.service.getAllTeams().subscribe(res => {
        this.teams = res.json() as Team[];
      });
    }
    else {
      this.service.getTeamsForMethodology().subscribe(res => {
        this.teams = res.json();
      });
    }
  }
}
