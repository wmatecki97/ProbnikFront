import { DataTransferService } from './data-transfer.service';
import { User } from './../Models/User';
import { ServiceConfiguration } from './ServiceConfiguration';
import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TeamService {

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

  assignMethodology(id:number){
    this.getPerson();
    this.http.post(ServiceConfiguration.address + 'Add/Methodoloogy/' + id, this.person);
  }

  getAllTeams(): Observable<Response>
  {
    this.getUser();
    return this.http.get(ServiceConfiguration.address + 'Get/Teams');
    // return this.http.get("asdasd");
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
