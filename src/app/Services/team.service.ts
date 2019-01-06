import { User } from './../Models/User';
import { ServiceConfiguration } from './ServiceConfiguration';
import { Person } from './../Models/Person';
import { DataTransferService } from './data-transfer.service';
import { Http } from '@angular/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeamService implements OnInit {

  constructor(private http: Http, private data: DataTransferService) { }

  user: User;

  ngOnInit(){
   
  }

  getUser(){
    this.data.user.subscribe(u => {
      this.user = u;
      // console.log(this.user);
    });
  }

  getAllMethodologies(){
    this.getUser();
    return this.http.get(ServiceConfiguration.address + 'Get/Methodologies/' + this.user.Token);
  }

  getTeamsByMethodology(methodologyId: number){
    this.getUser();
    return this.http.get(ServiceConfiguration.address + 'Get/Teams/' + this.user.Token + '/' + methodologyId);
  }
}
