import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullactivesComponent } from './fullactives.component';

describe('FullactivesComponent', () => {
  let component: FullactivesComponent;
  let fixture: ComponentFixture<FullactivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullactivesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FullactivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
