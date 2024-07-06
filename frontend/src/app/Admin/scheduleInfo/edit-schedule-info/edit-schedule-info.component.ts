import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-edit-schedule-info',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './edit-schedule-info.component.html',
  styleUrl: './edit-schedule-info.component.scss'
})
export class EditScheduleInfoComponent implements OnInit{
  
  scheduleData!: FormGroup
  
  constructor(public config: DynamicDialogConfig,){}
  
  ngOnInit(): void {
    this.scheduleData = new FormGroup({
      train_id: new FormControl(null, Validators.required),
      sch_id: new FormControl(null, Validators.required),
      start: new FormControl(null, Validators.required),
      end: new FormControl(null, Validators.required),
      departure_time: new FormControl(null, Validators.required),
      arrival_time: new FormControl(null, Validators.required),
    })

    this.getSchedule()
  }


  getSchedule(){
    console.log(this.config.data.Id);
    
  }

}
