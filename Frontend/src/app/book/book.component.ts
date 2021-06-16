import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import{AuthService} from "../auth.service";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  book:any;
  title="Book"
  constructor(public activatedRoute:ActivatedRoute,public auth:AuthService) { }

  ngOnInit(): void {
    this.book=history.state.data;
  }

}
