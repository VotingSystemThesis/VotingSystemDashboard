import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartidoCardComponent } from './partido-card.component';

describe('PartidoCardComponent', () => {
  let component: PartidoCardComponent;
  let fixture: ComponentFixture<PartidoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartidoCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartidoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
