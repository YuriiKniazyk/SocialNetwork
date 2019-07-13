import { Component, OnInit } from '@angular/core';
import { Reg_User } from '../../models/reg_user';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: Reg_User = {
    name: '',
    surname: '',
    password: '', 
    email: ''
  };

  constructor(private http: HttpClient) { }

  register() {
    console.log(this.user);
    return this.http.post('http://localhost:3000/user', this.user).subscribe((data): any => {
      this.user = {name: '',
      surname: '',
      password: '', 
      email: ''
    }
      console.log(data);
    });
  }
  ngOnInit() {
  }

}
