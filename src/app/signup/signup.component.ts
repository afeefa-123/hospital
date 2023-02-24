import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import {HttpClient}from'@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  
  constructor(private formBuilder:FormBuilder,private http:HttpClient,private router:Router) { }
signup:FormGroup|any;
signuser:any;
  ngOnInit(): void {
    this.signup=new FormGroup({
     'email':new FormControl(),
     'password':new FormControl()
    
    })
  }
  signupdata(signup:FormGroup){
    this.signuser=this.signup.value.email

    this.http.post<any>("http://localhost:3000/posts",this.signup.value)
    .subscribe(res=>{
      alert('SIGNIN SUCCESSFUL');
      this.signup.reset()
      this.router.navigate(["login"])
    },error=>{
      alert("somthing went wrong")

    }
    )
  }

}
