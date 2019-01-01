import { Person } from './../../Models/Person';
import { DataTransferService } from './../../Services/data-transfer.service';
import { User } from './../../Models/User';
import { LoginService } from './../../Services/login.service';
import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user: User;
  private person: Person;

  constructor(private service: LoginService, private data: DataTransferService, public router: Router) { }

  ngOnInit() {
    console.log('subscribed');

    this.data.user.subscribe(u => this.user = u);
    this.data.person.subscribe(p => {this.person = p; });

    this.service.getUser().subscribe(res => {
      this.user = res.json() as User;
      console.log('subscribed');
      console.log(this.user);
      console.log('end');
    });
  }

  signIn() {
      if (this.user.Login !== '' && this.user.Password !== '') {
        this.service.logIn(this.user).subscribe(res => {
          this.user = res.json() as User;
          console.log(this.user);
        });
      }
      this.goToPerson();
  }

  goToPerson() {
     if (this.user !== undefined) {
       console.log("GetPerson");
        this.service.getPerson(this.user).subscribe(res => {
          this.person = res.json() as Person;
          this.router.navigate(['Person/' + this.person.Id]);
        });
    }
  }


}
