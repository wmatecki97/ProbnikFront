import { User } from './../Models/User';
import { ServiceConfiguration } from './ServiceConfiguration';
import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: Http) { }

  getUser(): Observable<Response> {
    return this.http.get(ServiceConfiguration.address + 'Get/User');
  }

  logIn(user: User): Observable<Response> {
    return this.http.put('/api/Login', user);
    // return this.http.post('http://localhost:1234/Login', user);
  }

  getPerson(user: User) {
    return this.http.get('/api/Get/Person/' + user.Token);
  }
}
