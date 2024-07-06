import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTrainInfoComponent } from './edit-train-info.component';

describe('EditTrainInfoComponent', () => {
  let component: EditTrainInfoComponent;
  let fixture: ComponentFixture<EditTrainInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditTrainInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditTrainInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
