import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserService } from './../../../Services/Public/user.service';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

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
  
  constructor(private userService: UserService){}

  
  ngOnInit(): void {
    this.LogInUserForm = new FormGroup({
      User_ID: new FormControl(null, Validators.required),
      UserPassword: new FormControl(null, Validators.required)
    })  
  }

  toggleSignup() {
    this.isSignup = !this.isSignup;
  }

  LogUser(){
    console.log(this.LogInUserForm.value);
    this.userService.UserLogin(this.LogInUserForm.valid)
    .subscribe({
      next: (res) =>{console.log(res);
      } 
    })
  }

}
