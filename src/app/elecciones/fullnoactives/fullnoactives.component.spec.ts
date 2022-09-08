import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullnoactivesComponent } from './fullnoactives.component';

describe('FullnoactivesComponent', () => {
  let component: FullnoactivesComponent;
  let fixture: ComponentFixture<FullnoactivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullnoactivesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FullnoactivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
