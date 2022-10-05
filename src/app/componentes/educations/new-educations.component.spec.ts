import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEducationsComponent } from './new-educations.component';

describe('NewEducationsComponent', () => {
  let component: NewEducationsComponent;
  let fixture: ComponentFixture<NewEducationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewEducationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewEducationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
