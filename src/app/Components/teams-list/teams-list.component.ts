import { DataTransferService } from './../../Services/data-transfer.service';
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

  constructor(private service: TeamService, private data: DataTransferService) { }

  teams: Team[];
  methodologies: Methodology[];
  showAllTeams: boolean;
  methodology: Methodology;
  team: Team;

  ngOnInit() {
    this.showAllTeams = false;
  }

  getAllMethodologies(){
    this.service.getAllMethodologies().subscribe(res =>{
      this.methodologies = res.json();
    })
  }

  selectMethodology(id: number){
    for (let m of this.methodologies)    {
      if(m.Id == id)
      {
        this.methodology = m;
      }
    }
    this.service.assignMethodology();
  }

  getTeams() {
    if (this.showAllTeams) {
      this.service.getAllTeams().subscribe(res => {
        this.teams = res.json();
      });
    }
    else {
      this.service.getTeamsForMethodology(this.methodology.Id).subscribe(res => {
        this.teams = res.json();
      });
    }
  }
}
