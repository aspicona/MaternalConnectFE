import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiasFormsComponent } from './noticias-forms.component';

describe('NoticiasFormsComponent', () => {
  let component: NoticiasFormsComponent;
  let fixture: ComponentFixture<NoticiasFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoticiasFormsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoticiasFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
