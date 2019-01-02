import { User } from './../Models/User';
import { Person } from './../Models/Person';
import { DataTransferService } from './data-transfer.service';
import { Http } from '@angular/http';
import { Injectable, OnInit } from '@angular/core';
import { ServiceConfiguration } from './ServiceConfiguration';

@Injectable({
  providedIn: 'root'
})
export class PersonService implements OnInit {

  constructor(private http: Http, private data: DataTransferService) { }
  private person: Person;
  private user: User;
  ngOnInit() {
    this.getPerson();
    this.getUser();
  }

  updatePerson(person: Person){
    this.getUser();
    console.log("put");
    this.http.put(ServiceConfiguration.address + 'Update/Person/' +  this.user.Token, person).subscribe(res => 
      {
          this.data.setPerson(res.json());
          this.getPerson();
          console.log(this.person);
      });
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

}
