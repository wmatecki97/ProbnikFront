import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallengePatronComponent } from './challenge-patron.component';

describe('ChallengePatronComponent', () => {
  let component: ChallengePatronComponent;
  let fixture: ComponentFixture<ChallengePatronComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChallengePatronComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChallengePatronComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
