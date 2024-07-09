import { Component, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { FloatLabelModule } from 'primeng/floatlabel';
import { CalendarModule } from 'primeng/calendar';
import { runInThisContext } from 'vm';
import { OnReadOpts } from 'net';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AdminDataService } from '../../Services/Admin/admin-data.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ToastrModule, ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-ticket-input',
  standalone: true,
  imports: [CardModule, InputGroupModule, InputGroupAddonModule, FloatLabelModule, CalendarModule, ReactiveFormsModule, CommonModule,ToastrModule],

templateUrl: './ticket-input.component.html',
  styleUrl: './ticket-input.component.scss',
  providers: [ToastrService]
})
export class TicketInputComponent  implements OnInit{

  TicketInfo!: FormGroup;

  constructor(private adminService: AdminDataService, 
  private router: Router,
  private toastr: ToastrService
  ){}

  ngOnInit(): void {
    this.TicketInfo = new FormGroup({
      To: new FormControl(null, Validators.required),
      From: new FormControl(null, Validators.required),
      Date: new FormControl(null, Validators.required)
    })
  }

  PrintTicketInfo(){
    console.log(
      this.TicketInfo.value.To,
      this.TicketInfo.value.From,
      this.TicketInfo.value.Date,
    );
    if (this.TicketInfo.valid){
      this.adminService.transferInfo(this.TicketInfo.value.To, this.TicketInfo.value.From, this.TicketInfo.value.Date);
      this.router.navigate(['/customerTicketPreview'])
    }
    else{
      this.toastr.error('Credentials Error', `Enter correct credentials`);
      
    }
  }

  
}
