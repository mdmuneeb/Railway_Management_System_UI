import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterModule } from '@angular/router'; 
import { TrainsInfoComponent } from './../trains-info/trains-info.component';
import { DialogModule } from 'primeng/dialog';


@Component({
  selector: 'app-admin-portal',
  standalone: true,
  imports: [MatIconModule, RouterModule, TrainsInfoComponent, DialogModule],
templateUrl: './admin-portal.component.html',
  styleUrl: './admin-portal.component.scss'
})
export class AdminPortalComponent implements AfterViewInit {
  @ViewChild('toggle') toggle!: ElementRef;
  @ViewChild('nav') nav!: ElementRef;
  @ViewChild('bodypd') bodypd!: ElementRef;
  @ViewChild('headerpd') headerpd!: ElementRef;
  visible: boolean = false;

  constructor(private router: Router) {}

  ngAfterViewInit(): void {
    this.nav.nativeElement.classList.toggle('show');
    this.toggle.nativeElement.classList.toggle('bx-x');
    this.bodypd.nativeElement.classList.toggle('body-pd');
    this.headerpd.nativeElement.classList.toggle('body-pd');
    this.showNavbar();
  }
  showNavbar(): void {
    if (this.toggle && this.nav && this.bodypd && this.headerpd) {
      this.toggle.nativeElement.addEventListener('click', () => {
        // show navbar
        this.nav.nativeElement.classList.toggle('show');
        // change icon
        this.toggle.nativeElement.classList.toggle('bx-x');
        // add padding to body
        this.bodypd.nativeElement.classList.toggle('body-pd');
        // add padding to header
        this.headerpd.nativeElement.classList.toggle('body-pd');
      });
    }
  }
  colorLink(link: HTMLElement): void {
    const linkColor = document.querySelectorAll('.nav_link');
    if (linkColor) {
      linkColor.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    }
  }

  logOutUser(){
    if(typeof sessionStorage !== undefined){
      sessionStorage.removeItem("userData")
      this.router.navigate(['/landingPageCustomer'])
    }
  }

  showDialog() {
    this.visible = true;
  }



}

