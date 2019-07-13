import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-friend-id',
  templateUrl: './friend-id.component.html',
  styleUrls: ['./friend-id.component.css']
})
export class FriendIdComponent implements OnInit {
  constructor(private http: HttpClient) { }
  ngOnInit() {
  }

}
