import { Injectable } from '@angular/core';
import{HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http:HttpClient) { }

  getBooks(){
    return this.http.get("http://localhost:3000/books");
  }

  getAuthors(){
    return this.http.get("http://localhost:3000/authors");
  }
  newBook(item:any){
    return this.http.post<any>("http://localhost:3000/addbook",{"book":item})
    .subscribe(data=>{console.log(data)});
  }
  newAuthor(item:any){
    return this.http.post<any>("http://localhost:3000/addauthor",{"author":item})
    .subscribe(data=>{console.log(data)}); 
  }
}
