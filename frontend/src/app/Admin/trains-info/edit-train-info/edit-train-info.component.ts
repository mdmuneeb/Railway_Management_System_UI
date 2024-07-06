import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-edit-train-info',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './edit-train-info.component.html',
  styleUrl: './edit-train-info.component.scss'
})
export class EditTrainInfoComponent implements OnInit{

  trainData!: FormGroup 


  constructor(public config: DynamicDialogConfig,){}


  ngOnInit(): void {
    this.trainData = new FormGroup ({
      train_id : new FormControl(null),
      capacity: new FormControl(null)
    })
  }

  getTrain(){
    console.log(this.config.data.Id);
  }



}
