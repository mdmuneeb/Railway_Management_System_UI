import { Component, OnInit } from '@angular/core';
import { AdminDataService } from '../../Services/Admin/admin-data.service';
import { log } from 'console';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-passengers-info',
  standalone: true,
  imports: [TableModule, CommonModule],
  templateUrl: './passengers-info.component.html',
  styleUrl: './passengers-info.component.scss'
})
export class PassengersInfoComponent implements OnInit{

  constructor(private adminService: AdminDataService){}
  passengersData!:any[];

  ngOnInit(): void {

    this.adminService.getAllPassengers()
    .subscribe({
      next: (res) => {
        this.passengersData = res
        console.log(res);
        
      }
    })
  }
}
