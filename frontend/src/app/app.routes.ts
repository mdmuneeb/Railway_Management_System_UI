import { Routes } from '@angular/router';
import path from 'node:path';
import { CommonEngine } from '@angular/ssr';
import { Component } from '@angular/core';
import { LandingPageComponent } from './Customer/landing-page/landing-page.component';
import { NavbarComponent } from './Customer/navbar/navbar.component';

import { TicketPreviewComponent } from './Customer/ticket-preview/ticket-preview.component';
import { LoginComponent } from './Public/Login/login/login.component';

export const routes: Routes = [
    {path: "landingPageCustomer", component: LandingPageComponent},
    {path: "navbar", component: NavbarComponent},
    {path: "loginPage", component: LoginComponent},
    {path: "customerTicketPreview", component: TicketPreviewComponent},
    {path: "adminPortal", loadChildren:()=> import('./Admin/admin-routing/admin-routing.module').then(m=>m.AdminRoutingModule)},


];
