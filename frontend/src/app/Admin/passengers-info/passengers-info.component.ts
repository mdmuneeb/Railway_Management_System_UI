import { Component, OnInit } from '@angular/core';
import { AdminDataService } from '../../Services/Admin/admin-data.service';
import { log } from 'console';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { EditPassengersInfoComponent } from './edit-passengers-info/edit-passengers-info.component';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-passengers-info',
  standalone: true,
  imports: [TableModule, CommonModule],
  templateUrl: './passengers-info.component.html',
  styleUrl: './passengers-info.component.scss',
  providers: [DialogService]
})
export class PassengersInfoComponent implements OnInit{

  constructor(private adminService: AdminDataService,
    public dialogService: DialogService){}
  passengersData!:any[];
  ref: DynamicDialogRef | undefined;

  ngOnInit(): void {

    this.adminService.getAllPassengers()
    .subscribe({
      next: (res) => {
        this.passengersData = res
        console.log(res);
        
      }
    })
  }

  openEdit(id:any){
    this.ref = this.dialogService.open(EditPassengersInfoComponent, {
      header: 'Edit Passenger',
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
