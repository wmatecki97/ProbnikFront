import { Person } from './../../Models/Person';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-person-form',
  templateUrl: './create-person-form.component.html',
  styleUrls: ['./create-person-form.component.css']
})
export class CreatePersonFormComponent implements OnInit {

  person: Person
  constructor() { }

  ngOnInit() {
  }

  

}
