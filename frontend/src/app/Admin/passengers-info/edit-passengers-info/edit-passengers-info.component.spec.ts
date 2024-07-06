import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPassengersInfoComponent } from './edit-passengers-info.component';

describe('EditPassengersInfoComponent', () => {
  let component: EditPassengersInfoComponent;
  let fixture: ComponentFixture<EditPassengersInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditPassengersInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditPassengersInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
