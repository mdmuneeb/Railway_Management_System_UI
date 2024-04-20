import { Routes } from '@angular/router';
import path from 'node:path';
import { CommonEngine } from '@angular/ssr';
import { Component } from '@angular/core';
import { LandingPageComponent } from './Customer/landing-page/landing-page.component';
import { NavbarComponent } from './Customer/navbar/navbar.component';

export const routes: Routes = [
    {path: "landingPageCustomer", component: LandingPageComponent},
    {path: "navbar", component: NavbarComponent}
    
];
