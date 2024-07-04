import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit{
    dataPresent = false;
    jsonDataParsed!:any;
  
  ngOnInit(): void {
    if (typeof sessionStorage !== 'undefined'){
      let jsonData = sessionStorage.getItem("userData");
      if (jsonData){
        this.dataPresent = true
        this.jsonDataParsed = JSON.parse(jsonData);
        console.log(this.jsonDataParsed);
      }
      else{
        this.dataPresent = false
      }  
    }else {
      console.error('sessionStorage is not available');
    }
  }
  isNavbarCollapsed = true;

  toggleNavbar() {
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
    
  }

}
