import { Component, OnInit } from '@angular/core';
import { AdminDataService } from '../../Services/Admin/admin-data.service';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-trains-info',
  standalone: true,
  imports: [TableModule, CommonModule],
  templateUrl: './trains-info.component.html',
  styleUrl: './trains-info.component.scss'
})
export class TrainsInfoComponent implements OnInit{
  
  
  constructor (private adminService: AdminDataService){}

  trainsData!:any[]

  ngOnInit(): void {
    this.adminService.getAllTrains()
    .subscribe({
      next: (res) => {
        this.trainsData = res
        console.log(res);
        
      }    
    })
  }
  
}
