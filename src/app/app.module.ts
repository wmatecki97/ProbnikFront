import { DataTransferService } from './Services/data-transfer.service';
import { ProfileComponent } from './Components/profile/profile.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { ChallengeComponent } from './Components/challenge/challenge.component';
import { TeamComponent } from './Components/team/team.component';
import { CreatePersonFormComponent } from './Components/create-person-form/create-person-form.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { TeamsListComponent } from './Components/teams-list/teams-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    NotFoundComponent,
    ProfileComponent,
    ChallengeComponent,
    TeamComponent,
    CreatePersonFormComponent,
    TeamsListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: LoginComponent},
      { path: 'Login', component: LoginComponent},
      { path: 'Challenge', component: ChallengeComponent},
      { path: 'Person/:id', component: ProfileComponent},
      { path: 'Teams', component: TeamsListComponent},
      { path: 'Team', component: TeamComponent},
      { path: '**', component: NotFoundComponent},

    ])
  ],
  providers: [AppModule, DataTransferService],
  bootstrap: [AppComponent],
})
export class AppModule { }
//WYKONAĆ W WINDOWS -> RUN
// chrome.exe --user-data-dir="C://Chrome dev session" --disable-web-security