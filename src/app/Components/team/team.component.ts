import { Observable } from 'rxjs/internal/Observable';
import { Team } from './../../Models/Team';
import { DataTransferService } from './../../Services/data-transfer.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  constructor(private data: DataTransferService) { }

  team$: Observable<Team>;

  ngOnInit() {
    this.team$ = this.data.team;
  }
}
