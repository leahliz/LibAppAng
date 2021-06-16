import { Component, OnInit } from '@angular/core';
import { AuthorModel } from '../authors/authorModel';
import{BooksService} from "../books.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-authors',
  templateUrl: './add-authors.component.html',
  styleUrls: ['./add-authors.component.css']
})
export class AddAuthorsComponent implements OnInit {
title:String="Add Author";
  constructor(private bookService:BooksService,private router:Router) { }
  author=new AuthorModel("","","","");
  ngOnInit(): void {
  }
 AddAuthor(){
   this.bookService.newAuthor(this.author);
   alert("Success");
   this.router.navigate(["/authors"])
 }
}

