import { Component, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { FloatLabelModule } from 'primeng/floatlabel';
import { CalendarModule } from 'primeng/calendar';
import { runInThisContext } from 'vm';
import { OnReadOpts } from 'net';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AdminDataService } from '../../Services/Admin/admin-data.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-ticket-input',
  standalone: true,
  imports: [CardModule, InputGroupModule, InputGroupAddonModule, FloatLabelModule, CalendarModule, ReactiveFormsModule],

templateUrl: './ticket-input.component.html',
  styleUrl: './ticket-input.component.scss'
})
export class TicketInputComponent  implements OnInit{

  TicketInfo!: FormGroup;

  constructor(private adminService: AdminDataService, 
  private router: Router
  ){}

  ngOnInit(): void {
    this.TicketInfo = new FormGroup({
      To: new FormControl(null),
      From: new FormControl(null),
      Date: new FormControl(null)
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
      
    }
  }

  
}
