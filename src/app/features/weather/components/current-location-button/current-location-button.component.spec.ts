import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentLocationButtonComponent } from './current-location-button.component';

describe('CurrentLocationButtonComponent', () => {
  let component: CurrentLocationButtonComponent;
  let fixture: ComponentFixture<CurrentLocationButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurrentLocationButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrentLocationButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
