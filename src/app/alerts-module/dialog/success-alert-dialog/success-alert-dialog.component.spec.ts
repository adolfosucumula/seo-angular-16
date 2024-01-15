import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessAlertDialogComponent } from './success-alert-dialog.component';

describe('SuccessAlertDialogComponent', () => {
  let component: SuccessAlertDialogComponent;
  let fixture: ComponentFixture<SuccessAlertDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuccessAlertDialogComponent]
    });
    fixture = TestBed.createComponent(SuccessAlertDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
