import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaveBComponent } from './wave-b.component';

describe('WaveBComponent', () => {
  let component: WaveBComponent;
  let fixture: ComponentFixture<WaveBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaveBComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WaveBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
