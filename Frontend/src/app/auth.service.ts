import { Injectable } from '@angular/core';
import{HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  loginUser(user:any){
    return this.http.post<any>("http://3.108.170.40:3000/login",user)
  }
  signup(user:any){
    return this.http.post<any>("http://3.108.170.40:3000/signup",{"user":user})
  }
  loggedIn(){
    return !!localStorage.getItem("token");
  }
  getToken(){
    return localStorage.getItem("token");
  }
}
