import { Component, OnInit } from '@angular/core';
import { AdminDataService } from '../../Services/Admin/admin-data.service';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { DialogService, DynamicDialogModule, DynamicDialogRef } from 'primeng/dynamicdialog';
import { EditTrainInfoComponent } from './edit-train-info/edit-train-info.component';

@Component({
  selector: 'app-trains-info',
  standalone: true,
  imports: [TableModule, CommonModule, DynamicDialogModule],
  templateUrl: './trains-info.component.html',
  styleUrl: './trains-info.component.scss',
  providers: [DialogService]
})
export class TrainsInfoComponent implements OnInit{
  
  
  constructor (private adminService: AdminDataService,
    public dialogService: DialogService){}

  trainsData!:any[]
  ref: DynamicDialogRef | undefined;
  

  ngOnInit(): void {
    this.callAllTrains()
  }
  openEditTrain(id:string){
    this.ref = this.dialogService.open(EditTrainInfoComponent, {
      header: 'Edit Train',
      width: '50vw',
      modal:true,
      breakpoints: {
          '960px': '75vw',
          '640px': '90vw'
      },
      data:{
        Id: id,
        getTrains: this.callAllTrains.bind(this)
      }
  });
  }

  callAllTrains(){
    this.adminService.getAllTrains()
    .subscribe({
      next: (res) => {
        this.trainsData = res
        console.log(res);
      }    
    })
  }
}
