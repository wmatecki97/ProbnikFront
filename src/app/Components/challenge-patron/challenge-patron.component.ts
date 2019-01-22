import { ChallengeComponent } from './../challenge/challenge.component';
import { Component, OnInit } from '@angular/core';
import { ChallengeService } from 'src/app/Services/challenge.service';
import { DataTransferService } from 'src/app/Services/data-transfer.service';
import { ChallangeType } from 'src/app/Models/ChallengeType';
import { Challange } from 'src/app/Models/Challenge';
import { Patron } from 'src/app/Models/Patron';
import { Person } from 'src/app/Models/Person';

@Component({
  selector: 'challenge-patron',
  templateUrl: './challenge-patron.component.html',
  styleUrls: ['./challenge-patron.component.css']
})
export class ChallengePatronComponent implements OnInit {


  constructor(private service: ChallengeService, private data: DataTransferService) { }

  patron: Patron
  challenges: Challange[];
  challengeTypes: ChallangeType[];
  proteges: Person[];

  selectedProtege: Person;
  protegeChallenges: Challange[];
  protegeChallengeTypes: ChallangeType[];
  selectedChallengeType: ChallangeType;

  ngOnInit(): void {
    this.data.patron.subscribe(p =>{
      this.patron = p;
    })
    this.proteges = [];
    this.getChallengesForPatron();
    this.getChallengeTypes();
  }

  getChallengesForPatron(){
    this.service.getChallengesForPatron(this.patron).subscribe(res =>{
      this.challenges = res.json();
      for(let c of this.challenges){
        this.addProtege(c);
      }
      this.getChallengeTypes();
    })
  }
  
  private getChallengeTypes(){
    this.service.getAllChallengeTypes().subscribe(res => {
      this.challengeTypes = res.json();
    });
  }
  private addProtege(c: Challange) {
    let add = true;
    for (let p of this.proteges) {
      if (p.Id == c.Owner.Id)
        add = false;
    }
    if (add) {
      this.proteges.push(c.Owner);
    }
  }

  selectProtege(person: Person){
    this.selectedProtege = person;
    this.protegeChallengeTypes = [];
    this.protegeChallenges = [];
    for(let challenge of this.challenges)
    {
      this.addProtegeChallengeType(challenge, person);
    }
  }

  private addProtegeChallengeType(challenge: Challange, person: Person) {
    if (challenge.Owner.Id == person.Id) {
      let add = true;
      let ct = this.getChallengeType(challenge.Task.ChallangeTypeId);
      for (let c of this.protegeChallengeTypes) {
        if (c == ct)
          add = false;
      }
      if (add)
        this.protegeChallengeTypes.push(ct);
    }
  }

  getChallengeType(challengeTypeId: number){
    for(let c of this.challengeTypes)
    {
      if(c.Id == challengeTypeId)
        return c;
    }
  }

  selectChallengeType(challengeType: ChallangeType){
    this.selectedChallengeType = challengeType;
    for(let c of this.challenges){
      if(c.Owner.Id == this.selectedProtege.Id && c.Task.ChallangeTypeId == challengeType.Id){
        this.protegeChallenges.push(c);
      }
    }
  }

  saveChallenge(){
    this.service.saveChallenge(this.protegeChallenges).subscribe(res =>{
      this.protegeChallenges = res.json();
    })
  }
}