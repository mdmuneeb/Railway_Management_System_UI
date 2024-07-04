import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserService } from './../../../Services/Public/user.service';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { timeStamp } from 'console';
import { Router } from '@angular/router';
import { runInThisContext } from 'vm';
import { json } from 'stream/consumers';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{
  
  isSignup: boolean = false;
  LogInUserForm!: FormGroup;
  RegisterUserForm!: FormGroup;
  
  constructor(private userService: UserService,
  private router: Router
  ){}

  
  ngOnInit(): void {
    this.LogInUserForm = new FormGroup({
      User_ID: new FormControl(null, Validators.required),
      UserPassword: new FormControl(null, Validators.required)
    })
    
    this.RegisterUserForm = new FormGroup({
      User_Name: new FormControl(null, Validators.required),
      UserPassword: new FormControl(null, Validators.required)
    })
  }

  toggleSignup() {
    this.isSignup = !this.isSignup;
  }

  LogUser(){
    console.log(this.LogInUserForm.value);
    this.userService.UserLogin(this.LogInUserForm.value)
    .subscribe({
      next: (res) =>{console.log(res);
        if(res.success){
          
          if(res.UserType == "admin"){
            this.router.navigate(["/adminPortal"])
          }
          else{
            let data = JSON.stringify(res)
            sessionStorage.setItem("userData", `${data}`)
            this.router.navigate(["/landingPageCustomer"])
          }
          
        }

      } 
    })
  }

  RegisterUser(){
    console.log(this.RegisterUserForm.value);
  }

}
