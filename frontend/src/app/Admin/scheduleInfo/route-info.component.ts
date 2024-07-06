import { ImplicitReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AdminDataService } from '../../Services/Admin/admin-data.service';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { EditScheduleInfoComponent } from './edit-schedule-info/edit-schedule-info.component';

@Component({
  selector: 'app-route-info',
  standalone: true,
  imports: [TableModule, CommonModule],
  templateUrl: './route-info.component.html',
  styleUrl: './route-info.component.scss',
  providers: [DialogService]
})
export class RouteInfoComponent implements OnInit{
  
  SchedulesData!:any[];
  ref: DynamicDialogRef | undefined;

  constructor (private adminService: AdminDataService,
    public dialogService: DialogService){}
  
  ngOnInit(): void {
    this.adminService.getAllSchedule()
    .subscribe({
      next: (res) =>{
        this.SchedulesData = res
        console.log(res);
      }
    })
  }

  openEdit(id:string){
    this.ref = this.dialogService.open(EditScheduleInfoComponent, {
      header: 'Edit Schedule',
      width: '50vw',
      modal:true,
      breakpoints: {
          '960px': '75vw',
          '640px': '90vw'
      },
      data:{
        Id: id
      }
  });
  }


}
