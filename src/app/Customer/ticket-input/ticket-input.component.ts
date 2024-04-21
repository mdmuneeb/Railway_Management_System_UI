import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { FloatLabelModule } from 'primeng/floatlabel';
import { CalendarModule } from 'primeng/calendar';

@Component({
  selector: 'app-ticket-input',
  standalone: true,
  imports: [CardModule, InputGroupModule, InputGroupAddonModule, FloatLabelModule, CalendarModule],
  templateUrl: './ticket-input.component.html',
  styleUrl: './ticket-input.component.scss'
})
export class TicketInputComponent {

}
