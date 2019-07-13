import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-id',
  templateUrl: './user-id.component.html',
  styleUrls: ['./user-id.component.css']
})
export class UserIdComponent implements OnInit {
  user: any = {
    _id: '',
    name: '',
    surname: '',
    password: '',
    email: ''
  };

  constructor(private http: HttpClient ) { }
  
  addTofriend(_id) {
    this.http.get('http://localhost:3000/user/' + _id).subscribe((data): any => {
      console.log('succsess');
    });
    console.log(_id);
  }
  ngOnInit() {
  }

}
