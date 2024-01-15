import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VagaDePizzaComponent } from './vaga-de-pizza.component';

describe('VagaDePizzaComponent', () => {
  let component: VagaDePizzaComponent;
  let fixture: ComponentFixture<VagaDePizzaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VagaDePizzaComponent]
    });
    fixture = TestBed.createComponent(VagaDePizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
