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


@Component({
  selector: 'app-ticket-preview',
  standalone: true,
  imports: [CalendarModule, FloatLabelModule, ButtonModule, TabViewModule, CardModule, CommonModule, ReactiveFormsModule, FormsModule, DialogModule],




  templateUrl: './ticket-preview.component.html',
  styleUrl: './ticket-preview.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class TicketPreviewComponent implements OnInit {
  activeIndex: number = 0;

  data !: any;
  gotData = false;
  allUserBookedTickets!: any[]
  From: string = '';
  To = ""
  Date = ""
  ticketInput!: FormGroup; 
  visible: boolean = false;
  constructor (private adminService: AdminDataService,
  private customerService: CustomerServiceService,
  private router: Router
  ){}

  ngOnInit(){
  console.log(
    this.adminService.To,
    this.adminService.From,
    this.adminService.Date
  );

  this.ticketInput = new FormGroup({
    To: new FormControl(null),
    From: new FormControl(null),
    Date: new FormControl(null) 
  })

  this.ticketInput.patchValue({
    To: this.adminService.To,
    From: this.adminService.From,
    Date: this.adminService.Date,
  })


  if (typeof sessionStorage !== 'undefined') {
    this.data = sessionStorage.getItem("userData");
    this.data =  JSON.parse(this.data)
    this.gotData = true;
    console.log(this.data.UserId);
    this.customerService.getAllBookedTickets(this.data.UserId)
    .subscribe({
      next: (res) =>{
        this.allUserBookedTickets = res
        console.log(res);
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
}
