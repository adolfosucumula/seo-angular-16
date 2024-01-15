import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VagaOperadorDeInventariosPortoComponent } from './vaga-operador-de-inventarios-porto.component';

describe('VagaOperadorDeInventariosPortoComponent', () => {
  let component: VagaOperadorDeInventariosPortoComponent;
  let fixture: ComponentFixture<VagaOperadorDeInventariosPortoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VagaOperadorDeInventariosPortoComponent]
    });
    fixture = TestBed.createComponent(VagaOperadorDeInventariosPortoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
