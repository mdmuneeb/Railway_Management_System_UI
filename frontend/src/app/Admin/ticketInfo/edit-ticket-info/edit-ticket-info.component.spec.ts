import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTicketInfoComponent } from './edit-ticket-info.component';

describe('EditTicketInfoComponent', () => {
  let component: EditTicketInfoComponent;
  let fixture: ComponentFixture<EditTicketInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditTicketInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditTicketInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
