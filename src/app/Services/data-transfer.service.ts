import { Person } from './../Models/Person';
import { User } from './../Models/User';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Http, HttpModule} from '@angular/http';

@Injectable()
export class DataTransferService {

  private userSource = new Subject<User>();
  user = this.userSource.asObservable();

  private personSource = new Subject<Person>();
  person = this.personSource.asObservable();

  constructor() { }
}
