import { Component, OnInit } from '@angular/core';
import{AuthService} from "../auth.service";
@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
author:any
title="Author"
  constructor(public auth:AuthService) { }

  ngOnInit(): void {
    this.author=history.state.data;
  }

}
