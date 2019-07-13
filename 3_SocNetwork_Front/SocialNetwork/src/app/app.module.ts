import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { AppComponent } from './app.component';
import { PeopleComponent } from './pages/people/people.component';
import { FindUserComponent } from './pages/find-user/find-user.component';
import { UserIdComponent } from './pages/user-id/user-id.component';
import { FriendIdComponent } from './pages/friend-id/friend-id.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { LogoutComponent } from './pages/logout/logout.component';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'people', component: PeopleComponent},
  {path: 'find-user', component: FindUserComponent},
  {path: 'user/:id', component: UserIdComponent},
  {path: 'friend/:id', component: FriendIdComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'logout', component: LogoutComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    PeopleComponent,
    FindUserComponent,
    UserIdComponent,
    FriendIdComponent,
    ProfileComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      routes
    )
    // other imports here
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
