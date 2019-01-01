import { Person } from './../Models/Person';
import { DataTransferService } from './data-transfer.service';
import { Http } from '@angular/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonService implements OnInit {

  constructor(private http: Http, private data: DataTransferService) { }
  private person: Person;

  ngOnInit() {
    this.data.person.subscribe(p => {
      this.person = p;
    });
  }
}
