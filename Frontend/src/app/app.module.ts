import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule,HttpInterceptor, HTTP_INTERCEPTORS} from "@angular/common/http";
import{FormsModule} from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BooksComponent } from './books/books.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AuthorsComponent } from './authors/authors.component';
import { BookComponent } from './book/book.component';
import { AuthorComponent } from './author/author.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AddBooksComponent } from './add-books/add-books.component';
import { AddAuthorsComponent } from './add-authors/add-authors.component';

import{AuthService} from "./auth.service";
import{BooksService} from "./books.service";
import{TokenInterceptorService} from "./token-interceptor.service";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BooksComponent,
    FooterComponent,
    HomeComponent,
    AuthorsComponent,
    BookComponent,
    AuthorComponent,
    LoginComponent,
    SignupComponent,
    AddBooksComponent,
    AddAuthorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [BooksService,AuthService,
  {
    provide:HTTP_INTERCEPTORS,
    useClass:TokenInterceptorService,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
