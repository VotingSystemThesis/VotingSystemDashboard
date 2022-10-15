import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsinfoComponent } from './statsinfo.component';

describe('StatsinfoComponent', () => {
  let component: StatsinfoComponent;
  let fixture: ComponentFixture<StatsinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatsinfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatsinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
