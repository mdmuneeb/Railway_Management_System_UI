import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserService } from './../../../Services/Public/user.service';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { timeStamp } from 'console';
import { Router } from '@angular/router';
import { runInThisContext } from 'vm';
import { json } from 'stream/consumers';
import { ToastrModule, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule,ToastrModule],
templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  providers: [ToastrService]
})
export class LoginComponent implements OnInit{
  
  isSignup: boolean = false;
  LogInUserForm!: FormGroup;
  RegisterUserForm!: FormGroup;
  
  constructor(private userService: UserService,
  private router: Router,
  private toastr: ToastrService
  ){}

  
  ngOnInit(): void {
    this.LogInUserForm = new FormGroup({
      Email: new FormControl(null, Validators.required),
      UserPassword: new FormControl(null, Validators.required)
    })
    
    this.RegisterUserForm = new FormGroup({
      UserName: new FormControl(null, Validators.required),
      UserPassword: new FormControl(null, Validators.required),
      Email: new FormControl(null, Validators.required)
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
          let data = JSON.stringify(res)
          if(res.UserType == "admin"){
            sessionStorage.setItem("userData", `${data}`)
            this.router.navigate(["/adminPortal"])
          }
          else{
            sessionStorage.setItem("userData", `${data}`)
            this.router.navigate(["/landingPageCustomer"])
          }
          
        }

      } 
    })
  }

  RegisterUser(){
    console.log(this.RegisterUserForm.value);
    this.userService.userRegister(this.RegisterUserForm.value)
    .subscribe({
      next: (res)=>{
        console.log(res);
        this.toastr.success('User Successfully created', `Thanks for Joining with us`);
        this.RegisterUserForm.reset()
      }
    })
  }

}
