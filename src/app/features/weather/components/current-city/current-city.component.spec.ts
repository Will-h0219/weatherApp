import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentCityComponent } from './current-city.component';

describe('CurrentCityComponent', () => {
  let component: CurrentCityComponent;
  let fixture: ComponentFixture<CurrentCityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurrentCityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrentCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
