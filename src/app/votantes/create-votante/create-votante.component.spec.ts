import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateVotanteComponent } from './create-votante.component';

describe('CreateVotanteComponent', () => {
  let component: CreateVotanteComponent;
  let fixture: ComponentFixture<CreateVotanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateVotanteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateVotanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
