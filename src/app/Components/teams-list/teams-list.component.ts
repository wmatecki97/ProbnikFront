import { Team } from 'src/app/Models/Team';
import { Methodology } from './../../Models/Methodology';
import { DataTransferService } from './../../Services/data-transfer.service';
import { Component, OnInit } from '@angular/core';
import { TeamService } from 'src/app/Services/team.service';
import { getTemplateContent } from '@angular/core/src/sanitization/html_sanitizer';
import { TeamComponent } from '../team/team.component';


@Component({
  selector: 'Teams',
  templateUrl: './teams-list.component.html',
  styleUrls: ['./teams-list.component.css']
})
export class TeamsListComponent implements OnInit {

  constructor(private service: TeamService, private data: DataTransferService) { }

  private person;

  teams: Team[];
  methodologies: Methodology[];

  currentTeam: Team;
  currentMethodology: Methodology;

  ngOnInit() {
    this.service.getAllMethodologies().subscribe(res => {
      this.methodologies = res.json();
      console.log(res);
    });
  }

  getTeam(){
      this.data.team.subscribe(t => {
        this.currentTeam = t;
      })
  }
  getPerson(){
    this.data.person.subscribe(p =>{
      this.person = p;
    });
  }

  selectMethodology(id)
  {
    console.log('selecting methodology' + id);
    this.methodologies.forEach(element => {
      if(element.Id == id)
        this.currentMethodology = element;
    });
    this.service.getTeamsByMethodology(this.currentMethodology.Id).subscribe(res => {
      this.teams = res.json();
      console.log(this.teams);
    })
  }

  isMember(teamId: number): boolean{

    this.getPerson();
    for(let team of this.teams){
        if(team.Id == teamId)
        {
          for(let m of team.Members)
          {
            if(m.Id == this.person.Id)
            {
              return true;
            }
          }
        }
    }
    return false;
  }

  joinTeam(teamId: number){
    this.service.joinTeam(teamId).subscribe(res =>{
      this.data.setTeam(res.json());
      this.getTeam();
    });
  }

  
}
