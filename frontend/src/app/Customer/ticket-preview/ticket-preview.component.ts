import { Component } from '@angular/core';
import { TicketInputComponent } from '../ticket-input/ticket-input.component';
import { CalendarModule } from 'primeng/calendar';
import { FloatLabelModule } from 'primeng/floatlabel';

@Component({
  selector: 'app-ticket-preview',
  standalone: true,
  imports: [CalendarModule, FloatLabelModule],
  templateUrl: './ticket-preview.component.html',
  styleUrl: './ticket-preview.component.scss'
})
export class TicketPreviewComponent {

}
