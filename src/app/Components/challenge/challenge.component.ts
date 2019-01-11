import { ChallengeService } from './../../Services/challenge.service';
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

  constructor(private service: ChallengeService) { }

  types: ChallangeType[]
  selectedChallengeType: ChallangeType
  tasks: Challange[]

  ngOnInit() {
    this.getChallengesForPerson();
    
  }

  //musi zwracać listę wszystkich dostępnych i jeżeli otwarta to otwartych prób la użytkownika
  getChallengesForPerson(){
    this.service.getChallangesForPerson().subscribe(res =>{
      this.types = res.json();
    })
  }

  getCurrentChallengeTasksContent(){
    if(this.selectedChallengeType!= undefined)
    {
        this.service.getChallengeTaskContent().subscribe(res => {
            this.tasks = res.json();
        })
    }
  }



}
