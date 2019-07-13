import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Find } from '../../models/find_user'

@Component({
  selector: 'app-find-user',
  templateUrl: './find-user.component.html',
  styleUrls: ['./find-user.component.css']
})
export class FindUserComponent implements OnInit {

  find: string = '';
  users: any = []; 
  
  constructor(private http: HttpClient) { }

  findPeople() {
    console.log(this.find);
    this.http.get('http://localhost:3000/find-user?name=' + this.find).subscribe((data): any => {
      this.find = '';
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
