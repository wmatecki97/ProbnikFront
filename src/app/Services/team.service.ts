import { DataTransferService } from './data-transfer.service';
import { Http } from '@angular/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeamService implements OnInit{

  constructor(private http: Http, private data: DataTransferService) { }

  private user;
  private person;

  ngOnInit(){
    this.getPerson();
    this.getUser();
  }

  getPerson(){
    this.data.person.subscribe(p => {
      this.person = p;
    });
  }
  
  getUser(){
    this.data.user.subscribe(u => {
      this.user = u;
      // console.log(this.user);
    });
  }

  getAllTeams(): Observable<Response>
  {
    this.getUser();
    return undefined;
  }

  getAllMethodologies(): Observable<Response>
  {
    this.getUser();
    return undefined;
  }

  getTeamsForMethodology(methodologyId: number): Observable<Response>
  {
    this.getUser();
    return undefined;
  }

  joinTeam(teamId: number): Observable<Response>
  {
    this.getPerson();
    return undefined;
  }


}
