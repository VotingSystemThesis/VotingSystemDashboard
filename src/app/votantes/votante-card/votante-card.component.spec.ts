import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VotanteCardComponent } from './votante-card.component';

describe('VotanteCardComponent', () => {
  let component: VotanteCardComponent;
  let fixture: ComponentFixture<VotanteCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VotanteCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VotanteCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
