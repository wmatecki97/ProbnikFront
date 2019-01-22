import { Person } from 'src/app/Models/Person';
import { User } from './../Models/User';
import { ServiceConfiguration } from './ServiceConfiguration';
import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { userInfo } from 'os';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: Http) { }

  user:User;

  getUser(): Observable<Response> {
    return this.http.get(ServiceConfiguration.address + 'Get/User');
  }

  logIn(user: User): Observable<Response> {
    // return this.http.put('/api/Login', user);
    return this.http.put(ServiceConfiguration.address + 'Login', user);
  }

  getPerson(user: User) {
    this.user = user;
    return this.http.get(ServiceConfiguration.address + 'Get/Person/' + user.Token);
  }

  getPatron(person: Person){
    return this.http.get(ServiceConfiguration.address + 'Get/Patron/' + person.Id +'/'+ this.user.Token);
  }
}
