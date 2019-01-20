import { Patron } from './../../Models/Patron';
import { Person } from './../../Models/Person';
import { DataTransferService } from './../../Services/data-transfer.service';
import { ChallengeService } from './../../Services/challenge.service';
import { TaskContent } from './../../Models/TaskContent';
import { ChallangeType } from './../../Models/ChallengeType';
import { Component, OnInit } from '@angular/core';
import { Challange } from 'src/app/Models/Challenge';
import { typeSourceSpan } from '@angular/compiler';
import { TaskState } from 'src/app/Models/TaskState';

@Component({
  selector: 'challenge',
  templateUrl: './challenge.component.html',
  styleUrls: ['./challenge.component.css']
})
export class ChallengeComponent implements OnInit {

  constructor(private service: ChallengeService, private data: DataTransferService) { }

  types: ChallangeType[];
  selectedChallengeType: ChallangeType;
  tasks: Challange[];
  patrons: Patron[];
  person: Person;
  selectedPatron: Patron;
  challengePatron: Patron;

  ngOnInit() {
    //this.getChallengesForPerson();
    if (this.types == undefined || this.types.length == 0) {
      this.getChallengesForTeam();
    }
    this.getPatrons();
  }

  getPerson(){
    this.data.person.subscribe(p => {
        this.person = p;
      })
  }

  getPatrons(){
    this.data.team.subscribe(t => {
      this.patrons = t.Patrons;
    })
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

  selectChallengeType(challenge: ChallangeType){
    this.getPerson();
    this.selectedChallengeType = challenge;
    this.service.GetChallengeForPerson(challenge).subscribe(res => {
      this.tasks = res.json();
      // console.log('sprawdzam czy jest otwarta proba');
      if(this.tasks.length == 0)
      {
        // console.log('nie jest');
        for(let task of this.selectedChallengeType.Tasks)
        {
          let challenge = new Challange;
          challenge.Owner = this.person;
          challenge.Task = task;
          //challenge.State = TaskState.NotStarted;
          this.tasks.push(challenge);
        }

        // console.log(this.tasks);
      }
      this.challengePatron = this.tasks[0].Patron;

      // console.log('patron');
      // console.log(this.selectedPatron);
    })
    ;
  }

  saveChallenge(){
    if(this.selectedPatron != undefined)
    {
      for(let task of this.tasks){
          task.Patron = this.selectedPatron;
      }
    }
    this.service.saveChallenge(this.tasks).subscribe(res => {
      this.tasks = res.json();
      this.challengePatron = this.tasks[0].Patron;
      // console.log("Zapisalem");
      // console.log(this.tasks);
    })
  }

}
