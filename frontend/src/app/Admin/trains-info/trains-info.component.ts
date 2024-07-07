import { Component, OnInit } from '@angular/core';
import { AdminDataService } from '../../Services/Admin/admin-data.service';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { DialogService, DynamicDialogModule, DynamicDialogRef } from 'primeng/dynamicdialog';
import { EditTrainInfoComponent } from './edit-train-info/edit-train-info.component';
import { ToastrService } from 'ngx-toastr';
import { SpinnerComponent } from "../../Public/spinner/spinner.component";
import { setTimeout } from 'timers/promises';
import { takeUntil } from 'rxjs';

@Component({
    selector: 'app-trains-info',
    standalone: true,
    templateUrl: './trains-info.component.html',
    styleUrl: './trains-info.component.scss',
    providers: [DialogService, ToastrService],
    imports: [TableModule, CommonModule, DynamicDialogModule, SpinnerComponent]
})
export class TrainsInfoComponent implements OnInit{
  
  
  constructor (private adminService: AdminDataService,
    public dialogService: DialogService,
    private toastr: ToastrService){}

  trainsData!:any[]
  ref: DynamicDialogRef | undefined;
  isTrue = false;
  

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

  // deleteTrain(){
  //   setTimeout(this.isTrue= true
  //     , 1000)
  //     this.isTrue = false
  //     this.
  //     this.toastr.warning('Hello world!', 'Toastr fun!');
  // }
}
