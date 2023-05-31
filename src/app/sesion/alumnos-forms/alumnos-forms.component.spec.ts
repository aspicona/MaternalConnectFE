import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnosFormsComponent } from './alumnos-forms.component';

describe('AlumnosFormsComponent', () => {
  let component: AlumnosFormsComponent;
  let fixture: ComponentFixture<AlumnosFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlumnosFormsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlumnosFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
