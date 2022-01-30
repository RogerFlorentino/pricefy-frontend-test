import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaPromocoesComponent } from './tabela-promocoes.component';

describe('TabelaPromocoesComponent', () => {
  let component: TabelaPromocoesComponent;
  let fixture: ComponentFixture<TabelaPromocoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabelaPromocoesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabelaPromocoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
