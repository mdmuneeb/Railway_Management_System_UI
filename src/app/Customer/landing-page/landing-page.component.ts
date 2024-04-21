import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { ButtonModule } from 'primeng/button';
import { TicketInputComponent } from '../ticket-input/ticket-input.component';
import { FooterComponent } from "../footer/footer.component";

@Component({
    selector: 'app-landing-page',
    standalone: true,
    templateUrl: './landing-page.component.html',
    styleUrl: './landing-page.component.scss',
    imports: [NavbarComponent, ButtonModule, TicketInputComponent, FooterComponent]
})
export class LandingPageComponent {

}
