import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaveAComponent } from './wave-a.component';

describe('WaveAComponent', () => {
  let component: WaveAComponent;
  let fixture: ComponentFixture<WaveAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaveAComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WaveAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
