import { DataTransferService } from './../../Services/data-transfer.service';
import { Team } from './../../Models/Team';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private data: DataTransferService) { }

  team$: Observable<Team>
  
  ngOnInit() {
    this.team$ = this.data.team;
  }

  getTeam(){
  }
}
