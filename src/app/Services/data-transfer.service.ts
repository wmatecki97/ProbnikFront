import { Person } from './../Models/Person';
import { User } from './../Models/User';
import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { Http, HttpModule} from '@angular/http';

@Injectable()
export class DataTransferService {

  private userSource = new BehaviorSubject<User>(new User());
  user = this.userSource.asObservable();

  private personSource =  new BehaviorSubject<Person>(new Person());
  person = this.personSource.asObservable();

  constructor() { }

  setPerson(value: Person)
  {
    console.log("person changed");
    this.personSource.next(value);
  }

  setUser(value: User){
    console.log("user changed");
    this.userSource.next(value);
    console.log(this.userSource);
  }
}
