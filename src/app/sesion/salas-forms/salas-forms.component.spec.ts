import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalasFormsComponent } from './salas-forms.component';

describe('SalasFormsComponent', () => {
  let component: SalasFormsComponent;
  let fixture: ComponentFixture<SalasFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalasFormsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalasFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
