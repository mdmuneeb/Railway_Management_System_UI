import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { CustomerServiceService } from '../../../Services/Customer/customer-service.service';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';


@Component({
  selector: 'app-add-ticket',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, ToastrModule],
templateUrl: './add-ticket.component.html',
  styleUrl: './add-ticket.component.scss',
   providers: [DialogService, ToastrService] 
})
export class AddTicketComponent implements OnInit{
  
  
  createTicket!: FormGroup
  passengerId!: number
  isDone!: boolean 

  constructor(private config:DynamicDialogConfig,
  private customerService: CustomerServiceService,
  private toastr: ToastrService,
  public dialogService: DialogService,
  private ref : DynamicDialogRef){}


  ngOnInit(): void {
    this.createTicket = new FormGroup({
      name: new FormControl(null, Validators.required),
      gender: new FormControl(null, Validators.required),
      phone_number: new FormControl(null, Validators.required),      
    })
  }


  CreateUserTicket(){
    this.isDone = true
    const date = new Date(this.config.data.date);
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2); // Adding 1 because getMonth() returns zero-based index
    const day = ('0' + date.getDate()).slice(-2);

    const formattedDate = `${year}-${month}-${day}`;
    console.log(
      // this.config.data.UserId,
      // this.config.data.sch_id,
      formattedDate
      // this.createTicket.value,
    );

    this.customerService.createPassenger(this.createTicket.value)
    .subscribe({
      next: (res)=>{
        console.log(res);
        this.passengerId = res.new_passenger_ID
        this.AddTicket(formattedDate)
      },
      error: (err)=>{
        console.log("passenger error", err);
      }
    })

  }

  AddTicket(date:any){
    let obj = {
      User_ID: this.config.data.UserId,
      passenger_id: this.passengerId,
      sch_id: this.config.data.sch_id,
      date: date
    }
    console.log(obj);
    
    this.customerService.createTicket(obj)
    .subscribe({
      next: (res)=>{
        console.log(res);
        this.isDone = false
        this.ref.close()
        this.toastr.success('Ticket Successfully created', `You aeat Number is ${res.seatNo}`);
      },
      error: (err)=>{
        console.log("Ticket error", err);
      }
    })
  }

  setDate(date:any){
    let setDate = date.split("T")
    return setDate[0]
  }

}
