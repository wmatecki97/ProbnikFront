import { ServiceConfiguration } from './ServiceConfiguration';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChallengeService {

  constructor(private http) { }

  getChallangesForPerson(){
    return  this.http.get(ServiceConfiguration.address + 'Get/Challenges/');
  }

  getChallengeTaskContent(){
    return this.http.get(ServiceConfiguration.address + 'Get/TaskContentForChallenge')
  }
}
