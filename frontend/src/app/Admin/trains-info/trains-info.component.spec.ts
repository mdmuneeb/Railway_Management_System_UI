import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainsInfoComponent } from './trains-info.component';

describe('TrainsInfoComponent', () => {
  let component: TrainsInfoComponent;
  let fixture: ComponentFixture<TrainsInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrainsInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TrainsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
