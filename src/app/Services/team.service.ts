import { Injectable, OnInit } from '@angular/core';
import { DataTransferService } from './data-transfer.service';
import { Http, Response } from '@angular/http';
import { User } from '../Models/User';
import { Person } from '../Models/Person';
import { ServiceConfiguration } from './ServiceConfiguration';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})

export class TeamService implements OnInit {

  constructor(private http: Http, private data: DataTransferService) { }

  user: User;
  person: Person;
  
  ngOnInit(){
   
  }

  getUser(){
    this.data.user.subscribe(u => {
      this.user = u;
      // console.log(this.user);
    });
  }

  getPerson(){
    this.data.person.subscribe(p => {
      this.person = p;
      // console.log(this.user);
    });
  }

  assignMethodology(id:number){
    this.getPerson();
    this.http.post(ServiceConfiguration.address + 'Add/Methodoloogy/' + id, this.user);
  }

  getAllTeams(): Observable<Response>
  {
    this.getUser();
    return this.http.get(ServiceConfiguration.address + 'Get/Teams/' + this.user.Token);
  }

  getAllMethodologies(): Observable<Response>
  {
    this.getUser();
    return this.http.get(ServiceConfiguration.address + 'Get/Methodologies/' + this.user.Token);
  }

  getTeamsByMethodology(methodologyId: number): Observable<Response>
  {
    this.getUser();
    return this.http.get(ServiceConfiguration.address + 'Get/Teams/' + this.user.Token + '/' + methodologyId);
  }

  joinTeam(teamId: number): Observable<Response>
  {
    this.getPerson();
    return undefined;
  }


}
