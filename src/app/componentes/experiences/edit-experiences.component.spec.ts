import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditExperiencesComponent } from './edit-experiences.component';

describe('EditExperiencesComponent', () => {
  let component: EditExperiencesComponent;
  let fixture: ComponentFixture<EditExperiencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditExperiencesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditExperiencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
