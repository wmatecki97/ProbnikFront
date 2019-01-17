import { User } from './../Models/User';
import { DataTransferService } from './data-transfer.service';
import { Http } from '@angular/http';
import { ServiceConfiguration } from './ServiceConfiguration';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Team } from '../Models/Team';

@Injectable({
  providedIn: 'root'
})
export class ChallengeService {

  constructor(private http: Http, private data: DataTransferService) { }

  private team: Team;
  private user: User;

  getTeam(){
    this.data.team.subscribe(t => {
      this.team = t;
    });
  }

  getUser(){
    this.data.user.subscribe(u => {
      this.user = u;
    });
  }

  getChallangesForPerson(){
    return  this.http.get(ServiceConfiguration.address + 'Get/Challenges/');
  }

  getChallengeForTeam(){
    this.getUser();
    this.getTeam();
    return this.http.get(ServiceConfiguration.address + 'Get/Challenges/' + this.team.Id + "/" + this.user.Token);
  }

}
