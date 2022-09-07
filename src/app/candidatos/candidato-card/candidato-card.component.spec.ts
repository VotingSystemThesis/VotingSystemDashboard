import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatoCardComponent } from './candidato-card.component';

describe('CandidatoCardComponent', () => {
  let component: CandidatoCardComponent;
  let fixture: ComponentFixture<CandidatoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidatoCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CandidatoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
