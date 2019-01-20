import { Challange } from 'src/app/Models/Challenge';
import { Person } from './../Models/Person';
import { ChallangeType } from './../Models/ChallengeType';
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
  private person: Person;

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

  getPerson(){
    this.data.person.subscribe(p => {
      this.person = p;
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

  GetChallengeForPerson(challenge: ChallangeType){
    this.getUser();
    this.getPerson();
    return this.http.get(ServiceConfiguration.address + 'Get/ChallengeFor/' + challenge.Id + '/' + this.person.Id + '/' + this.user.Token);
  }

  getTasksStates(){
    this.getUser();
    return this.http.get(ServiceConfiguration.address + 'Get/TasksStates/' + this.user.Token);
  }

  saveChallenge(challenge: Challange[]){
    this.getUser();
    return this.http.post(ServiceConfiguration.address + 'Save/Challenge/' + this.user.Token, challenge);
  }
}
