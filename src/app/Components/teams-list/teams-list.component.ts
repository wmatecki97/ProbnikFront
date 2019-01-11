
import { Methodology } from './../../Models/Methodology';
import { DataTransferService } from './../../Services/data-transfer.service';
import { Component, OnInit } from '@angular/core';
import { TeamService } from 'src/app/Services/team.service';
import { Team } from 'src/app/Models/Team';


@Component({
  selector: 'TeamsS',
  templateUrl: './teams-list.component.html',
  styleUrls: ['./teams-list.component.css']
})
export class TeamsListComponent implements OnInit {

  constructor(private service: TeamService, private data: DataTransferService) { }

  teams: Team[];
  methodologies: Methodology[];

  currentMethodology: Methodology;

  ngOnInit() {
    this.service.getAllMethodologies().subscribe(res => {
      this.methodologies = res.json();
    });
  }

  selectMethodology(id)
  {
    this.methodologies.forEach(element => {
      if(element.Id == id)
        this.currentMethodology = element;
    });
    this.service.getTeamsByMethodology(this.currentMethodology.Id).subscribe(res => {
      this.teams = res.json();
      console.log(this.teams);
    })
  }
}
