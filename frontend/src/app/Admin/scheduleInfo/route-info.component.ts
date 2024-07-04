import { ImplicitReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AdminDataService } from '../../Services/Admin/admin-data.service';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-route-info',
  standalone: true,
  imports: [TableModule, CommonModule],
  templateUrl: './route-info.component.html',
  styleUrl: './route-info.component.scss'
})
export class RouteInfoComponent implements OnInit{
  
  SchedulesData!:any[];
  constructor (private adminService: AdminDataService){}
  
  ngOnInit(): void {
    this.adminService.getAllSchedule()
    .subscribe({
      next: (res) =>{
        this.SchedulesData = res
        console.log(res);
      }
    })
  }


}
