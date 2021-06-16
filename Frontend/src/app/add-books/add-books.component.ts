import { Component, OnInit } from '@angular/core';
import{BookModel} from "../books/bookModel";
import{BooksService} from "../books.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-books',
  templateUrl: './add-books.component.html',
  styleUrls: ['./add-books.component.css']
})
export class AddBooksComponent implements OnInit {
title:String="Add Book"
  constructor(private bookservice:BooksService,private router:Router) { }
 book=new BookModel("","","","","");

  ngOnInit(): void {
  }
AddBook(){
 this.bookservice.newBook(this.book);
 alert("Success");
 this.router.navigate(["/books"]);
}
}
