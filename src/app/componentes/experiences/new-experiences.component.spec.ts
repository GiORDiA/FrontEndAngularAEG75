import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewExperiencesComponent } from './new-experiences.component';

describe('NewExperiencesComponent', () => {
  let component: NewExperiencesComponent;
  let fixture: ComponentFixture<NewExperiencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewExperiencesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewExperiencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
