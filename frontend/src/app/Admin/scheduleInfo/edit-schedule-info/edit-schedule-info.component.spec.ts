import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditScheduleInfoComponent } from './edit-schedule-info.component';

describe('EditScheduleInfoComponent', () => {
  let component: EditScheduleInfoComponent;
  let fixture: ComponentFixture<EditScheduleInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditScheduleInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditScheduleInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
