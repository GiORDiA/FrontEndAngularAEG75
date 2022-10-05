import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEducationsComponent } from './edit-educations.component';

describe('EditEducationsComponent', () => {
  let component: EditEducationsComponent;
  let fixture: ComponentFixture<EditEducationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditEducationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditEducationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
