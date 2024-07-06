import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-ticket-info',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
templateUrl: './edit-ticket-info.component.html',
  styleUrl: './edit-ticket-info.component.scss'
})
export class EditTicketInfoComponent implements OnInit{
  
  ticketData!: FormGroup
  
  ngOnInit(): void {
    this.ticketData = new FormGroup ({
      User_ID : new FormControl(null, Validators.required),
      passenger_id : new FormControl(null, Validators.required),
      sch_id : new FormControl(null, Validators.required),
      date : new FormControl(null, Validators.required),
      seatNo : new FormControl(null, Validators.required),
    })
  }
}
