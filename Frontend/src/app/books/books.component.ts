import { Component, OnInit } from '@angular/core';
import{ BooksService} from "../books.service";
import{BookModel} from "./bookModel";
import{Router} from "@angular/router";

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
title="Books";
  books:BookModel[];
  book:BookModel;

  constructor(private bookservice: BooksService ,public router:Router) { }
 

  ngOnInit(): void {
    this.bookservice.getBooks().subscribe((data)=>{
      this.books=JSON.parse(JSON.stringify(data));
    })
  }
  val:number;
  bookMore(event:any){
    this.val=event;
    console.log(this.val);
    this.book=this.books[this.val];
    console.log(this.book)
    this.router.navigate(["/book"],{state:{"data":this.book}});
  
  
    }
}
