import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TicketInputComponent } from '../ticket-input/ticket-input.component';
import { CalendarModule } from 'primeng/calendar';
import { FloatLabelModule } from 'primeng/floatlabel';
import { ButtonModule } from 'primeng/button';
import { TabViewModule } from 'primeng/tabview';
import { CardModule } from 'primeng/card';
import { AdminDataService } from '../../Services/Admin/admin-data.service';
import { CustomerServiceService } from './../../Services/Customer/customer-service.service';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { Router } from '@angular/router';
import { DialogService, DynamicDialogModule, DynamicDialogRef } from 'primeng/dynamicdialog';
import { AddTicketComponent } from './add-ticket/add-ticket.component';

@Component({
  selector: 'app-ticket-preview',
  standalone: true,
  imports: [CalendarModule, FloatLabelModule, ButtonModule, TabViewModule, CardModule, CommonModule, ReactiveFormsModule, FormsModule, DynamicDialogModule, DialogModule],
  templateUrl: './ticket-preview.component.html',
  styleUrl: './ticket-preview.component.scss',
  encapsulation: ViewEncapsulation.None,
  providers: [DialogService]
})
export class TicketPreviewComponent implements OnInit {
  activeIndex: number = 0;

  data !: any;
  gotData = false;
  allUserBookedTickets!: any[]
  userFrom: string = '';
  userTo: string = ''
  userDate: string = ''
  ticketInput!: FormGroup; 
  visible: boolean = false;
  isDisabled = true;
  trainsInfo!: any;
  ref: DynamicDialogRef | undefined;


  constructor (private adminService: AdminDataService,
  private customerService: CustomerServiceService,
  private router: Router,
  public dialogService: DialogService
  ){}

  ngOnInit(){
    

  console.log(
    this.adminService.To,
    this.adminService.From,
    this.adminService.Date
  );
  this.userFrom = this.adminService.From;
  this.userTo = this.adminService.To;
  this.userDate = this.adminService.Date;

  this.userDefineTicket()

  this.ticketInput = new FormGroup({
    To: new FormControl(null),
    From: new FormControl(null),
    Date: new FormControl(null) 
  })

  this.ticketInput.patchValue({
    To: this.userTo,
    From: this.userFrom,
    Date: this.userDate,
  })


  if (typeof sessionStorage !== 'undefined') {
    this.data = sessionStorage.getItem("userData");
    this.data =  JSON.parse(this.data)
    this.gotData = true;
    console.log(this.data.UserId);
    this.customerService.getAllBookedTickets(this.data.UserId)
    .subscribe({
      next: (res) =>{
        console.log(res);
        this.allUserBookedTickets = res
      },
      error: (err)=>{
        console.error("Error", err)
      }
    })
  
  }
}


  logOutUser(){
    if(typeof sessionStorage !== undefined){
      sessionStorage.removeItem("userData")
      this.router.navigate(['/landingPageCustomer'])
    }
  }

  showDialog() {
    this.visible = true;
  }


  userDefineTicket(){
    let obj = {
      "start": this.userFrom,
      "end": this.userTo
    }
    this.customerService.getUserWantTicket(obj)
    .subscribe({
      next: (res) =>
      {
        console.log(res.schedules[0]);
        this.trainsInfo = res.schedules[0]
      }
    }) 
  }

  bookTicket(){
    this.ref = this.dialogService.open(AddTicketComponent, {
      header: 'Create Ticket',
      width: '50vw',
      modal:true,
      breakpoints: {
          '960px': '75vw',
          '640px': '90vw'
      },
      data: {
        UserId: this.data.UserId
      }
  });
  }
}
