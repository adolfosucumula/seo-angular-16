import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VagaParaAjudanteDeCozinhaComponent } from './vaga-para-ajudante-de-cozinha.component';

describe('VagaParaAjudanteDeCozinhaComponent', () => {
  let component: VagaParaAjudanteDeCozinhaComponent;
  let fixture: ComponentFixture<VagaParaAjudanteDeCozinhaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VagaParaAjudanteDeCozinhaComponent]
    });
    fixture = TestBed.createComponent(VagaParaAjudanteDeCozinhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
