import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import {HttpClient}from'@angular/common/http';
declare var $:any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 login:FormGroup|any;

  constructor(private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.login = new FormGroup({
      'email':new FormControl(),
      'password':new FormControl()
    })
  }
  logindata(login:FormGroup){
    this.http.get<any>("http://localhost:3000/posts").subscribe(res=>{
      const user=res.find((a:any)=>{
        return a.email===this.login.value.email&&a.password===this.login.value.password
      });
      if(user){
        alert('login success');
        this.login.reset()
        this.router.navigate(["home"])
      }
      else{
        alert("user does not")
      }
    })
  }

}
