import { Component, OnInit } from '@angular/core';
import{AuthorModel} from "./authorModel";
import{ BooksService} from "../books.service";
import{Router} from "@angular/router";

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
title="Authors"
  authors:AuthorModel[];
 author:AuthorModel;
  constructor(private bookservice:BooksService,public router:Router) { }

  ngOnInit(): void {
    this.bookservice.getAuthors().subscribe((data)=>{
      this.authors=JSON.parse(JSON.stringify(data));
    })
  }
  authorMore(val:any){
this.author=this.authors[val];
this.router.navigate(["/author"],{state:{"data":this.author}});
  }

}
