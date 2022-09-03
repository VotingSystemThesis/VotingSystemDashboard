import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EleccionesCardComponent } from './elecciones-card.component';

describe('EleccionesCardComponent', () => {
  let component: EleccionesCardComponent;
  let fixture: ComponentFixture<EleccionesCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EleccionesCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EleccionesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
