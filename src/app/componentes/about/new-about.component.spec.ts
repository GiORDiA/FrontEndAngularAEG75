import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAboutComponent } from './new-about.component';

describe('NewAboutComponent', () => {
  let component: NewAboutComponent;
  let fixture: ComponentFixture<NewAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewAboutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
