import { Component, OnInit } from '@angular/core';
import{Router} from "@angular/router";
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
title="Sign Up";
user={
  fname:"",
  lname:"",
  uname:"",
  password:""
};

  constructor(private auth:AuthService,private router:Router) { }

  ngOnInit(): void {
  }
signup(){
this.auth.signup(this.user)
.subscribe(
  (res)=>{
    localStorage.setItem("token",res.token);
    this.router.navigate(["/"]);
  }
);
}
}
