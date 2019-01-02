import { PersonService } from './../../Services/person.service';
import { DataTransferService } from './../../Services/data-transfer.service';
import { Person } from './../../Models/Person';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private data: DataTransferService, private service: PersonService) { }
  
  person: Person;
  stringDate: string;

  ngOnInit() {
    this.person = new Person();
    this.stringDate = "21-12-2018";


    this.data.person.subscribe(p => {
      {
        if(p != undefined)
        {
          this.person = p;
          if(p.DateOfBirth!= undefined)
          {
            this.stringDate = p.DateOfBirth.toString().substr(0,10);
          }
        }
      }
    })
  }

  savePerson()
  {
    this.person.DateOfBirth = new Date(this.stringDate);
    console.log(this.person);
    this.service.updatePerson(this.person);
  }
}
