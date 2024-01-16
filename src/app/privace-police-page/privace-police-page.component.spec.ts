import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivacePolicePageComponent } from './privace-police-page.component';

describe('PrivacePolicePageComponent', () => {
  let component: PrivacePolicePageComponent;
  let fixture: ComponentFixture<PrivacePolicePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrivacePolicePageComponent]
    });
    fixture = TestBed.createComponent(PrivacePolicePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
