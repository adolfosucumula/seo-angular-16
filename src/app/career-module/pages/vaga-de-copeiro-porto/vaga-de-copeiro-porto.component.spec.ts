import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VagaDeCopeiroPortoComponent } from './vaga-de-copeiro-porto.component';

describe('VagaDeCopeiroPortoComponent', () => {
  let component: VagaDeCopeiroPortoComponent;
  let fixture: ComponentFixture<VagaDeCopeiroPortoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VagaDeCopeiroPortoComponent]
    });
    fixture = TestBed.createComponent(VagaDeCopeiroPortoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
