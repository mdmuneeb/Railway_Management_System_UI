import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-edit-passengers-info',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './edit-passengers-info.component.html',
  styleUrl: './edit-passengers-info.component.scss'
})
export class EditPassengersInfoComponent implements OnInit{
  
  passengersData!: FormGroup 

  constructor(public config: DynamicDialogConfig,){}
  
  ngOnInit(): void {
    this.passengersData = new FormGroup({
      name: new FormControl(null, Validators.required),
      gender: new FormControl(null, Validators.required),
      phone_number: new FormControl(null, Validators.required),
    })
    this.getPassenger()

  }

  getPassenger(){
    console.log(this.config.data.Id);
    
  }


}
