import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import{BooksComponent} from "./books/books.component";
import{HomeComponent} from "./home/home.component";
import{AuthorsComponent} from "./authors/authors.component";
import{BookComponent} from "./book/book.component";
import{AuthorComponent} from "./author/author.component";
import{LoginComponent} from "./login/login.component";
import{AuthGuard} from "./auth.guard";
import{AddBooksComponent} from "./add-books/add-books.component";
import{AddAuthorsComponent} from "./add-authors/add-authors.component";
import{SignupComponent} from "./signup/signup.component";

const routes: Routes = [
  {path:"",component:HomeComponent },
  {path:"books",component:BooksComponent},
  {path:"authors",component:AuthorsComponent},
  {path:"book",component:BookComponent},
  {path:"author",component:AuthorComponent},
  {path:"login",component:LoginComponent},
  {path:"signup",component:SignupComponent},
  {path:"addBooks",
   canActivate:[AuthGuard],component:AddBooksComponent},
  {path:"addAuthors",
   canActivate:[AuthGuard],component:AddAuthorsComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
