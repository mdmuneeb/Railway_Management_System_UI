import { ImplicitReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AdminDataService } from '../../Services/Admin/admin-data.service';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-station-info',
  standalone: true,
  imports: [TableModule, CommonModule],
  templateUrl: './station-info.component.html',
  styleUrl: './station-info.component.scss'
})
export class StationInfoComponent implements OnInit{
  
  constructor (private adminService: AdminDataService){}
  ticketsData!: any[];
  
  ngOnInit(): void {
    this.adminService.getAllTicket()
    .subscribe({
      next: (res) => {
        this.ticketsData = res
        console.log(res);
        
      }
    })
  }

}
