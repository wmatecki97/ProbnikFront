import { User } from './../Models/User';
import { ServiceConfiguration } from './ServiceConfiguration';
import { Person } from './../Models/Person';
import { DataTransferService } from './data-transfer.service';
import { Http } from '@angular/http';
import { Injectable, OnInit } from '@angular/core';
>>>>>>> 9042db458430c696f1bef93d5dd5960b682b9080

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
