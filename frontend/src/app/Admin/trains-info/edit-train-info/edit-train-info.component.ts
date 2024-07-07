import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { AdminDataService } from '../../../Services/Admin/admin-data.service';
import { userInfo } from 'os';
import { log } from 'console';

@Component({
  selector: 'app-edit-train-info',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './edit-train-info.component.html',
  styleUrl: './edit-train-info.component.scss'
})
export class EditTrainInfoComponent implements OnInit{

  trainData!: FormGroup 


  constructor(public config: DynamicDialogConfig,
  private adminService: AdminDataService,
  private ref: DynamicDialogRef
){}


  ngOnInit(): void {
    this.trainData = new FormGroup ({
      train_id : new FormControl(null),
      capacity: new FormControl(null)
    })
    this.getTrain();
  }

  getTrain(){
    console.log(this.config.data.Id);
    this.adminService.getTrainById(this.config.data.Id).
    subscribe({
      next: (res)=>{
        console.log(res[0]);
        this.trainData.patchValue({
          train_id : res[0].train_id,
          capacity: res[0].capacity
        })
      }
    })
  }

  editTrain(){
    console.log(this.trainData.value);
    console.log(this.adminService.getAllTrains());
    this.adminService.updateTrain(this.trainData.value)
    .subscribe({
      next: (res)=>{
        this.config.data.getTrains()
        console.log(res);
        this.ref.close()
      }
    })
  }



}
