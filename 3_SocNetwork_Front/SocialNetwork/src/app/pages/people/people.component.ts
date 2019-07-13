import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  users: any = [];

  constructor(private http: HttpClient) { }

  allPeople() {
    this.http.get('http://localhost:3000/people').subscribe((data): any => {
      this.users = data; 
      console.log(this.users);
    });
  }
  addTofriend(_id) {
    this.http.post('http://localhost:3000/friend/' + _id, {}).subscribe((data): any => {
    console.log('succsess');
    });
    console.log(_id);
  }
  ngOnInit() {
  }

}
