import { ChallengeService } from './../../Services/challenge.service';
import { TaskContent } from './../../Models/TaskContent';
import { ChallangeType } from './../../Models/ChallengeType';
import { Component, OnInit } from '@angular/core';
import { Challange } from 'src/app/Models/Challenge';
import { typeSourceSpan } from '@angular/compiler';

@Component({
  selector: 'challenge',
  templateUrl: './challenge.component.html',
  styleUrls: ['./challenge.component.css']
})
export class ChallengeComponent implements OnInit {

  constructor(private service: ChallengeService) { }

  types: ChallangeType[]
  selectedChallengeType: ChallangeType
  tasks: Challange[]

  ngOnInit() {
    //this.getChallengesForPerson();
    if (this.types == undefined || this.types.length == 0) {
      this.getChallengesForTeam();
    }
  }

  //musi zwracać listę wszystkich dostępnych i jeżeli otwarta to otwartych prób la użytkownika
  getChallengesForPerson() {
    this.service.getChallangesForPerson().subscribe(res => {
      this.types = res.json();
    })
  }

  getChallengesForTeam() {
    console.log("Pobieram druzyny");
    this.service.getChallengeForTeam().subscribe(res => {
      this.types = res.json();
      console.log(this.tasks);
    })
  }



}
