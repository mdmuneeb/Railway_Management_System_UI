import { ImplicitReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AdminDataService } from '../../Services/Admin/admin-data.service';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { EditTicketInfoComponent } from './edit-ticket-info/edit-ticket-info.component';


@Component({
  selector: 'app-station-info',
  standalone: true,
  imports: [TableModule, CommonModule],
  templateUrl: './station-info.component.html',
  styleUrl: './station-info.component.scss',
  providers: [DialogService]
})
export class StationInfoComponent implements OnInit{
  
  constructor (private adminService: AdminDataService,
    public dialogService: DialogService){}


  ticketsData!: any[];
  ref: DynamicDialogRef | undefined;
  
  ngOnInit(): void {
    this.adminService.getAllTicket()
    .subscribe({
      next: (res) => {
        this.ticketsData = res
        console.log(res);
        
      }
    })
  }
  openEdit(uid:any, pid:any, sid:any){
    this.ref = this.dialogService.open(EditTicketInfoComponent, {
      header: 'Edit Ticket',
      width: '50vw',
      modal:true,
      breakpoints: {
          '960px': '75vw',
          '640px': '90vw'
      },
      data:{
        User_ID: uid,
        passenger_id: pid,
        sch_id: sid
      }
  });
  }  

  setDate(date:any){
    let setDate = date.split("T")
    return setDate[0]
  }

}
