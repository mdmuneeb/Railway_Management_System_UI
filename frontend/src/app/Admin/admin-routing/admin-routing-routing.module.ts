import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrainsInfoComponent } from '../trains-info/trains-info.component';
import { PassengersInfoComponent } from '../passengers-info/passengers-info.component';
import { RouteInfoComponent } from '../scheduleInfo/route-info.component';
import { StationInfoComponent } from '../ticketInfo/station-info.component';
import { AdminPortalComponent } from '../admin-portal/admin-portal.component';


const routes: Routes = [
  {path: "", component: AdminPortalComponent, children: [
    {path: "trainsInfo", component: TrainsInfoComponent},
    {path: "passengersInfo", component: PassengersInfoComponent},
    {path: "routeInfo", component: RouteInfoComponent},
    {path: "stationInfo", component: StationInfoComponent},
    {path: "", redirectTo: "trainsInfo", pathMatch: "full"}
  
  ]},
  {path: "", redirectTo: "trainsInfo", pathMatch: "full"}



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  
exports: [RouterModule]
})
export class AdminRoutingRoutingModule { }
