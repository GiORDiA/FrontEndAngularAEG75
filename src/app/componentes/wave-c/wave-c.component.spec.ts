import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaveCComponent } from './wave-c.component';

describe('WaveCComponent', () => {
  let component: WaveCComponent;
  let fixture: ComponentFixture<WaveCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaveCComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WaveCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
