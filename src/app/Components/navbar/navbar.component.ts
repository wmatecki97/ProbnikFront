import { Observable } from 'rxjs/internal/Observable';
import { DataTransferService } from './../../Services/data-transfer.service';
import { Team } from './../../Models/Team';
import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/Models/Person';
import { Patron } from 'src/app/Models/Patron';
import { User } from 'src/app/Models/User';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private data: DataTransferService) { }

  team$: Observable<Team>
  person$: Observable<Person>;
  patron$: Observable<Patron>;
  user$: Observable<User>;

  ngOnInit() {
    this.team$ = this.data.team;
    this.person$ = this.data.person;
    this.patron$ = this.data.patron;
    this.user$ = this.data.user;
  }

  getTeam(){
  }
}
