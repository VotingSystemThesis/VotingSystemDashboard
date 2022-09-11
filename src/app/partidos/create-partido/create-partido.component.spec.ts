import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePartidoComponent } from './create-partido.component';

describe('CreatePartidoComponent', () => {
  let component: CreatePartidoComponent;
  let fixture: ComponentFixture<CreatePartidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePartidoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatePartidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
