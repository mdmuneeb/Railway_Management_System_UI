import { Component, OnInit } from '@angular/core';
import { TicketInputComponent } from '../ticket-input/ticket-input.component';
import { CalendarModule } from 'primeng/calendar';
import { FloatLabelModule } from 'primeng/floatlabel';
import { TabMenuModule } from 'primeng/tabmenu';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-ticket-preview',
  standalone: true,
  imports: [CalendarModule, FloatLabelModule, TabMenuModule],
  templateUrl: './ticket-preview.component.html',
  styleUrl: './ticket-preview.component.scss'
})
export class TicketPreviewComponent implements OnInit {
  items: MenuItem[] | undefined;

  ngOnInit(){
    this.items = [
      {
          label: 'Business',
          icon: 'pi pi-home',
          command: () => {
              alert("Business")
          }
      },
      {
          label: 'Economy',
          icon: 'pi pi-chart-line',
          command: () => {
              alert("Economy")
          }
      }
      
  ];
  }
}
