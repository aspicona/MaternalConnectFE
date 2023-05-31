import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocentesFormsComponent } from './docentes-forms.component';

describe('DocentesFormsComponent', () => {
  let component: DocentesFormsComponent;
  let fixture: ComponentFixture<DocentesFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocentesFormsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocentesFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
