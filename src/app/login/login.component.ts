import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  login =  new FormControl('',Validators.required)
  pwd = new FormControl('',[Validators.required,Validators.minLength(6)])


    loginForm = new FormGroup({
      name : new FormControl('',Validators.required),
      cin : new FormControl('',[Validators.required,Validators.pattern(/^\d{8}$/)]),
      email : new FormControl('',[Validators.required,Validators.email]),
      password : new FormControl('',[Validators.required,Validators.minLength(6)]),
    })



  save(){
    console.log(this.login)
    console.log(this.pwd)
  }
}
