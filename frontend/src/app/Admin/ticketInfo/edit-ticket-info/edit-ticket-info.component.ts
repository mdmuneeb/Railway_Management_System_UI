import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { AdminDataService } from '../../../Services/Admin/admin-data.service';
import { get } from 'node:http';

@Component({
  selector: 'app-edit-ticket-info',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
templateUrl: './edit-ticket-info.component.html',
  styleUrl: './edit-ticket-info.component.scss'
})
export class EditTicketInfoComponent implements OnInit{
  
  ticketData!: FormGroup

  constructor(private config: DynamicDialogConfig,
  private adminService: AdminDataService){}
  
  ngOnInit(): void {
    this.ticketData = new FormGroup ({
      User_ID : new FormControl(null, Validators.required),
      passenger_id : new FormControl(null, Validators.required),
      sch_id : new FormControl(null, Validators.required),
      date : new FormControl(null, Validators.required),
      seatNo : new FormControl(null, Validators.required),
    })

    this.getTicket()
  }

  getTicket(){
    let obj = {
      User_ID: this.config.data.User_ID,
      passenger_id: this.config.data.passenger_id,
      sch_id: this.config.data.sch_id
    }    
    this.adminService.getTicketById(obj).
    subscribe({
      next: (res)=>{
        console.log(res);
        
      }
    })
  }
}
