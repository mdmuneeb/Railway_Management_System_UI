import { Component, OnInit } from '@angular/core';
import { TicketInputComponent } from '../ticket-input/ticket-input.component';
import { CalendarModule } from 'primeng/calendar';
import { FloatLabelModule } from 'primeng/floatlabel';
import { ButtonModule } from 'primeng/button';
import { TabViewModule } from 'primeng/tabview';
import { CardModule } from 'primeng/card';


@Component({
  selector: 'app-ticket-preview',
  standalone: true,
  imports: [CalendarModule, FloatLabelModule, ButtonModule, TabViewModule, CardModule],
  templateUrl: './ticket-preview.component.html',
  styleUrl: './ticket-preview.component.scss'
})
export class TicketPreviewComponent implements OnInit {
  activeIndex: number = 0;

  ngOnInit(){
    
  }
}
