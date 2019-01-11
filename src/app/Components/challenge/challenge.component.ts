import { TaskContent } from './../../Models/TaskContent';
import { ChallangeType } from './../../Models/ChallengeType';
import { Component, OnInit } from '@angular/core';
import { Challange } from 'src/app/Models/Challenge';

@Component({
  selector: 'app-challenge',
  templateUrl: './challenge.component.html',
  styleUrls: ['./challenge.component.css']
})
export class ChallengeComponent implements OnInit {

  constructor() { }

  types: ChallangeType[]
  selectedChallengeType: ChallangeType
  tasks: Challange[]

  ngOnInit() {
    this.getChallengeForPerson();
    
  }

  //musi zwracać listę wszystkich dostępnych i jeżeli otwarta to otwartych prób la użytkownika
  getChallengesForPerson(){
    this.service.XXX.subscribe(res =>{
      this.types = res.json();
    })
  }

  getCurrentChallengeTasksContent(){
    if(this.selectedChallengeType!= undefined)
    {
        this.service.XXX.subscribe(res => {
            this.tasks = res.json();
        })
    }
  }



}
