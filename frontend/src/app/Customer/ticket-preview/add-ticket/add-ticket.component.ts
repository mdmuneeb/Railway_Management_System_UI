import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-ticket',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './add-ticket.component.html',
  styleUrl: './add-ticket.component.scss'
})
export class AddTicketComponent implements OnInit{
  
  
  createTicket!: FormGroup 
  ngOnInit(): void {
    this.createTicket = new FormGroup({
      
    })
  }

}
